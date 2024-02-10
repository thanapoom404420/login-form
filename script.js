let input = document.getElementById('input');
let error = document.querySelector('.small');
let showSucces = document.querySelector('.success');
let box = document.getElementById('box');
let dismiss = document.getElementById('dismiss');
let img = document.querySelector('.img');
let con = document.querySelector('.container');
const userText = document.getElementById('user-text');

function submit() {
    if(input.value === '' || !input.value.includes('@') || !input.value.includes('.com')){
        input.classList.add('info', 'error');
        error.lastElementChild.style.display = 'flex';
    }
    else {
        input.classList.remove('info', 'error');
        error.lastElementChild.style.display = 'none';
        box.style.display = 'none';
        showSucces.style.display = 'flex';
        img.style.display = 'none';
        userText.textContent = input.value
        con.classList.add('submit')
        dis();
    }
};

function dis(){
    dismiss.addEventListener('click',function(){
        location.reload();
    })
}
