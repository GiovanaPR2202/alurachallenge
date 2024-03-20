document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.querySelector('.textarea');
    const criptografarBtn = document.querySelector('.btn-cris');
    const descriptografarBtn = document.querySelector('.btn-des');
    const copyBtn = document.querySelector('.btn-copy');
    const copySuccess = document.querySelector('.copy-sucess');

    const criptografar = (texto) => {
        return texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
    };

    const descriptografar = (texto) => {
        return texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
    };

    const updateResult = (texto) => {
        const messageResult = document.querySelector('.message-result');
        const resultImg = document.querySelector('.result-img');
        const resultTitle = document.querySelector('.result-title');
        const resultParaph = document.querySelector('.result-paraph');

        if (texto.trim() !== '') {
            messageResult.style.display = 'block';
            resultImg.style.display = 'none';
            resultTitle.style.display = 'none';
            resultParaph.textContent = texto;
            resultParaph.style.fontSize = '1.2rem';
        } else {
            messageResult.style.display = 'block';
            resultImg.style.display = 'block';
            resultTitle.textContent = 'Nenhuma Mensagem encontrada';
            resultParaph.textContent = 'Digite um texto que você deseja criptografar ou descriptografar.';
        }
    };

    criptografarBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar o comportamento padrão do botão (submit do formulário)
        const texto = textarea.value.toLowerCase(); 
        const textoCriptografado = criptografar(texto);
        updateResult(textoCriptografado);
    });

    descriptografarBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar o comportamento padrão do botão (submit do formulário)
        const textoCriptografado = textarea.value.toLowerCase(); 
        const textoDescriptografado = descriptografar(textoCriptografado);
        updateResult(textoDescriptografado);
    });

    copyBtn.addEventListener('click', () => {
        const resultText = document.querySelector('.result-paraph').textContent;
        navigator.clipboard.writeText(resultText)
            .then(() => {
                copySuccess.textContent = 'Texto copiado';
                copySuccess.style.display = 'block';
                setTimeout(() => {
                    copySuccess.style.display = 'none';
                }, 2000); // Oculta a mensagem de sucesso após 2 segundos
            })
            .catch((err) => {
                console.error('Erro ao copiar texto: ', err);
            });
    });
});
