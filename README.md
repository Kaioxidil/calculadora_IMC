# Calculadora IMC

![image](https://github.com/user-attachments/assets/6df91465-aa74-4325-97d5-0e7e1cbcecde)
<br>
![image](https://github.com/user-attachments/assets/05bc3e36-0a1c-4831-afa9-74748586086f)

``   <link rel="stylesheet" href="src/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
``

``
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


   <script src="src/script.js"></script>

``
