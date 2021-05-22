// Tutaj pierwsza wersja, wszystko działa


// Aplikacja do konwersji między jednostkami miary. Domyślnie aplikacja powinna rozpoznawać m, cm, in, ft i obsługiwać konwersję między tymi jednostkami. należy również zaimplementować możliwość rozszerzenia listy obsługiwanych jednostek poprzez ustawienie reguł konwersji za pomocą pliku JSON. na przykład rozszerz aplikację, dodając wartości do pliku dla
// mm, yd, km.

// Wstępne dane : object w JSON format 
// {"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}

// Wynik dziłania : object w JSON format
// {"unit": "ft", "value": 1.64}

const distanceData = '{"distance" : {"unit" : "km", "value" : 6}, "convert_to": "m"}';
const obj = JSON.parse(distanceData);

const num = obj.distance.value,
      convertFrom = obj.distance.unit,
      convertTo = obj.convert_to;

function convertUnits(value, distanceFrom, distanceTo) {    
    const convertedResult = value / setCoefficient(distanceFrom) * setCoefficient(distanceTo);
    return convertedResult.toFixed(2); 
}


function setCoefficient(convertedToMeter) {
    let coefficient;
    switch (convertedToMeter) {
        case 'km':
            coefficient = 0.001;
            break;
        case 'm':
            coefficient = 1;
            break;
        case 'cm':
            coefficient = 100;
            break;
        case 'mm':
            coefficient = 1000;
        case 'ft':
            coefficient = 3.28084;
            break;
        case 'yd':
            coefficient = 1.09361;
            break;
        case 'in':
            coefficient = 39.3701;
            break;
    }
    return coefficient;
}

console.log(convertUnits(num, convertFrom, convertTo));






