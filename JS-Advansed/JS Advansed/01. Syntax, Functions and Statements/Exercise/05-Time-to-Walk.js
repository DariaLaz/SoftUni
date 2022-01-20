function timeToWalk(steps, footprint, speed){
    let distanceInM = steps * footprint;
    let timeInMins = ((distanceInM / 1000) / speed) * 60;

    var rests = Math.floor((distanceInM) / 500);

    timeInMins += rests;

    let mins = 0;
    let hours = 0;
    
    while(timeInMins > 60){
        hours++;
        timeInMins -= 60;
    }
    let timeInSecs = timeInMins * 60;
    while(timeInSecs > 60){
        mins++;
        timeInSecs -= 60;
    }
    let secs = timeInSecs.toFixed(0);

    console.log(`${hours.toString().padStart(2, 0)}:${mins.toString().padStart(2, 0)}:${secs.toString().padStart(2, 0)}`)
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);