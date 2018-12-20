const ludo = {
    colors: ['red', 'green', 'blue', 'yellow'],
    zones: ['start', 'home', 'finish', 'prefinish'],
    positionIndexes: [0, 1, 2, 3],
    pieces: {
        red: [
            { id: 0, color: 'red', areaColor: 'red', zone: 'home', positionIndex: 0 },
            { id: 1, color: 'red', areaColor: 'red', zone: 'home', positionIndex: 1 },
            { id: 2, color: 'red', areaColor: 'red', zone: 'home', positionIndex: 2 },
            { id: 3, color: 'red', areaColor: 'red', zone: 'home', positionIndex: 3 }
        ],
        green: [
            { id: 0, color: 'green', areaColor: 'green', zone: 'home', positionIndex: 0 },
            { id: 1, color: 'green', areaColor: 'green', zone: 'home', positionIndex: 1 },
            { id: 2, color: 'green', areaColor: 'green', zone: 'home', positionIndex: 2 },
            { id: 3, color: 'green', areaColor: 'green', zone: 'home', positionIndex: 3 }
        ],
        blue: [
            { id: 0, color: 'blue', areaColor: 'blue', zone: 'home', positionIndex: 0 },
            { id: 1, color: 'blue', areaColor: 'blue', zone: 'home', positionIndex: 1 },
            { id: 2, color: 'blue', areaColor: 'blue', zone: 'home', positionIndex: 2 },
            { id: 3, color: 'blue', areaColor: 'blue', zone: 'home', positionIndex: 3 }
        ],
        yellow: [
            { id: 0, color: 'yellow', areaColor: 'yellow', zone: 'home', positionIndex: 0 },
            { id: 1, color: 'yellow', areaColor: 'yellow', zone: 'home', positionIndex: 1 },
            { id: 2, color: 'yellow', areaColor: 'yellow', zone: 'home', positionIndex: 2 },
            { id: 3, color: 'yellow', areaColor: 'yellow', zone: 'home', positionIndex: 3 }
        ]
    }
};


var positionOfOnePiece = {
    areaColor: 'green', // eller: red, blue, yellow
    zone: 'start', // eller finish, prefinish, home
    positionIndex: 0
    /* Lovlige verdier: 
     * start     => 0, 1, 2
     * prefinish => 0, 1, 2
     * finish    => 0, 1, 2, 3
     * home      => 0, 1, 2, 3
     */
};

function isPositionValid(position) {
    const areaColor = position.areaColor;
    const zone = position.zone;
    const positionIndex = position.positionIndex;
    if (!areaColor || !zone || positionIndex === undefined) return { isValid: false, error: 'missing field' };
    if (!ludo.colors.includes(areaColor)) return { isValid: false, error: 'missing areaColor' };
    if (!ludo.zones.includes(zone)) return { isValid: false, error: 'missing zone' };
    if (positionIndex >= 0 && positionIndex <= 2) return { isValid: true };
    if (positionIndex === 3 && (zone === 'home' || zone === 'finish')) return { isValid: true };
    return { isValid: false, error: 'positionIndex === 3 in start or prefinish' };
}
