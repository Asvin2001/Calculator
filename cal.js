let screen=document.getElementById('inpu')



function display(num){
    screen.value += num
}

function equal(){
   
   ans=eval(screen.value)
   screen.value=ans
}



function cle(){
    screen.value =""
}


function bak(){
    screen.value=screen.value.slice(0,-1)
}


