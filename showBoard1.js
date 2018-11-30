// Model
var model = {
    number: 6,
    images: [
        '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '',
    ],
    pieceIndex: 1
}

function showBoard1() {
    document.getElementById('board').innerHTML = `
        <svg viewbox="0 0 100 100">
            <rect class="board" width="100" height="100" />
            <!-- Rad 1 fra venstre -->
            <rect class="whiteSquare" x="34" y="1.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[0]}" y="1.5" x="34" width="10" height="10"/>
            <rect class="whiteSquare" x="34" y="12.5" width="10" height="10" />
            <circle cx="39" cy="17" r="3" fill="${model.pieceIndex == 1 ? 'black' : 'transparent'}" />
			<image href="${model.images[1]}" y="12.5" x="34" width="10" height="10"/>
            <rect class="whiteSquare" x="34" y="23.5" width="10" height="10" />
            <circle cx="39" cy="28" r="3" fill="${model.pieceIndex == 2 ? 'black' : 'transparent'}" />
			<image href="${model.images[2]}" y="23.5" x="34" width="10" height="10"/>

            <!-- Rad 2 fra venstre -->
            <rect class="red square" x="45" y="1.5" width="10" height="10" />
            <circle cx="50" cy="6" r="3" fill="${model.pieceIndex == 3 ? 'black' : 'transparent'}" />
            <rect class="red square" x="45" y="12.5" width="10" height="10" />
            <circle cx="50" cy="17" r="3" fill="${model.pieceIndex == 4 ? 'black' : 'transparent'}" />
            <rect class="red square" x="45" y="23.5" width="10" height="10" />
            <circle cx="50" cy="28" r="3" fill="${model.pieceIndex == 5 ? 'black' : 'transparent'}" />
            
			<!-- Rad 3 fra venstre -->
            <rect class="red square" x="56" y="1.5" width="10" height="10" />
            <circle cx="61" cy="6" r="3" fill="${model.pieceIndex == 6 ? 'black' : 'transparent'}" />
            <rect class="whiteSquare" x="56" y="12.5" width="10" height="10" />
            <circle cx="61" cy="17" r="3" fill="${model.pieceIndex == 7 ? 'black' : 'transparent'}" />
			<image href="${model.images[3]}" y="12.5" x="56" width="10" height="10"/>
            <rect class="whiteSquare" x="56" y="23.5" width="10" height="10" />
            <circle cx="61" cy="28" r="3" fill="${model.pieceIndex == 8 ? 'black' : 'transparent'}" />
			<image href="${model.images[4]}" y="23.5" x="56" width="10" height="10"/>
            
			<!-- Rad 1 fra toppen til venstre -->
            <rect class="yellow square" x="1.5" y="34" width="10" height="10" />
            <circle cx="6.5" cy="38.5" r="3" fill="${model.pieceIndex == 9 ? 'black' : 'transparent'}" />
            <rect class="whiteSquare" x="12.5" y="34" width="10" height="10" />
            <circle cx="6.5" cy="38.5" r="3" fill="${model.pieceIndex == 10 ? 'black' : 'transparent'}" />
			<image href="${model.images[5]}"  y="34" x="12.5" width="10" height="10"/>
            <rect class="whiteSquare" x="23.5" y="34" width="10" height="10" />
            <circle cx="6.5" cy="38.5" r="3" fill="${model.pieceIndex == 11 ? 'black' : 'transparent'}" />
			<image href="${model.images[6]}" y="34" x="23.5" width="10" height="10"/>
            
			<!-- Rad 2 fra toppen til venstre -->
            <rect class="yellow square" x="1.5" y="45" width="10" height="10" />
            <circle cx="6.5" cy="49.5" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="yellow square" x="12.5" y="45" width="10" height="10" />
            <circle cx="6.5" cy="17" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="yellow square" x="23.5" y="45" width="10" height="10" />
            <circle cx="6.5" cy="28" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            
			<!-- Rad 3 fra toppen til venstre -->
            <rect class="whiteSquare" x="1.5" y="56" width="10" height="10" />
            <circle cx="6.5" cy="60.5" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[7]}" y="56" x="1.5" width="10" height="10"/>
            <rect class="whiteSquare" x="12.5" y="56" width="10" height="10" />
            <circle cx="17.5" cy="60.5" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[8]}" y="56" x="12.5" width="10" height="10"/>
            <rect class="whiteSquare" x="23.5" y="56" width="10" height="10" />
            <circle cx="28.5" cy="60.5" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[9]}" y="56" x="23.5" width="10" height="10"/>
            
			<!-- Rad 1 fra venstre på bunnen -->
            <rect class="whiteSquare" x="34" y="66.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[10]}" y="66.5" x="34" width="10" height="10"/>
            <rect class="whiteSquare" x="34" y="77.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[11]}" y="77.5" x="34" width="10" height="10"/>
            <rect class="green square" x="34" y="88.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            
			<!-- Rad 2 fra venstre på bunnen -->
            <rect class="green square" x="45" y="66.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="green square" x="45" y="77.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="green square" x="45" y="88.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            
			<!-- Rad 3 fra venstre på bunnen -->
            <rect class="whiteSquare" x="56" y="66.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[12]}" y="66.5" x="56" width="10" height="10"/>
            <rect class="whiteSquare" x="56" y="77.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[13]}" y="77.5" x="56" width="10" height="10"/>
            <rect class="whiteSquare" x="56" y="88.5" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[14]}" y="88.5" x="56" width="10" height="10"/>
            
			<!-- Rad 1 fra toppen til høyre -->
            <rect class="whiteSquare" x="66.5" y="34" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[15]}" y="34" x="66.5" width="10" height="10"/>
            <rect class="whiteSquare" x="77.5" y="34" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[16]}" y="34" x="77.5" width="10" height="10"/>
            <rect class="whiteSquare" x="88.5" y="34" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
			<image href="${model.images[17]}" y="56" x="23.5" width="10" height="10"/>
            
			<!-- Rad 2 fra toppen til høyre -->
            <rect class="blue square" x="66.5" y="45" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="blue square" x="77.5" y="45" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="blue square" x="88.5" y="45" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            
			<!-- Rad 3 fra toppen til høyre -->
            <rect class="whiteSquare" x="66.5" y="56" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="whiteSquare" x="77.5" y="56" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="blue square" x="88.5" y="56" width="10" height="10" />
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            
			<!-- Plassen til brikkene -->
            <rect class="Yellow" y="1.3" x="1.3" width="31.7" height="31.7"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="white" y="4.5" x="4.5" width="25" height="25"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />

            <rect class="Red" y="1.3" x="67" width="31.7" height="31.7"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="white" y="4.5" x="70.5" width="25" height="25"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />

            <rect class="Green" y="67" x="1.3" width="31.7" height="31.7"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="white" y="70.3" x="4.3" width="25" height="25"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />

            <rect class="Blue" y="67" x="67" width="31.7" height="31.7"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <rect class="white" y="70.3" x="70.5" width="25" height="25"/>
            <circle cx="39" cy="6" r="3" fill="${model.pieceIndex == 0 ? 'black' : 'transparent'}" />
            <!-- Mål merkene -->
            <polygon class="red polygon" points="50,49.5 34.7,34.2 65.4,34.2"/>
            <polygon class="yellow polygon" points="49.5,50 34.2,34.7 34.2,65.4"/>
            <polygon class="green polygon" points="50,50.5 65.4,65.9 34.7,65.9"/>
            <polygon class="blue polygon" points="50.5,50 65.9,34.7 65.9,65.4"/>
            
			<!-- Bokstaver -->
            <!-- Røde siden -->
            <text x="37" y="8" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="37" y="19" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="37" y="30" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="59" y="19" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="59" y="30" font-family="sans-serif" font-size="6px" fill="black"></text>
            
			<!-- Blå siden -->
            <text x="70" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="81" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="92" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="70" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="81" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            
			<!-- Grønne siden -->
            <text x="59" y="74" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="59" y="85" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="59" y="96" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="37" y="74" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="37" y="85" font-family="sans-serif" font-size="6px" fill="black"></text>
            
			<!-- Gule siden -->
            <text x="26" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="15" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="4" y="63" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="15" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>
            <text x="26" y="41" font-family="sans-serif" font-size="6px" fill="black"></text>

			${getDiceHtml(model.number)}
        </svg>`;
}

function rollDice() {
    model.number = Math.ceil(Math.random() * 6);
    showBoard1();
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

