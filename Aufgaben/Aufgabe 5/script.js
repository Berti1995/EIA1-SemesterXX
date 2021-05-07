var africa_2008 = 1028;
var africa_2018 = 1235.5;
var africaName = "Africa";
var asia_2008 = 12954.7;
var asia_2018 = 16274.1;
var asiaName = "Asia";
var australia_2008 = 1993;
var australia_2018 = 2100.5;
var australiaName = "Australia";
var europe_2008 = 4965.7;
var europe_2018 = 4209.3;
var europeName = "Europe";
var northamerica_2008 = 6600.4;
var northamerica_2018 = 6035.6;
var northamericaName = "Northamerica";
var southamerica_2008 = 1132.6;
var southamerica_2018 = 1261.5;
var southamericaName = "Southamerica";
var wholeworld_2018 = africa_2018 + asia_2018 + australia_2018 + northamerica_2018 + southamerica_2018 + europe_2018;
document.querySelector("h2").id = "Text";
function roundTwo(x) {
    return Math.round(x * 100) / 100;
}
function myFunction(name, value_2008, value_2018) {
    document.querySelector("#titleRegion").innerHTML = name;
    document.querySelector(".H2eins").innerHTML = +value_2018 + "";
    document.querySelector(".H2zwei").innerHTML = +roundTwo(value_2018 / wholeworld_2018 * 100) + "%";
    document.querySelector(".H2drei").innerHTML = +roundTwo((value_2018 - value_2008) / value_2008 * 100) + "%";
    document.querySelector(".H2vier").innerHTML = +roundTwo(value_2018 - value_2008) + "";
    document.querySelector(".chart").setAttribute("style", "height:" + roundTwo(value_2018 / wholeworld_2018 * 100) + "%");
    document.querySelector("body").setAttribute("style", "color: white");
}
document.querySelector(".europe").addEventListener("click", myFunction.bind(null, "Europe", europe_2018, europe_2008, europeName));
document.querySelector(".africa").addEventListener("click", myFunction.bind(null, "Africa", africa_2018, africa_2008, africaName));
document.querySelector(".asia").addEventListener("click", myFunction.bind(null, "Asia", asia_2018, asia_2008, asiaName));
document.querySelector(".northamerica").addEventListener("click", myFunction.bind(null, "Northamerica", northamerica_2018, northamerica_2008, northamericaName));
document.querySelector(".southamerica").addEventListener("click", myFunction.bind(null, "Southamerica", southamerica_2018, southamerica_2008, southamericaName));
document.querySelector(".australia").addEventListener("click", myFunction.bind(null, "Australia", australia_2018, australia_2008, australiaName));
/*
function titelEurope() {

    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector(".H2eins").innerHTML = + europe_2018 + "";
    document.querySelector(".H2zwei").innerHTML = + roundTwo(europe_2018 / wholeworld_2018 *100) + "%";
    document.querySelector(".H2drei").innerHTML = + roundTwo((europe_2018 - europe_2008) / europe_2008 * 100) + "%";
    document.querySelector(".H2vier").innerHTML = + roundTwo(europe_2018 - europe_2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 13.53%");
    document.querySelector("body").setAttribute("style", "color: blue");
    

}
document.querySelector(".europe").addEventListener("click", titelEurope);


function titelAfrica() {

    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector(".H2eins").innerHTML = + africa_2018 + "";
    document.querySelector(".H2zwei").innerHTML = + roundTwo(africa_2018 / wholeworld_2018 *100) + "%";
    document.querySelector(".H2drei").innerHTML = + roundTwo((africa_2018 - africa_2008) / africa_2008 * 100) + "%";
    document.querySelector(".H2vier").innerHTML = + roundTwo(africa_2018 - africa_2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 3.97%");
    document.querySelector("body").setAttribute("style", "color: red");
}
document.querySelector(".africa").addEventListener("click", titelAfrica);

function titelAsia() {

    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector(".H2eins").innerHTML = + asia_2018 + "";
    document.querySelector(".H2zwei").innerHTML = + roundTwo(asia_2018 / wholeworld_2018 *100) + "%";
    document.querySelector(".H2drei").innerHTML = + roundTwo((asia_2018 - asia_2008) / asia_2008 * 100) + "%";
    document.querySelector(".H2vier").innerHTML = + roundTwo(asia_2018 - asia_2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 52.3%");
    document.querySelector("body").setAttribute("style", "color: yellow");
}
document.querySelector(".asia").addEventListener("click", titelAsia);

function titelAustralia() {

    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector(".H2eins").innerHTML = + australia_2018 + "";
    document.querySelector(".H2zwei").innerHTML = + roundTwo(australia_2018 / wholeworld_2018 *100) + "%";
    document.querySelector(".H2drei").innerHTML = + roundTwo((australia_2018 - australia_2008) / australia_2008 * 100) + "%";
    document.querySelector(".H2vier").innerHTML = + roundTwo(australia_2018 - australia_2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 6.75%");
    document.querySelector("body").setAttribute("style", "color: white");
}
document.querySelector(".australia").addEventListener("click", titelAustralia);

function titelNorthamerica() {

    document.querySelector("#titleRegion").innerHTML = "Northamerica";
    document.querySelector(".H2eins").innerHTML = + northamerica_2018 + "";
    document.querySelector(".H2zwei").innerHTML = + roundTwo(northamerica_2018 / wholeworld_2018 *100) + "%";
    document.querySelector(".H2drei").innerHTML = + roundTwo((northamerica_2018 - northamerica_2008) / northamerica_2008 * 100) + "%";
    document.querySelector(".H2vier").innerHTML = + roundTwo(northamerica_2018 - northamerica_2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 19.4%");
    document.querySelector("body").setAttribute("style", "color: black");
}
document.querySelector(".northamerica").addEventListener("click", titelNorthamerica);

function titelSouthamerica() {

    document.querySelector("#titleRegion").innerHTML = "Southamerica";
    document.querySelector(".H2eins").innerHTML = + southamerica_2018 + "";
    document.querySelector(".H2zwei").innerHTML = + roundTwo(southamerica_2018 / wholeworld_2018 *100) + "%";
    document.querySelector(".H2drei").innerHTML = + roundTwo((southamerica_2018 - southamerica_2008) / southamerica_2008 * 100) + "%";
    document.querySelector(".H2vier").innerHTML = + roundTwo(southamerica_2018 - southamerica_2008) + "";
    document.querySelector(".chart").setAttribute("style", "height: 4.05%");
    document.querySelector("body").setAttribute("style", "color: purple");
}
document.querySelector(".southamerica").addEventListener("click", titelSouthamerica)
*/ 
//# sourceMappingURL=script.js.map