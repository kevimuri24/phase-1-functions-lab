// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    
    if (pickUpLocation - 42 > 0){
        return pickUpLocation - 42 
    } else if (pickUpLocation - 42 < 0) {
        return (pickUpLocation - 42) * - 1
    } else{
        return pickUpLocation - 42
    }
}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination){
    if (start - destination > 0){
        return (start - destination) * 264
    } else if (start - destination < 0){
        return ((start - destination) * 264) * -1
    } else {
        return (start - destination) * 264
    }
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500){
        return 25
    } else {
        return "cannot travel that far"
    }
}