# Calculadora IMC

![image](https://github.com/user-attachments/assets/6df91465-aa74-4325-97d5-0e7e1cbcecde)
<br>
![image](https://github.com/user-attachments/assets/05bc3e36-0a1c-4831-afa9-74748586086f)

### CDN
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

### HTML

   <main id="container">
        

        <section id="calculator">
            <form id="form">
                <h1 id="title">
                    Calculadora - IMC
                </h1>

                <div class="input-box">
                    <label for="weight">
                        Peso em Kg
                    </label>
                    <div class="input-field">
                        <i class="fa-solid fa-weight-hanging"></i>
                        <input type="number" id="weight" required>
                        <span>KG</span>
                    </div>
                </div>

                <div class="input-box"></div>
                    <label for="heigth">
                        Altura em metros
                    </label>
                    <div class="input-field">
                        <i class="fa-solid fa-ruler"></i>
                        <input type="number" step="0.01" id="heigth" required>
                        <span>M</span>
                    </div>
                </div>

                <button id="calculate">
                    Calcular
                </button>
            </form>

            <div id="infos" class="hidden">
                <div id="result">
                    <div id="bmi">
                        <span id="value">55</span>
                        <span>Seu IMC</span>
                    </div>
                    <div id="description">
                        <span>55</span>
                    </div>
                </div>

                <div id="more_info">
                    <a href="https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm">
                        Mais informações sobre IMC
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        </section>
   </main>


   ### CSS
   ##### Importar Fonte
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap');
    
   ````

*{
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #18181b;
}

#container{
    display: flex;
    align-items: center;
    gap: 3.5rem;
}


#calculator{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    color: #f8fafc;
    background-color: #262626;
    border-radius: 8px;
}

#form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#title{
    font-size: 2.25rem;
    position: relative;
}

#title::after{
    position: absolute;
    content: '';
    background-color: #1888ff;
    width: 8rem;
    height: 3px;
    bottom: 0;
    left: 0;
    border-radius: 3px;
}

.input-box label{
    font-size: 1.1rem;
    color: #cbd5e1;
    font-weight: 500;
}

.input-field{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3f3f46;
    padding: 0.3rem;
    border-radius: 3px;
    margin-top: 3px;
}

.input-field span,
.input-field i{
    color: #cbd5e1;
    font-size: 1.3rem;
    padding: 0.6rem 1rem;
}

.input-field input{
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 1.3rem;
    color: #f8fafc;
    padding: 0 0.5rem;
}

.input-field input::-webkit-outer-spin-button,
.input-field input::-webkit-inner-spin-button{
    appearance: none;
}

.input-field input:focus{
    outline: none;
}

#calculate{
    border: none;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #1888ff;
    color: #f8fafc;
    padding: 0.5rem 0;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.5s;
}

#calculate:hover{
    background-color: #1888ff98;
}    

#result{
    display: flex;
    gap: 2rem;
    align-items: center;
    border-top: 1px solid #ffffff34;
    padding: 0.75rem 0;
}

#bmi{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 2.25rem;
}

#bmi span:last-child{
    font-size: 0.875rem;
    color: #cbd5e1;
}

#description{
    width: 15.5rem;
}

#more_info{
    text-align: center;
    border-top: 1px solid #ffffff34;
    padding: 1.5rem;
}

#more_info a{
    color: #1888ff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    font: 0.875rem;
    text-decoration: none;
    transition: color 0.5s;
}

#more_info a:hover{
    color: #cbd5e1;
}

.hidden{
    display: none;
}

````

### JS
````

const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const heigth = document.getElementById('heigth').value;

    const bmi = (weight / (heigth * heigth)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';
    
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal!';
    } else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você está com sobrepeso!';
    } else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obesidade severa!';
    } else{
        description = 'Cuidado! Você está com obesidade morbida!';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;

});
````




