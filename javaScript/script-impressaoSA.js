//Função para o botão

function guardarFormulario() {
    var formsClient = new Object();

    //Salvar
    formsClient.nome = document.getElementById('nome').value;
    formsClient.sobrenome = document.getElementById('sobrenome').value;
    formsClient.idade = document.getElementById('idade').value;
    formsClient.cpf = document.getElementById('cpf').value;
    formsClient.telefone = document.getElementById('telefone').value;

    //Converter para String JSON

    console.log(formsClient.valueOf());

    //imprimir
    document.getElementById("dados").innerHTML = '<p>Nome: ' + formsClient.nome + '<br><br>Sobrenome: ' + formsClient.sobrenome+ '<br><br>Idade: ' + formsClient.idade+ '<br><br>CPF: ' + formsClient.cpf+ '<br><br>Telefone: ' + formsClient.telefone + '</p>';


}