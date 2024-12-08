// task 2
let temperatureToday;
let validTempFlag = false;
do {
  temperatureToday = Number(prompt("what is the temp"));
  if (!isNaN(temperatureToday)) {
    validTempFlag = true;
  }
} while (!validTempFlag);

let getTemperature = (deg) => (deg >= 30 ? "Hot" : "Cold");
document.write(
  "<h3>The Temperature Today " + getTemperature(temperatureToday) + " </h3>"
);
console.log(getTemperature(temperatureToday));
