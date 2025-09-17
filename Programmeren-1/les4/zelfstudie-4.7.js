const stepGoal = 100;
let stepCounter = 0;
let stepsLeft = 0;

input.onGesture(Gesture.Shake, function () {
    if (stepCounter === stepGoal) {
        console.log("You have already reached your goal");
        music.baDing.play();
        light.showAnimation(light.rainbowAnimation, 500);
    } else {
        stepCounter++;
        console.log(`You have taken ${stepCounter} steps.`);
    }
})

input.buttonA.onEvent(ButtonEvent.Click, function () {
    for (let i = 0; i < (Math.floor(stepCounter / 10)); i++) {
        light.setPixelColor(i, Colors.Red);
    }
    loops.pause(500);
    light.setAll(Colors.Black);
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    stepsLeft = stepGoal - stepCounter;

    for (let i = 0; i < (Math.ceil(stepsLeft) / 10); i++) {
        light.setPixelColor(10 - i, Colors.Green);
    }
    loops.pause(500);
    light.setAll(Colors.Black);
})