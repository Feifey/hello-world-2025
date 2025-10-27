let boxSize = 100;
let boxColor;
let dots = [];
let clickSound;
let backgroundColor;
let backgroundMusic;

let mic; // Declare a microphone input variable

function preload() {
    clickSound = loadSound('Clicking Sound.mp3');
    voiceSound = loadSound('Voice Sound.mp3');
    backgroundMusic = loadSound('Background Music.mp3');
}

function setup() {
    createCanvas(600, 600, WEBGL);
    backgroundColor = color(random(255), random(255), random(255));
    boxColor = color(random(255), random(255), random(255));
    backgroundMusic.setLoop(true);
    backgroundMusic.setVolume(0.5);
    backgroundMusic.play();

    // Initialize the microphone input
    mic = new p5.AudioIn();
    mic.start(); // Start capturing audio from the microphone
}

function draw() {
    background(backgroundColor);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(boxColor);
    box(boxSize);

    // Analyze the microphone input level
    let volume = mic.getLevel();

    // Trigger dots based on microphone input
    if (volume > 0.1) {
        const x = random(-width / 2, width / 2);
        const y = random(-height / 2, height / 2);
        const dotColor = color(random(255), random(255), random(255));
        const dotSize = random(5, 60);
        dots.push({ x, y, color: dotColor, size: dotSize });
        voiceSound.play(); // Play the click sound
    }

    for (const dot of dots) {
        fill(dot.color);
        ellipse(dot.x, dot.y, dot.size, dot.size);
    }
}

function mouseClicked() {
    backgroundColor = color(random(255), random(255), random(255));
    boxColor = color(random(255), random(255), random(255));
    const x = mouseX - width / 2;
    const y = mouseY - height / 2;
    const dotColor = color(random(255), random(255), random(255));
    const dotSize = random(5, 60);
    dots.push({ x, y, color: dotColor, size: dotSize });
    clickSound.play();
}
