const campoAInput = document.getElementById('campoA');
const campoBInput = document.getElementById('campoB');
const message = document.getElementById('message');

function validateForm() {
    const campoA = parseFloat(campoAInput.value);
    const campoB = parseFloat(campoBInput.value);

    if (campoB > campoA) {
        message.textContent = 'Formulário válido! Campo B é maior que Campo A.';
        message.className = 'message success';
        return true;
    } else {
        message.textContent = 'Formulário inválido! Campo B deve ser maior que Campo A.';
        message.className = 'message error';
        return false;
    }
}

document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    validateForm();
});
/*
campoAInput.addEventListener('input', validateForm);
campoBInput.addEventListener('input', validateForm);
*/