
//const lista = ['Julia','Marcelle','Joao','Maria']; //Array

const btns = document.querySelectorAll('.theme ul button');
const body = document.querySelector('body');


if(localStorage.getItem('theme') == 'light'){
    body.classList.add('light');
}

//arrow function
//Percorrendo a lista de botões e tratando item a item
btns.forEach((btn) => {
    //console.log(btn);

    btn.addEventListener('click', function(){        
        //console.log(btn.value)

        if(btn.value == 'light'){
            body.classList.add('light');
            localStorage.setItem('theme','light');
        }else{
            body.classList.remove('light');
            localStorage.setItem('theme','dark');
        }

    })
   
})



//------------------------IMC-------------------------------

const btnCalcular = document.querySelector('#btn-calcular');
const btnRefazer = document.querySelector('#btn-refazer');
const contentForm = document.querySelector('#content-form');
const contentResult = document.querySelector('#content-result');

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const nome = document.querySelector('#nome');


btnCalcular.addEventListener('click', function(){
    
    //se os valores de altura e peso forem diferentes (!=) de vazio ''
    if(altura.value != '' && peso.value != '' && nome.value != ''){
        
        contentForm.style.display = 'none';
        contentResult.style.display = 'block';
        
        let imc = peso.value / (altura.value*altura.value);
        //Exibindo o resultado da conta no <h2 id="result-imc"></h2>
        let resultImc = document.querySelector('#result-imc');
        resultImc.innerHTML = imc.toFixed(2);

        let resultNome = document.querySelector('#result-nome');
        resultNome.innerHTML = nome.value;

        let resultClass = document.querySelector('#result-class');

   
                      
        if(imc < 18.5){
            resultImc.style.color = 'red'; //magreza
            resultClass.innerHTML = 'Magreza';
        }

        else if(imc <= 24.9){
            resultImc.style.color = '#05FF00'; //normal
            resultClass.innerHTML = 'Normal';
        }

        else if(imc <= 29.9){
            resultImc.style.color = '#FFE500'; //sobrepeso
            resultClass.innerHTML = 'Sobrepeso';
        }

        else if(imc <= 39.9){
            resultImc.style.color = '#FF0000'; //obesidade
            resultClass.innerHTML = 'Obesidade';
        }

        else{
            resultImc.style.color = '#830000'; //obesidade grave
            resultClass.innerHTML = 'Obesidade Grave';            
        }

    }else{
        alert('Preencha todos os campos!');
    }
    
})


btnRefazer.addEventListener('click', function(){
    contentForm.style.display = 'block';
    contentResult.style.display = 'none';
    
    nome.value = '';
    peso.value = '';
    altura.value = '';

})


//------------------------FOOTER-------------------------------
//Selecionando os elementos
const btnLgpd = document.querySelector('#btn-lgpd');
const footer = document.querySelector('.footer');

//se o usuário já fechou o rodape
if(localStorage.getItem('fechouLgpd') == 'sim'){
    footer.style.display = 'none';
}

//Eventos JS
btnLgpd.addEventListener('click',function(){
    //console.log('clicou');
    
    footer.style.display = 'none';

    //Session -> O valor é removido quando a aba é fechada
    //sessionStorage.setItem('fechouLgpd','sim');

    //Local -> O valor se mantém mesmo após fechar o navegador
    localStorage.setItem('fechouLgpd','sim');    
})