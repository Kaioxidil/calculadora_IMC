const form = document.getElementById('form');

if (form) {
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('heigth'); // Corrigido para 'heigth' -> 'height'
        const valueElement = document.getElementById('value');
        const descriptionElement = document.getElementById('description');
        const infosElement = document.getElementById('infos');

        if (!weightInput || !heightInput || !valueElement || !descriptionElement || !infosElement) {
            console.error('Um ou mais elementos HTML não foram encontrados.');
            return;
        }

        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        const bmi = (weight / (height * height)).toFixed(2);

        let description = '';

        infosElement.classList.remove('hidden');

        if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';
        } else if (bmi >= 18.5 && bmi <= 24.9){ // Ajustei o limite para 24.9 para ser mais preciso
            description = 'Você está no peso ideal!';
        } else if (bmi >= 25 && bmi <= 29.9){ // Ajustei o limite para 29.9
            description = 'Cuidado! Você está com sobrepeso!';
        } else if (bmi >= 30 && bmi <= 34.9){ // Ajustei o limite para 34.9
            description = 'Cuidado! Você está com obesidade moderada!';
        } else if (bmi >= 35 && bmi <= 39.9){ // Ajustei o limite para 39.9
            description = 'Cuidado! Você está com obesidade severa!';
        } else{
            description = 'Cuidado! Você está com obesidade mórbida!';
        }

        valueElement.textContent = bmi.replace('.', ',');
        descriptionElement.textContent = description;
    });
} else {
    console.error('O formulário com ID "form" não foi encontrado no documento.');
}
