var africa: string ="Africa";
var asia: string ="Asia";
var australia: string ="Australia";
var europe: string ="Europe";
var northamerica: string ="Northamerica";
var southamerica: string ="Southamerica";

var africa_2008: number = 1028;
var africa_2018: number = 1235.5;
var asia_2008: number = 12954.7;
var asia_2018: number = 16274.1;
var australia_2008: number = 1993;
var australia_2018: number = 2100.5;
var europe_2008: number = 4965.7;
var europe_2018: number = 4209.3;
var northamerica_2008: number = 6600.4;
var northamerica_2018: number = 6035.6;
var southamerica_2008: number = 1132.6;
var southamerica_2018: number = 1261.5;

var wholeworld_2018 = africa_2018 + asia_2018 + australia_2018 + northamerica_2018 + southamerica_2018 + europe_2018;

var europe_whole2018 = europe_2018 / wholeworld_2018 * 100;
var asia_whole2018 = asia_2018 / wholeworld_2018 * 100;
var australia_whole2018 = australia_2018 / wholeworld_2018 * 100;
var africa_whole2018 = africa_2018 / wholeworld_2018 * 100;
var northamerica_whole2018 = northamerica_2018 / wholeworld_2018 * 100;
var southamerica_whole2018 = southamerica_2018 / wholeworld_2018 * 100;

var europe08_18kg = europe_2018-europe_2008;
var asia08_18kg = asia_2018-asia_2008;
var australia08_18kg = australia_2018-australia_2008;
var africa08_18kg = africa_2018-africa_2008;
var northamerica08_18kg = northamerica_2018-northamerica_2008;
var southamerica08_18kg = southamerica_2018-southamerica_2008;

var europe08_18pro = europe08_18kg / europe_2008 *100;
var asia08_18pro = asia08_18kg / asia_2008 *100;
var australia08_18pro = australia08_18kg / australia_2008 *100;
var africa08_18pro = africa08_18kg / africa_2008 *100;
var northamerica08_18pro = northamerica08_18kg / northamerica_2008 *100;
var southamerica08_18pro = southamerica08_18kg / southamerica_2008 *100;

console.log("Die Emission von Europa ist:" + europe_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit" + roundTwo (europe_whole2018) +  "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + roundTwo(europe08_18pro) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + roundTwo(europe08_18kg) + "kg CO2");

console.log("Die Emission von asia ist:" + asia_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht asia damit" + roundTwo (asia_whole2018) +  "%");
console.log("Für asia hat sich 2018 im Vergleich zu 2008 die Emission um" + roundTwo(asia08_18pro) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + roundTwo(asia08_18kg) + "kg CO2");

console.log("Die Emission von australia ist:" + australia_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht australia damit" + roundTwo (australia_whole2018) +  "%");
console.log("Für australia hat sich 2018 im Vergleich zu 2008 die Emission um" + roundTwo(australia08_18pro) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + roundTwo(australia08_18kg) + "kg CO2");

console.log("Die Emission von africa ist:" + africa_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht africa damit" + roundTwo (africa_whole2018) +  "%");
console.log("Für africa hat sich 2018 im Vergleich zu 2008 die Emission um" +  roundTwo(africa08_18pro) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + roundTwo(africa08_18kg) + "kg CO2");

console.log("Die Emission von northamerica ist:" + northamerica_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht northamerica damit" + roundTwo (northamerica_whole2018) + "%");
console.log("Für northamerica hat sich 2018 im Vergleich zu 2008 die Emission um" + roundTwo(northamerica08_18pro) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + roundTwo(northamerica08_18kg) + "kg CO2");

console.log("Die Emission von southamerica ist:" + southamerica_2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht southamerica damit" + roundTwo (southamerica_whole2018) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + roundTwo(southamerica08_18pro) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das"+ roundTwo(southamerica08_18kg) + "kg CO2");

function roundTwo(x: number): number{
    return Math.round(x * 100) / 100;
}