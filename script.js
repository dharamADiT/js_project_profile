var btn=document.querySelector('button')
var cng = document.querySelector('h3')
var    flag=0

btn.addEventListener("click",function(){
    if(flag==0){
    cng.innerHTML= "added done";
    cng.style.color='red';
    flag=1;
    btn.innerHTML="Remove me"
    }
    else{
        cng.innerHTML= "I am not add with you";
    cng.style.color='blue';
    flag=0;
    btn.innerHTML="hire me"

    }
    
})

