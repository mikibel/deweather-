var weather, sun, cloud, warm, nice, frosty, rain, data;
var xoff = 0;

function preload() {
  sunny = loadImage("sun.png");
  cloud = loadImage("cloud.png");
  warm = loadImage("hawt!.png");
  nice = loadImage("gettingwarm.png");
  frosty = loadImage("toocold.png");
  rainy = loadImage("rain.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  data = loadJSON('http://api.openweathermap.org/data/2.5/find?q=NewYork&units=imperial&APPID=052c4356a8fdc5cce4261dd463bc32c1', gotData, 'jsonp');
}
// var reptemp = 0;


function gotData(data) {
  var temperature = data.list[0].main.temp;

  var weather = data.list[0].weather.main;

  print(temperature);
  print (weather);

  if (temperature < 55) {
    for (i = 0; i < temperature; i++)
      image(frosty, random(0, width), random(0, height));
  }


  if (55 <= temperature && temperature < 78) {
    for (i = 0; i < temperature; i++)
      image(nice, random(0, windowWidth), random(0, windowHeight));
  }

  if (temperature >= 79) {
    for (i = 0; i < temperature; i++)
      image(warm, random(0, width), random(0, height));
  }

  textSize(100);
  text("Нью-Йорк", width / 2, height / 2);

  var x = map(noise(0, 100), noise(0, 100), width, height);

  xoff += 0.01

  if (data.list[0].main.weather == 'drizzle' || data.list[0].main.weather == 'light rain' || data.list[0].main.weather == 'showers' || data.list[0].main.weather == 'rain') {
    image(rainy, noise(xoff), noise(xoff));
  }

  if (data.list[0].main.weather == 'sun') {
    image(sunny, noise(xoff), noise(xoff));
  }
  //   // make a var for the movement of the images and increment those
}