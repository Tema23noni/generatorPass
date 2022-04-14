const start = document.querySelector('#send'),
    numb = document.querySelector('#numgen'),
    cisla = document.querySelector('#number'),
    upWord = document.querySelector('#upper'),
    lowWord = document.querySelector('#lowwer'),
    specialSymb = document.querySelector('#specsymb'),
    createPas = document.querySelector('#pasing'),
    pin4 = document.querySelector('#pin'),
    pask = document.querySelector('#pass'),
    pisk = document.querySelector('#pas');

let numbr = '123456789',
    upWo = 'QWERTYUIOPASDFGHJKLZXCVBNM',
    lowWo = 'qwertyuiopasdfghjklzxcvbnm',
    spec = '!@#$%&*-_';
function creater(){
    if(numb.value > 50 || numb.value < 4){
        createPas.textContent = 'Указано недопустимое количество';
        return 0

    }
    let abc = '';
    let word = []
    abc += cisla.checked ? numbr: '';
    abc += upWord.checked ? upWo : '';
    abc += lowWord.checked ? lowWo:'';
    abc += specialSymb.checked ? spec:'';
    for(let i = 0; i < numb.value; i++){
        word.push(abc[Math.floor(Math.random()*abc.length)])
    }
    if(abc == ''){
        createPas.textContent = 'Ничего не указано'
    }else{
        createPas.textContent = word.join('')
    }

}
start.addEventListener('click', creater)
function createrPin(){
    let word1 = []
    let cif = '1234567890'
    for(let i = 0; i < 4; i++){
        word1.push(cif[Math.floor(Math.random()*cif.length)])
    }
    createPas.textContent = word1.join('-')
}
pin4.addEventListener('click',createrPin)
function creater1(){
    let ex = '1234567890qwertyuiopasdfghjklzxcvbnm_-!QWERTYUIOPASDFGHJKLZXCVBNM';
    let word2 = []
    for(let i = 0; i < 8; i++){
        word2.push(ex[Math.floor(Math.random()*ex.length)])
    }
    createPas.textContent = word2.join('')
}
pisk.addEventListener('click', creater1)
pask.addEventListener('click', creater1)


