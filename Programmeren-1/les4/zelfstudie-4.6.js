light.setAll(0xff0000)

forever(function () {
    for (let i = 0; i < 100; i++) {
        light.setBrightness(i)
        pause(10);
    }
    for (let i = 100; i > 0; i--) {
        light.setBrightness(i)
        pause(10);
    }
})
 