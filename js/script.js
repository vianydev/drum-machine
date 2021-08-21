let buttonQ = document.getElementById("sound-a1");
let buttonW = document.getElementById("sound-a2");
let buttonE = document.getElementById("sound-a3");
let buttonA = document.getElementById("sound-b1");
let buttonS = document.getElementById("sound-b2");
let buttonD= document.getElementById("sound-b3");
let buttonZ= document.getElementById("sound-c1");
let buttonX= document.getElementById("sound-c2");
let buttonC= document.getElementById("sound-c3");

// Play de sound with clic 
const playAudioQ = () => {
    let audioAttribute = document.getElementById("Q");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Clap";
}

const playAudioW = () => {
    let audioAttribute = document.getElementById("W");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Shaker";
}

const playAudioE = () => {
    let audioAttribute = document.getElementById("E");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Closed Hit-Hat";
}

const playAudioA = () => {
    let audioAttribute = document.getElementById("A");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Side Stick";
}

const playAudioS = () => {
    let audioAttribute = document.getElementById("S");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Snare";
}

const playAudioD = () => {
    let audioAttribute = document.getElementById("D");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Open Hit-Hat";
}

const playAudioZ = () => {
    let audioAttribute = document.getElementById("Z");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Kick n' Hat";
}

const playAudioX = () => {
    let audioAttribute = document.getElementById("X");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Kick";
}

const playAudioC = () => {
    let audioAttribute = document.getElementById("C");
    audioAttribute.play();
    let soundName = document.getElementById("sound-name");
    soundName.textContent = "Punchy kick";
}

// Play the sound with the key
const pressKey = (e) => {
    let soundName = document.getElementById("sound-name");
    switch(e.code) {
        case "KeyQ":
            let audioAttributeQ = document.getElementById("Q");
            audioAttributeQ.play();
            soundName.textContent = "Clap";
          break;
        case "KeyW":
            let audioAttributeW = document.getElementById("W");
            audioAttributeW.play();
            soundName.textContent = "Shaker";
          break;
        case "KeyE":
            let audioAttributeE = document.getElementById("E");
            audioAttributeE.play();
            soundName.textContent = "Closed Hit-Hat";
          break;
        case "KeyA":
            let audioAttributeA = document.getElementById("A");
            audioAttributeA.play();
            soundName.textContent = "Side Stick";
          break;
        case "KeyS":
            let audioAttributeS = document.getElementById("S");
            audioAttributeS.play();
            soundName.textContent = "Snare";
          break;
        case "KeyD":
            let audioAttributeD = document.getElementById("D");
            audioAttributeD.play();
            soundName.textContent = "Open Hit-Hat";
          break;
        case "KeyZ":
            let audioAttributeZ = document.getElementById("Z");
            audioAttributeZ.play();
            soundName.textContent = "Kick n' Hat";
          break;
        case "KeyX":
            let audioAttributeX = document.getElementById("X");
            audioAttributeX.play();
            soundName.textContent = "Kick";
          break;
        case "KeyC":
            let audioAttributeC = document.getElementById("C");
            audioAttributeC.play();
            soundName.textContent = "Punchy kick";
          break;
    }
}

buttonQ.addEventListener("click", playAudioQ);
buttonW.addEventListener("click", playAudioW);
buttonE.addEventListener("click", playAudioE);
buttonA.addEventListener("click", playAudioA);
buttonS.addEventListener("click", playAudioS);
buttonD.addEventListener("click", playAudioD); 
buttonZ.addEventListener("click", playAudioZ);
buttonX.addEventListener("click", playAudioX);
buttonC.addEventListener("click", playAudioC);

document.addEventListener("keydown", pressKey);
