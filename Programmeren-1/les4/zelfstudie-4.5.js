for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        music.baDing.play()
        console.log(`Current time ${i}s`)
    } else {
        console.log(`Current time ${i}s`)
        loops.pause(1000);
    }
}