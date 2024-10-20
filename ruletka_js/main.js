const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

let selected_color = -1
let money = 1000;

class Roulette{
    constructor() {}
    roll(){
        let roulette_image = document.getElementById("roulette");
        let random = Math.floor(Math.random() * 37);
        let rotations = Math.floor(Math.random() * 70) + 5;
        let random_angle = rotations * 360 + random * 9.729;

        roulette_image.style.transform = `rotate(${random_angle}deg)`;

        if(random == 0){
            if(selected_color == 0){
                alert("wygrales");
            }
        }else if(random%2==0){
            if(selected_color == 1){
                alert("wygrales");
            }
        }else{
            if(selected_color == 2){
                alert("wygrales");
            }
        }
    }
}

const r1 = new Roulette();

function roll(){
    if(selected_color == -1){
        return
    }
    r1.roll();
}

function select_color(color){
    let roll_button = document.getElementById("roll_button");
    if(color == 2){
        roll_button.style.backgroundColor = "rgb(32, 32, 32)"
        roll_button.style.color = "white"
    }
    if(color == 1){
        roll_button.style.backgroundColor = "red"
        roll_button.style.color = "rgb(36, 41, 46)"
    }
    if(color == 0){
        roll_button.style.backgroundColor = "green"
        roll_button.style.color = "rgb(36, 41, 46)"
    }
    selected_color = color
}