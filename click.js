

// document.getElementById("left").addEventListener("click", function( event ) {
   
//     body.style.backgroundColor = 'mediumaquamarine'
// });

// document.getElementById("right").addEventListener("click", function( event ) {
//     body.style.backgroundColor = 'peachpuff'
// });


var body= document.querySelector('body')
document.addEventListener('click',function(event){
    if(event.clientX < window.innerWidth / 2 ){
        body.style.backgroundColor ='mediumaquamarine'
    }else{
        body.style.backgroundColor = 'peachpuff'
    }
})




