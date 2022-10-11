// Code your solution in this file!
function distanceFromHqInBlocks(number){
    return Math.abs(number - 42);
}

function distanceFromHqInFeet(number){
    return  distanceFromHqInFeet = Math.abs(number - 42) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return Math.abs(num1 - num2) * 264;
}

function calculatesFarePrice(num1, num2) {
    let distance = Math.abs(num1 - num2) * 264;

    if (distance <= 400){
        return 0 ;
    } else if (distance > 400  && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25 ;
    } else {
        return 'cannot travel that far';
    }
}
