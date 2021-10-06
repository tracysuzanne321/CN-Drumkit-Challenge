// SOUNDS
let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

// ANIMATIONS
let main = document.getElementById("mainDrum");
let tomDrum = document.getElementById("tomDrum");
let snareDrum = document.getElementById("snareDrum");
let clapHands = document.getElementById ("clapHands")
let hihatCymbal = document.getElementById("hihatCymbal");
let kickDrum = document.getElementById ("kickDrum");
let rideDrum = document.getElementById ("rideDrum");
let openHatDrum =document.getElementById ("openHatDrum")
let tinkdrum = document.getElementById ("tinkdrum");


document.addEventListener('keypress', (keyValue) => {
    if (keyValue.keyCode == 97) {
        main.style.animation = "box1 0.1s linear"
        setTimeout(() => {
            main.style.removeProperty('animation')
        }, 100)
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (keyValue.keyCode == 115) {
        clapHands.style.animation = "box4 0.1s linear"
        setTimeout(() => {
            clapHands.style.removeProperty('animation')
        }, 100)
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if (keyValue.keyCode == 100) {
        hihatCymbal.style.animation = "box7 0.1s linear"
        setTimeout(() => {
            hihatCymbal.style.removeProperty('animation')
        }, 100)
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if (keyValue.keyCode == 102) {
        kickDrum.style.animation = "box2  0.1s linear"
        setTimeout(() => {
            kickDrum.style.removeProperty('animation')
        }, 100)
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (keyValue.keyCode == 103) {
        openHatDrum.style.animation = "box5 0.1s linear"
        setTimeout(() => {
            openHatDrum.style.removeProperty('animation')
        }, 100)
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if (keyValue.keyCode == 104) {
        rideDrum.style.animation = "box8 0.1s linear"
        setTimeout(() => {
            rideDrum.style.removeProperty('animation')
        }, 100)
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (keyValue.keyCode == 106) {
        snareDrum.style.animation = "box3 0.1s linear"
        setTimeout(() => {
            snareDrum.style.removeProperty('animation')
        }, 100)
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (keyValue.keyCode == 107) {
        tinkdrum.style.animation = "box6 0.1s linear"
        setTimeout(() => {
            tinkdrum.style.removeProperty('animation')
        }, 100)
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if (keyValue.keyCode == 108) {
        tomDrum.style.animation = "box9 0.25s linear"
        setTimeout(() => {
            tomDrum.style.removeProperty('animation')
        }, 250)
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
   
  })

let count = 0


main.addEventListener("click", () => {
    main.style.animation = "box1 0.25s linear"
        setTimeout(() => {
            mainDrum.style.removeProperty('animation')
        }, 250)
        boom.pause()
        boom.currentTime = 0
        boom.play();
})

kickDrum.addEventListener("click", () => {
    kickDrum.style.animation = "box2 0.25s linear"
        setTimeout(() => {
            kickDrum.style.removeProperty('animation')
        }, 250)
        kick.pause()
        kick.currentTime = 0
        kick.play();
})

snareDrum.addEventListener("click", () => {
    snareDrum.style.animation = "box3 0.25s linear"
        setTimeout(() => {
            snareDrum.style.removeProperty('animation')
        }, 250)
        snare.pause()
        snare.currentTime = 0
        snare.play();
})

clapHands.addEventListener("click", () => {
    clapHands.style.animation = "box4 0.25s linear"
        setTimeout(() => {
            clapHands.style.removeProperty('animation')
        }, 250)
        clap.pause()
        clap.currentTime = 0
        clap.play();
})

openHatDrum.addEventListener("click", () => {
    openHatDrum.style.animation = "box5 0.25s linear"
        setTimeout(() => {
            openHatDrum.style.removeProperty('animation')
        }, 250)
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
})

tinkdrum.addEventListener("click", () => {
    tinkdrum.style.animation = "box6 0.25s linear"
        setTimeout(() => {
            tinkdrum.style.removeProperty('animation')
        }, 250)
        tink.pause()
        tink.currentTime = 0
        tink.play();
})

hihatCymbal.addEventListener("click", () => {
    hihatCymbal.style.animation = "box7 0.25s linear"
        setTimeout(() => {
            hihatCymbal.style.removeProperty('animation')
        }, 250)
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
})

rideDrum.addEventListener("click", () => {
    rideDrum.style.animation = "box8 0.25s linear"
        setTimeout(() => {
            rideDrum.style.removeProperty('animation')
        }, 250)
        ride.pause()
        ride.currentTime = 0
        ride.play();
})


tomDrum.addEventListener("click", () => {
    tomDrum.style.animation = "box9 0.25s linear"
        setTimeout(() => {
            tomDrum.style.removeProperty('animation')
        }, 250)
        tom.pause()
        tom.currentTime = 0
        tom.play();
})
