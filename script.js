// Please implement exercise logic here

// Create a stop watch on screen 

// Stop watch should have
// 1)Elapsed time 
// 2) Start Button
// 3) Stop button
// 4) Reset button
// 5) Lap Button 
// 6) Lap data

// Create a HTML element to display the Buttons, and the data required.

// Steps to implement the clock:
// Use setTime out to create a clock to elapsed time 
// Start button starts the clock
// Stop uses clear interval
// Reset removes all data required
// Lap pushes data in current clock to lap counter

// Duration ID is the counter within the elapsed time window
duration = document.getElementById("duration")

startButton = document.getElementById("start")

// Function that sets a counter to 0 and changes the innerText of duration into minutes and seconds
let intervalID = ""
function countInSeconds (){
  let counter = 0;
  intervalID = setInterval(() => {
  counter+=1; (duration.innerText =`${Math.floor(counter/60)}:${counter%60}`);
}, 1000);

}

// Event listener for Start button to run the countInSeconds() function
document.getElementById("start").addEventListener("click",function(){countInSeconds(),disableStartButton()})
// At this point of the code we have a working timer.
// For the next step, implementing the Stop button
document.getElementById("stop").addEventListener("click",function(){clearInterval(intervalID)})
// Stop button implemented next step to implement the reset button
document.getElementById("reset").addEventListener("click",function(){clearInterval(intervalID),countInSeconds(),resetLapHTML()})
// Last step : laps
// Logic - create an array of objects with element.ID(Lapnumber)and element.Value(time)
// arrayOfLaps.push(duration.InnerText) adds values to the array
// let arrayOfLaps = []
// 
// Found easier way instead of arrays lapCounter.innerHTML+= `<br> ${duration.innerText}`
function lapUpdate() {
  lapCounter = document.getElementById("laps")
  lapCounter.innerHTML+= `<br> ${duration.innerText}`
}
document.getElementById("lap").addEventListener("click",function(){lapUpdate()})

// Refactor code - Reset to also reset all laps done before
function resetLapHTML(){
  lapCounter.innerHTML = "0.00"
}

// Refactoring needed. disable start button once clicked 
// Laps can be 0:00

