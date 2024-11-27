var change='O'
var counter=0


let cell_1=document.getElementById('cell1')
let cell_2=document.getElementById('cell2')
let cell_3=document.getElementById('cell3')
let cell_4=document.getElementById('cell4')
let cell_5=document.getElementById('cell5')
let cell_6=document.getElementById('cell6')
let cell_7=document.getElementById('cell7')
let cell_8=document.getElementById('cell8')
let cell_9=document.getElementById('cell9')
let p=document.getElementById('game-over')


function changeData(value){
    if (change=='O'){
        value.innerHTML='X'
        change='X'
    }
    else{
        value.innerHTML='O'
        change='O'
    }
}
function checkIf(){
    if(cell_1.innerHTML==cell_2.innerHTML && cell_1.innerHTML==cell_3.innerHTML && cell_1.innerHTML !=''){
        p.innerHTML=cell_1.innerHTML+' Wins'
        disableButtons()
    }
    if(cell_1.innerHTML==cell_4.innerHTML && cell_1.innerHTML==cell_7.innerHTML && cell_1.innerHTML !=''){
        p.innerHTML=cell_1.innerHTML+' Wins'
        disableButtons()
    }
    if(cell_1.innerHTML==cell_5.innerHTML && cell_1.innerHTML==cell_9.innerHTML && cell_1.innerHTML !=''){
        p.innerHTML=cell_1.innerHTML+' Wins'
        disableButtons()
    }
    if(cell_5.innerHTML==cell_2.innerHTML && cell_5.innerHTML==cell_8.innerHTML && cell_5.innerHTML !=''){
        p.innerHTML=cell_5.innerHTML+' Wins'
        disableButtons()
    }
    if(cell_6.innerHTML==cell_9.innerHTML && cell_6.innerHTML==cell_3.innerHTML && cell_6.innerHTML !=''){
        p.innerHTML=cell_6.innerHTML+' Wins'
        disableButtons()
    }
    if(cell_4.innerHTML==cell_5.innerHTML && cell_4.innerHTML==cell_6.innerHTML && cell_4.innerHTML !=''){
        p.innerHTML=cell_4.innerHTML+' Wins'
        disableButtons()
    }
    if(cell_3.innerHTML==cell_5.innerHTML && cell_3.innerHTML==cell_7.innerHTML && cell_3.innerHTML !=''){
        p.innerHTML=cell_3.innerHTML+' Wins'
        disableButtons()
    }
    if(cell_7.innerHTML==cell_8.innerHTML && cell_7.innerHTML==cell_9.innerHTML && cell_7.innerHTML !=''){
        p.innerHTML=cell_7.innerHTML+' Wins'
        disableButtons()
    }
}

function checkWinner(){
        if(counter<=9){
        checkIf()
        if(counter ==9 && p.innerHTML==''){
            p.innerHTML='It is a TIE'
        }
    }
}
function disableButtons(){
    let buttons = document.querySelectorAll('.cell');
    buttons.forEach(button => {
        button.style.pointerEvents = 'none';
    });
    document.getElementById('restart').disabled = false;
}


function cell1(){
    if(cell_1.innerHTML==''){
        changeData(cell_1)
        counter+=1
    }
    checkWinner()
}
function cell2(){
    if(cell_2.innerHTML==''){
        changeData(cell_2)
        counter+=1
    }
    checkWinner()
}
function cell3(){
    if(cell_3.innerHTML==''){
        changeData(cell_3)
        counter+=1
    }
    checkWinner()
}
function cell4(){
    if(cell_4.innerHTML==''){
        changeData(cell_4)
        counter+=1
    }
    checkWinner()
}
function cell5(){
    if(cell_5.innerHTML==''){
        changeData(cell_5)
        counter+=1
    }
    checkWinner()
}
function cell6(){
    if(cell_6.innerHTML==''){
        changeData(cell_6)
        counter+=1
    }
    checkWinner()
}
function cell7(){
    if(cell_7.innerHTML==''){
        changeData(cell_7)
        counter+=1
    }
    checkWinner()
}
function cell8(){
    if(cell_8.innerHTML==''){
        changeData(cell_8)
        counter+=1
    }
    checkWinner()
}
function cell9(){
    if(cell_9.innerHTML==''){
        changeData(cell_9)
        counter+=1
    }
    checkWinner()
}

function restart(){
    window.location='index.html'
}
