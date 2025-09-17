let ledPosition = 0;
let goForward = true;

forever(function () {
    loops.pause(200);
    light.setPixelColor(ledPosition, Colors.Black);
    
    if (goForward) {
        ledPosition = ledPosition + 1;
    } else {
        ledPosition = ledPosition - 1;
    }
    if (ledPosition >= 9) {
        goForward = false;
    } else if (ledPosition <= 0) {
        goForward = true;
    }

    light.setPixelColor(ledPosition, Colors.Red);
})