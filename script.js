// Captura o evento de submit do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário (recarregamento da página)
    event.preventDefault();

    // Captura e limpa os valores dos campos nome, email e mensagem
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação 1: verifica se todos os campos foram preenchidos
    if (nome === '' || email === '' || mensagem === '') {
        alert('Erro: Por favor, preencha todos os campos do formulário antes de enviar.');
        return;
    }

    // Validação 2: verifica se o formato do e-mail é válido usando regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Erro: Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Mensagem de sucesso personalizada com o nome do usuário
    alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.');

    // Limpa todos os campos do formulário após o envio bem-sucedido
    document.getElementById('contactForm').reset();
});