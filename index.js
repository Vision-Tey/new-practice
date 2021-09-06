//Declaring variables
const btn = document.querySelector('.btn');
const para1 = document.querySelector('.para1');
const btn1 = document.querySelector('.btn1');
const para2 = document.querySelector('.para2');
const btn2 = document.querySelector('.btn2');
const para3 = document.querySelector('.para3');
const kont = document.querySelector('.kontent');
const body = document.querySelector('.body')
//Using document by id
// let button = document.getElementById('btn');

// button.addEventListener('click',function(){
//     console.log('test');
// })
//Change back ground on click
btn.addEventListener('click',()=>{
    kont.style.backgroundColor = 'peru';
})

//Change font and color of first paragraph
btn1.addEventListener('click',()=>{
    para1.style.color = 'blue';
    // para1.style.font-size = '20px';
})

btn2.addEventListener('click',()=>{
    para1.style.fontsize = '20px';
    para1.style.color = 'white';
    para2.style.fontsize = '20px';
    para2.style.color = 'white';
    para3.style.fontsize = '20px';
    para3.style.color = 'white';
    body.style.backgroundColor = 'black';
    kont.style.backgroundColor = 'black';

})