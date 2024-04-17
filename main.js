const star1 = document.querySelector('.ot1')
const star2 = document.querySelector('.ot2')
const star3 = document.querySelector('.ot3')
const star4 = document.querySelector('.ot4')
const star5 = document.querySelector('.ot5')
console.log(star1);

star5.addEventListener('click',function () {

    star1.classList.toggle('active')
    star2.classList.toggle('active')
    star3.classList.toggle('active')
    star4.classList.toggle('active')
    star5.classList.toggle('active')
    

})
star4.addEventListener('click',function () {
    star5.classList.remove('active')
    

    star1.classList.toggle('active')
    star2.classList.toggle('active')
    star3.classList.toggle('active')
    star4.classList.toggle('active')


    
})
star3.addEventListener('click',function () {
    star4.classList.remove('active')
    

    star1.classList.toggle('active')
    star2.classList.toggle('active')
    star3.classList.toggle('active')
   
    
})

star2.addEventListener('click',function () {
    star3.classList.remove('active')
    

    star1.classList.toggle('active')
    star2.classList.toggle('active')
    
   
    
})
star1.addEventListener('click',function () {
    star2.classList.remove('active')
    

    star1.classList.toggle('active')
    
    
   
    
})