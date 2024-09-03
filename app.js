let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let input = document.querySelector('.input');


inc.addEventListener('click', function(){
    if(Number(input.value) + 1 < 15){
        input.value = Number(input.value) + 1;
       
    }
    else{
        inc.style.cursor = "not-allowed";
    }
    

});

dec.addEventListener('click' , function(){
    if(input.value > 1){
        input.value = Number(input.value) - 1;
    }
    else{
        dec.style.cursor = "pointer";
    }

});



let nav = document.querySelector('.nav');
let aside = document.querySelector('aside');
let cross = document.querySelector('.cross');

nav.addEventListener('click', function(){
  aside.classList.add('active')
})

cross.addEventListener('click', function(){
    aside.classList.remove('active')
})

aside.addEventListener('click', (c)=>{
   if(c.target.classList.contains('active')){
    aside.classList.remove('active');
   }
   
})