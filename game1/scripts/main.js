alert('to start the game - click on image which on the center')
let askComplexity = function(){
    prompt('chose complexity where 1-baby; 2-common; 3-HELL')
}
askComplexity()

let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size)
}

let height = 670
let width = 870

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

let clicks = 0
let maxClicks = 0

if(askComplexity = 1){
    maxClicks = 100
} else if (askComplexity = 2){
    maxClicks = 20
} else if (askComplexity = 3){
    maxClicks = 10
} else {
    maxClicks = 1
    alert('You clown, because you must chose from 1 to 3, so you have 1 try to click on img, if you win, i will give 500 grivnas')
}

$('#map').click(function (event) {
    clicks++
    let distance = getDistance(event, target)
    let distanceHint = getDistanceHint(distance)
    $('#distance').text(distanceHint)
    if(clicks > maxClicks){
        alert('You lose :|')
        return clicks = 0
    }
    if (distance < 20) {
        alert("Treasure've found! Done clicks: " + (clicks - 1) + ". If you want start again update the page");
    }
})

$('#map').click(function () {
    let leftClicks = 'left ' + (maxClicks - clicks) + ' clicks'
    document.getElementById('left-Clicks').innerHTML = leftClicks
})

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = function (distance) {
    if (distance < 10) {
        return 'burned!'
    } else if (distance < 30) {
        return 'very hoooot'
    } else if (distance < 40) {
        return 'hot!'
    } else if (distance < 80) {
        return 'warmer'
    } else if (distance < 150) {
        return 'warm'
    } else if (distance < 360) {
        return 'coldly'
    } else if (distance < 420) {
        return 'very coooold!'
    } else if (distance < 800) {
        return 'icy'
    } else {
        return 'freeze!'
    }
}

console.log(target)