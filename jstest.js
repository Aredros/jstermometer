let imgaparecio = true;
console.log(imgaparecio);
console.log(-25);
var ik = document.createElement("IMG");
var ic = document.createElement("IMG");
var ifh = document.createElement("IMG");

function getValue() {
  var kelv = document.getElementById("kelvin");
  var cel = document.getElementById("celsius");
  var fah = document.getElementById("fahrenheit");

  if (imgaparecio) {
    ik.style.width = "40%";
    ik.style["max-height"] = "380px";
    ik.style["min-height"] = "380px";
    ik.style["object-position"] = "center";
    kelv.appendChild(ik);

    ic.style.width = "40%";
    ic.style["max-height"] = "380px";
    ic.style["min-height"] = "380px";
    ic.style["object-position"] = "center";
    cel.appendChild(ic);

    ifh.style.width = "40%";
    ifh.style["max-height"] = "380px";
    ifh.style["min-height"] = "380px";
    ifh.style["object-position"] = "center";
    fah.appendChild(ifh);

    console.log("first time activated");
    imgaparecio = false;
  } else {
    console.log("this is activated already");
  }

  var cambio = document.getElementById("wrote").value;
  var kelvin = Math.floor(cambio);
  var celsius = kelvin - 273;
  var fahrenheit = Math.floor(celsius * (9 / 5) + 32);

  if (kelvin <= 0 && kelvin < 200) {
    ik.setAttribute("src", "./img/zero.png");
  } else if (kelvin >= 200 && kelvin < 400) {
    ik.setAttribute("src", "./img/twofive.png");
  } else if (kelvin >= 400 && kelvin < 600) {
    ik.setAttribute("src", "./img/fifty.png");
  } else if (kelvin >= 600 && kelvin < 800) {
    ik.setAttribute("src", "./img/sevenfive.png");
  } else {
    ik.setAttribute("src", "./img/fullter.png");
  }

  if (celsius <= -50 && celsius < -25) {
    ic.setAttribute("src", "./img/zero.png");
  } else if (celsius >= -25 && celsius < 0) {
    ic.setAttribute("src", "./img/twofive.png");
  } else if (celsius >= 0 && celsius < 25) {
    ic.setAttribute("src", "./img/fifty.png");
  } else if (celsius >= 25 && celsius < 50) {
    ic.setAttribute("src", "./img/sevenfive.png");
  } else {
    ic.setAttribute("src", "./img/fullter.png");
  }

  if (fahrenheit <= -20 && fahrenheit < 30) {
    ifh.setAttribute("src", "./img/zero.png");
  } else if (fahrenheit >= 30 && fahrenheit < 80) {
    ifh.setAttribute("src", "./img/twofive.png");
  } else if (fahrenheit >= 80 && fahrenheit < 130) {
    ifh.setAttribute("src", "./img/fifty.png");
  } else if (fahrenheit >= 130 && fahrenheit < 180) {
    ifh.setAttribute("src", "./img/sevenfive.png");
  } else {
    ifh.setAttribute("src", "./img/fullter.png");
  }

  console.log(kelvin);
  console.log(celsius);
  console.log(fahrenheit);
}
