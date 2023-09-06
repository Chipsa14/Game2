function start_game(){
    
    document.title= `Score ${score}`;
    object.classList.toggle('is-moving');

}
function finish_game(){

    alert(`You lose.Score${score}`);
    score = 0;
}


function hit(){   
    score++;
    document.title = `Score ${score}`;
    object.classList.remove('is-moving');
    void object.offsetWidth;//magic
    object.classList.add('is-moving');
    hit_sound.currentTime = 0;
    hit_sound.play();

    change_object_backraund();
    change_object_offset();
    change_object_big();
}

function change_object_backraund(){
    const colors = ['red','gold','blue','orange','purple'];
    const random_index = Math.floor(Math.random()*colors.length);
    object.style.background = colors[random_index];
}
function change_object_offset(){
    const random_offset = Math.random()*340;
    object.style.left = `${random_offset}px`;

}
function change_object_big(){
    const object_big = 25 + Math.random()*40;
    object.style.width = `${object_big}px`;
}

function miss(event){
    if (event.target.id =='area'){
    score--;
    document.title = `Score ${score}`;
    miss_sound.currentTime = 0;
    miss_sound.play();
    if (score<=0){
        finish_game();
    }
    }
}


let score = 0;

let object = document.querySelector('#object');

const hit_sound = new Audio('sounds/mixkit-arcade-mechanical-bling-210.wav');
const miss_sound = new Audio('sounds/mixkit-arcade-retro-jump-223.wav');