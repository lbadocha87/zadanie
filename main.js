// 

const distanceData = '{"distance" : {"unit" : "km", "value" : 6}, "convert_to": "m"}';
const obj = JSON.parse(distanceData);

const rules = '{"conversion_rules" : {"unit" : "mile", "value" : 0.000621371}}';
const rulesObj = JSON.parse(rules);

const dict = {
    "m": 1,
    "cm" : 0.001,
    "in": 39.3701,
    "ft": 3.28084
};

dict[rulesObj.conversion_rules.unit] = rulesObj.conversion_rules.value;
console.log(dict);

const num = obj.distance.value,
      convertFrom = obj.distance.unit,
      convertTo = obj.convert_to;

function convertUnits(value, distanceFrom, distanceTo) {
    // const convertedResult = value / dict[distanceFrom] * dict[distanceTo];
    return convertedResult.toFixed(2); 
}

console.log(convertUnits(num, convertFrom, convertTo));
