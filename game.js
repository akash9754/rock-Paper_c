let com_selection
let user_selection
let img = document.querySelector('#computer');
let uImg = document.querySelector('#user');
let btn = document.querySelectorAll('button');
let resultShow = document.querySelector('.result');
let compchoice = document.querySelector('.comtext');
let userchoice = document.querySelector('.usertext');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',(e) => {
        user_selection = e.target.innerText;
        // console.log(`user : ${user_selection}`);
        gameplay();
    })     
}

// ======================================gameplay============================
function gameplay() {
    computerSelection()
    // console.log(compchoice);
     animation();
    setTimeout(() => {
        result();
        compchoice.innerText = com_selection
        userchoice.innerText = user_selection
        display(user_selection, uImg);
        display(com_selection, img);
    }, 2000);
   
}

// =============================== Comuter selecting option =====================
    function computerSelection()
    {
        let com_select = Math.floor(Math.random()*3+1)
        if (com_select === 1){
            com_selection = 'rock'
        }
        else if (com_select === 2){
            com_selection = 'paper'
        }
        else {
            com_selection = 'scissors'
        }
        // console.log(com_selection);
    }

//=============================== Display final image========================= 
 function display(select, tar) {
    if (select === 'rock') {
        tar.src =  'r.png'
    } 
    else if (select === 'paper') {
        tar.src =  'p.png'
    } 
    else {
        tar.src =  's.png'
    }
 }
// animation 
function animation()
    {
        let img1 = document.querySelector('#computer');
        let uImg1 = document.querySelector('#user');
       const animate = setInterval(()=>{
                setTimeout(s,200);
                setTimeout(p,400);
                setTimeout(r,600);
        },750);
        
        function s()
        {
            img1.src = 's.png'
            uImg1.src = 's.png'
        }
        function p()
        {
            img1.src = 'p.png'
            uImg1.src = 'p.png'
        }
        function r()
        {
            img1.src = 'r.png'
            uImg1.src = 'r.png'
        }
         setTimeout(()=>{
            clearInterval(animate);
         },1200)
    }

    // display choice

        // result
        function result() {
            if(user_selection === 'rock' && com_selection === 'paper')
            {
                 resultShow.innerText = 'you lost';
                 resultShow.style.color = 'red';
            }
            else if(user_selection === 'rock' && com_selection === 'rock')
            {
                 resultShow.innerText = 'draw';
                 resultShow.style.color = 'yellow';
            }
            else if(user_selection === 'rock' && com_selection === 'scissors')
            {
                 resultShow.innerText = 'you Won';
                 resultShow.style.color = 'green';
            }

            else if(user_selection === 'paper' && com_selection === 'paper')
            {
                 resultShow.innerText = 'draw';
                 resultShow.style.color = 'yellow';
            }
            else if(user_selection === 'paper' && com_selection === 'rock')
            {
                 resultShow.innerText = 'you Won';
                 resultShow.style.color = 'green';
            }
            else if(user_selection === 'paper' && com_selection === 'scissors')
            {
                 resultShow.innerText = 'you lost';
                 resultShow.style.color = 'red';
            }

            else if(user_selection === 'scissors' && com_selection === 'paper')
            {
                 resultShow.innerText = 'you Won';
                 resultShow.style.color = 'green';
            }
            else if(user_selection === 'scissors' && com_selection === 'rock')
            {
                 resultShow.innerText = 'you lost';
                 resultShow.style.color = 'red';
            }
            else if(user_selection === 'scissors' && com_selection === 'scissors')
            {
                 resultShow.innerText = 'draw';
                 resultShow.style.color = 'yellow';
            }
            else{
                 resultShow.innerText = 'error';
            }

        }
  