function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateColor() {
  const color1 = ["Pink", "Blue", "Orange", "Red", "Black", "LightBlue"];

  var color = capFirst(color1[getRandomInt(0, color1.length + 1)]);

  return color;
}

document.getElementById("color-guess").innerHTML = generateColor();
