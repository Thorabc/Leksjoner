"use strict";

var diceValue = 6;
var model = {
    images: [
        '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '',
    ],
    pieceIndex: 1
}

function getXY(position) {
    const areaColor = position.areaColor;
    const zone = position.zone;
    const positionIndex = position.positionIndex;
    if (areaColor === 'red') {
        if (zone === 'home') {
            const row = positionIndex < 2 ? 0 : 1;
            const col = positionIndex % 2 === 0 ? 0 : 1;
            return { x: 6.5 + col, y: 0.5 + row };
        } else {
            const x = zone === 'start' ? 5 : zone === 'finish' ? 4 : 3;
            return { x, y: positionIndex };
        }
    } else if (areaColor === 'green') {
        if (zone === 'home') {
            const row = positionIndex < 2 ? 0 : 1;
            const col = positionIndex % 2 === 0 ? 0 : 1;
            return { x: 0.5 + col, y: 6.5 + row };
        } else {
            const x = zone === 'start' ? 3 : zone === 'finish' ? 4 : 5;
            return { x, y: 8 - positionIndex };
        }
    } else if (areaColor === 'blue') {
        if (zone === 'home') {
            const row = positionIndex < 2 ? 0 : 1;
            const col = positionIndex % 2 === 0 ? 0 : 1;
            return { x: 6.5 + col, y: 6.5 + row };
        } else {
            const y = zone === 'start' ? 5 : zone === 'finish' ? 4 : 3;
            return { x: 8 - positionIndex, y };
        }
    } else if (areaColor === 'yellow') {
        if (zone === 'home') {
            const row = positionIndex < 2 ? 0 : 1;
            const col = positionIndex % 2 === 0 ? 0 : 1;
            return { x: 0.5 + col, y: 0.5 + row };
        } else {
            const y = zone === 'start' ? 3 : zone === 'finish' ? 4 : 5;
            return { x: positionIndex, y };
        }
    }
    return { x: 1, y: 1 };
}

function addHtmlForSquareAndPieces(position) {
    const xy = getXY(position);
    let color = position.areaColor;
    if (position.zone === 'prefinish') color = '';
    if (position.zone === 'start' && position.positionIndex > 0) color = '';
    let sx = 1.5 + 10.9 * xy.x;
    let sy = 1.5 + 10.9 * xy.y;
    let html = `<rect class="${color} square" x="${sx}" y="${sy}" width="10" height="10" />`;
    if (position.zone === 'home') html = '';
    if (position.zone === 'finish' && position.positionIndex === 3) html = '';
    const pieces = getPiecesInPosition(position);
    let px = 6.5 + 10.9 * xy.x;
    let py = 6.5 + 10.9 * xy.y;
    for (const piece of pieces) {
        console.log(piece, xy);
        html += `<circle onclick="movePiece('${piece.color}',${piece.id})" cx="${px}" cy="${py}" r="3" fill="${piece.color}" stroke="black" />`;
        px += 0.4;
        py += 0.4;
    }
    return html;
}

function movePiece(color, id) {
    const piece = ludo.pieces[color][id];
    if (piece.zone === 'start') {
        if (piece.positionIndex < 2) {
            piece.positionIndex++;
        } else {
            piece.zone = 'prefinish';
            piece.positionIndex = 2;
            piece.areaColor = getNextColor(piece.areaColor);
        }
    } else if (piece.zone === 'home') {
        piece.positionIndex = 0;
        piece.zone = 'start';
    } else if (piece.zone === 'finish') {
        if (piece.positionIndex === 0 && piece.areaColor !== piece.color) {
            piece.zone = 'start';
        } else if (piece.positionIndex < 3) {
            piece.positionIndex++;
        }
    } else if (piece.zone === 'prefinish') {
        if (piece.positionIndex > 0) {
            piece.positionIndex--;
        } else {
            piece.zone = 'finish';
            piece.positionIndex = 0;
        }
    }

    showBoard1();
}

function getNextColor(color) {
    if (color === 'red') return 'blue';
    if (color === 'blue') return 'green';
    if (color === 'green') return 'yellow';
    return 'red';
}

function getPiecesInPosition(position) {
    const piecesInPosition = [];
    const allPieces = [...ludo.pieces.red, ...ludo.pieces.blue, ...ludo.pieces.green, ...ludo.pieces.yellow];
    for (const piece of allPieces) {
        const areEqual = piece.areaColor === position.areaColor &&
            piece.zone === position.zone &&
            piece.positionIndex === position.positionIndex;
        //console.log(areEqual, piece.areaColor, position.areaColor, piece.zone, position.zone, piece.positionIndex, position.positionIndex);
        if (areEqual) {
            piecesInPosition.push(piece);
        }
    }
    return piecesInPosition;
}

function showBoard1() {
    let html = `
        <svg viewbox="0 0 100 100">
            <rect class="board" width="100" height="100" />

            <!-- Mål merkene -->
            <polygon class="red polygon" points="50,49.5 34.7,34.2 65.4,34.2"/>
            <polygon class="yellow polygon" points="49.5,50 34.2,34.7 34.2,65.4"/>
            <polygon class="green polygon" points="50,50.5 65.4,65.9 34.7,65.9"/>
            <polygon class="blue polygon" points="50.5,50 65.9,34.7 65.9,65.4"/>

        `;

    for (let areaColor of ludo.colors) {
        for (let zone of ludo.zones) {
            for (let positionIndex of ludo.positionIndexes) {
                const position = { areaColor, zone, positionIndex };
                const validation = isPositionValid(position);
                if (validation.isValid) {
                    html += addHtmlForSquareAndPieces(position);
                }
            }
        }
    }

    html += `<!--Plassen til brikkene-- >
            <rect class="Yellow" y="1.3" x="1.3" width="31.7" height="31.7" />
            <rect class="white" y="4.5" x="4.5" width="25" height="25" />
            

            <rect class="Red" y="1.3" x="67" width="31.7" height="31.7" />
            <rect class="white" y="4.5" x="70.5" width="25" height="25" />

            <rect class="Green" y="67" x="1.3" width="31.7" height="31.7" />
            <rect class="white" y="70.3" x="4.3" width="25" height="25" />

            <rect class="Blue" y="67" x="67" width="31.7" height="31.7" />
            <rect class="white" y="70.3" x="70.5" width="25" height="25" />

            <!-- Bokstaver -->
            
			<!-- Røde siden -->
            <text class="overlay" x="37" y="8" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="37" y="19" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="37" y="30" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="59" y="19" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="59" y="30" font-family="sans-serif" font-size="6px" fill="black"></text>
            
			<!-- Blå siden -->
            <text class="overlay" x="70" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="81" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="92" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="70" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="81" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            
			<!-- Grønne siden -->
            <text class="overlay" x="59" y="74" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="59" y="85" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="59" y="96" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="37" y="74" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="37" y="85" font-family="sans-serif" font-size="6px" fill="black"></text>
            
			<!-- Gule siden -->
            <text class="overlay" x="26" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="15" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="4" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="15" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text class="overlay" x="26" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>'

            ${getDiceHtml(diceValue)}
</svg >`;
    document.getElementById('board').innerHTML = html;
}

function diceRoll1() {
    diceValue = Math.ceil(Math.random() * 6);
    console.log(diceValue);
    showBoard1();
}

function diceRoll2() {
    diceValue = Math.ceil(Math.random() * 6);
    console.log(diceValue);
    showBoard2();
}

function diceRoll3() {
    diceValue = Math.ceil(Math.random() * 6);
    console.log(diceValue);
    showBoard3();
}

function getRandomDiceHTML() {
    var number = Math.ceil(Math.random() * 6);
    return getDiceHtml(number, false);
}


function getDiceHtml(value, isHeld) {
    var cssClass = isHeld ? 'diceHeld' : '';
    var html = '<g transform="scale(0.1 0.1) translate(430 430)">'
        + '<rect class="dice" x="5" y="5" rx="20" ry="20" width="130" height="130" />';

    if (value > 1) html += '<circle cx= "30" cy= "30" r= "13" />';
    if (value > 3) html += '<circle cx="110" cy="30" r="13" />';
    if (value === 6) html += '<circle cx="30" cy="70" r="13" />';
    if (value % 2 === 1) html += '<circle cx="70" cy="70" r="13" />';
    if (value === 6) html += '<circle cx="110" cy="70" r="13" />';
    if (value > 3) html += '<circle cx="30" cy="110" r="13" />';
    if (value > 1) html += '<circle cx="110" cy="110" r="13" />';
    html += '</g>';
    return html;
}
function searchImages() {
    var searchTxt = document.getElementById('searchText').value;
    const Http = new XMLHttpRequest();
    const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d249ae8f217acdc37f60047a3a387f74&extras=url_m&format=json&nojsoncallback=1&per_page=20&sort=relevance&text=' + searchTxt;
    console.log(url);
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        var response = JSON.parse(Http.responseText);
        console.log(response);
        var html = '';
        for (var photo of response.photos.photo) {
            html += `<img height="100" src="${photo.url_m}"/><select onchange="setImage('${photo.url_m}', this)">`;
            for (var i = 0; i < 20; i++) {
                html += `<option value="${i}">${i + 1}</button>`;
            }
            html += `</select><br/>
                `;
        }
        document.getElementById('results').innerHTML = html;
    };
}

function setImage(url, selectTag) {
    var i = selectTag.value;
    model.images[i] = url;
    showBoard1();
}

