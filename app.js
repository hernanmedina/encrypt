
function processText() {
    const inputText = document.getElementById('textarea').value;
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === 'encrypt') {
        result = encryptText(inputText);
    } else {
        result = decryptText(inputText);
    }

    document.getElementById('result').innerText = result;
    
    // Limpiar el campo de texto después de procesar
    document.getElementById('textarea').value = '';
}


    function encryptText(text) {
        return text.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function decryptText(text) {
        return text.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    function copyToClipboard() {
        const resultText = document.getElementById('result').innerText;
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert('Texto copiado al portapapeles.');
            })
            .catch(err => {
                console.error('Error al copiar texto: ', err);
            });
    }

