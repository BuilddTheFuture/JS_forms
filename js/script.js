'use strict';

// let text = document.querySelector('#text');
// let elem = document.querySelector('#elem');
// text.addEventListener('blur', () => {
//     elem.textContent = text.value // из текстареа запишисали его текст в абзац
// })

//
// let input = document.querySelector('#inp');
// let button1 = document.querySelector('#btn1');
// let button2 = document.querySelector('#btn2');
// button1.addEventListener('click', () => {
//     input.disabled = true;
// })
// button2.addEventListener('click', () => {
//     input.disabled = false;
// })

//
// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#btn1');
// let button2 = document.querySelector('#btn2');
// button1.addEventListener('click', () => {
//     elem.checked = true;
// })
// button2.addEventListener('click', () => {
//     elem.checked = false;
// })

//
// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');
// let button2 = document.querySelector('#btn2');
// button2.addEventListener('click', () => {
//     if (elem.checked === true) {
//         text.textContent = 'Привет'
//     } else {
//         text.textContent = 'Пока'
//     }
// })

//
// let radios = document.querySelectorAll('input[type="radio"]');
// let btn = document.querySelector('#button');
// let txt = document.querySelector('#text');
// btn.addEventListener('click', () => {
//     for (let radio of radios) {
//         if (radio.checked) { // или 'radio.checked === true'
//             txt.textContent = radio.value;
//         }
//     } 
// })

// let input = document.querySelector('#inp');
// input.addEventListener('change', () => {
//     console.log (input.value)
// })

// let input = document.querySelector('#inp');
// let texts = document.querySelectorAll('#text');
// let num = 0;
// input.addEventListener('change', () => {
//     for (let i = 0; i < texts.length; i++) {
//         if (i === num) {
//             text[i].textContent = input.value;
//         }
//     }    
//     num = num+1;
//     console.log(num)
// })

// input.addEventListener('change', () => {
//     for (let text of texts) {
//         if (text.textContent === '') {
//             text.textContent = input.value;
//             break
//         }
//     }    
// })

//
// let input = document.querySelector('#inp');
// input.addEventListener('change', () => {
//     if (input.value.length < 5) {
//         input.style.borderColor = 'red';
//     } else {
//         input.style.borderColor = 'green';
//     }
// })

//
// let input = document.querySelector('#inp');
// input.addEventListener('input', () => {
//     if (input.value.length == 5) {
//         console.log('5 символов')
//     }
// })

//
// let input = document.querySelector('#inp');
// let text = document.querySelector('#text');
// input.addEventListener('input', () => {
//     if (input.value.length <= 5) {
//         text.textContent = (5 - input.value.length) + ' символов можно ввести'
//         text.style.backgroundColor = 'blue'
//     } else {
//         text.textContent = 'На ' + (input.value.length - 5) + ' символов превышена длина текста';
//         text.style.backgroundColor = 'red'
//     }
// })

//
// let input1 = document.querySelector('#inp1');
// let input2 = document.querySelector('#inp2');
// input1.addEventListener('input', function() {
//     if (this.value.length == 2) {
//         input2.focus()
//     }
// })
// input2.addEventListener('input', function() {
//     if (this.value.length == 2) {
//         this.blur()
//     }
// })

//
// let select = document.querySelector('#select');
// let btn = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function(){
//     elem.textContent = select.value
// })

//
// let select = document.querySelector('#selectYear');
// select.addEventListener('input', function(){
//     if (+this.value % 4 === 0) {
//         console.log(this.value + ' - высокосный год');
//     } else {
//         console.log(this.value + ' - невысокосный год');
//     }
// })

// 
// let select = document.querySelector('#selectDay');
// select.addEventListener('change', function() {
//     if (select.value < 6) {
//         console.log('рабочий день');
//     } else {
//         console.log('выходной');
//     }
// })

//
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	select.value = 'one';
// });

//
// let input = document.querySelector('#input');
// let select = document.querySelector('#select');
// input.addEventListener('blur' , function() {
//         select.selectedIndex = input.value - 1;
// })

//
// let now = new Date(); 
// let select = document.querySelector('#select');
// let nowDay = now.getDay();
// select.addEventListener('click', () => {
//     select.selectedIndex = nowDay - 1;
// })

//
// let select = document.querySelector('#select');
// for (let option of select) {
//     option.textContent = option.textContent + '. Значение value - ' + option.value 
// }

//
// let select = document.querySelector('#select');
// let option = select[1];
// console.log(option.text); //вт
// console.log(option.value); //2
// console.log(option.selected); // false

// let select = document.querySelector('#select');
// let option = select[2];
// option.selected = true;

//
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
//     alert(select[select.selectedIndex].textContent)
// })

//
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     select[select.selectedIndex].textContent += '!'
// })

//
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textarea.addEventListener('change', function() {
// 	div.textContent = textarea.value;
// });

//
// let checkbox = document.querySelector('#checkbox');
// let button = document.querySelector('#button');
// let div = document.querySelector('#div');
// button.addEventListener('click', function() {
//         if (checkbox.checked) {
//             div.textContent = 'выбрано';
//         } else {
//             div.textContent = 'не выбрано';
//         }
// });













































































































































































































































