function temperature(){
    // to convert celcius to farenheit
    // (Cel * 9/5) + 32
    var c = document.getElementById("celcius").value;
    var f = (c*(9/5)) + 32;
    document.getElementById("fahrenheit").value = f;
} 

function weight(){
    // to convert kg to pounds
    // kg*2.2 = pounds
    var kg = document.getElementById("kilo").value;
    var lbs = kg * 2.2;
    document.getElementById("lbs").value = lbs;
}

function distance(){
    // to convert km to miles
    // miles = km * 0.62137
    var km = document.getElementById("km").value;
    var mile = km * 0.62137;
    document.getElementById("miles").value = mile;
}