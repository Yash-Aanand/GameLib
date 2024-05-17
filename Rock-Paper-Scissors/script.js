const cr = document.querySelector('.rock');
const cp = document.querySelector('.paper');
const cs = document.querySelector('.scissor');

const ym = document.querySelector('#ym');
const cm = document.querySelector('#cm');
const wm = document.querySelector('.final');

const pscore = document.querySelector('#playerscore')
const cscore = document.querySelector('#computerscore')

const submit = document.querySelector('.submit')
const reset = document.querySelector('.reset')
const vol = document.querySelector('.volume')
const voli = document.querySelector('#volume')
let vols = true

let psc = 0;
let csc = 0;

var win = new Audio('images/win.mp3')
var lose = new Audio('images/lose.wav')
var tied = new Audio('images/tie.wav')

cr.addEventListener('click', () => {
    pm ='Rock';
    clear()
    cr.classList.add('chosen')

})
cp.addEventListener('click', () => {
    pm ='Paper';
    clear()
    cp.classList.add('chosen')

})
cs.addEventListener('click', () => {
    pm ='Scissors';
    clear()
    cs.classList.add('chosen')

})

submit.addEventListener('click', () => {
    playGame(pm)
})

vol.addEventListener('click', () => {
    if (vols){
        voli.src = 'images/mute.svg';
        vols = false;
        console.log('muted')
    } else { 
        voli.src = 'images/unmute.svg';
        vols = true;
        console.log('unmuted')
    }
})

reset.addEventListener('click', () => {
    psc = 0;
    csc = 0;
    pm = ''
    cscore.innerHTML = `${csc}`
    pscore.innerHTML = `${psc}`
    ym.innerHTML = 'TBD'
    cm.innerHTML = 'TBD'
    wm.innerHTML = 'Pick your Choice!'
    clear()

})

const clear = function(){
    cr.classList.remove('chosen')
    cs.classList.remove('chosen')
    cp.classList.remove('chosen')
}

const playGame = function(yom) {
    const choices = ['Rock','Paper','Scissors'];
    ym.innerText = `${yom}`;
    let com = choices[Math.floor(Math.random()*3)];
    cm.innerHTML = `${com}`;

    if (yom == 'Rock'){
            if (com == 'Rock'){
                wm.innerHTML = 'Tie!'
                tie()

            } else if(com == 'Paper'){
                wm.innerHTML = 'Computer Wins!'
                cwin()

            } else if(com == 'Scissors'){
                wm.innerHTML = 'You Win!'
                console.log('Player')
                pwin()
            }
        } else if(yom == 'Paper'){
            if (com == 'Rock'){
                wm.innerHTML = 'You Win!'
                pwin()

            } else if(com == 'Paper'){
                wm.innerHTML = 'Tie!'
                tie()

            } else if(com == 'Scissors'){
                wm.innerHTML = 'Computer Wins!'
                cwin()
            }
        }else if(yom == 'Scissors'){
            if (com == 'Rock'){
                wm.innerHTML = 'Computer Wins!'
                cwin()

            } else if(com == 'Paper'){
                wm.innerHTML = 'You Win!'
                pwin()

            } else if(com == 'Scissors'){
                wm.innerHTML = 'Tie!'
                tie()
            }
        
    }   
}
        
const pwin = function (){
    psc++;
    pscore.innerText = `${psc}`
    if (vols){
        win.play()
    }
}

const cwin = function (){
    csc++;
    cscore.innerText = `${csc}`
    if (vols){
        lose.play()
    }
}

const tie = function () {
    if (vols){
        tied.play()
    }
}




