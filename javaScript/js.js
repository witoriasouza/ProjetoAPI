// metodo fetch() para buscar o arquivo dados.json transformando o resultado em um objeto usando metodo response.json()

fetch('dados.json')
.then(response => response.json())
.then (corpo => {

    //Acessando os dados do objetos JSON e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)
    document.getElementById('imagem').innerHTML =  corpo.rock.image;
    document.getElementById('nome').innerHTML = "Nome da artista: " + corpo.rock.name;
    document.getElementById('disco').innerHTML = "Album: " +corpo.rock.album;
    document.getElementById('estilo').innerHTML = corpo.rock.style;
    document.getElementById('preco').innerHTML = "Preço " +corpo.rock.price;

    document.getElementById('imagem1').innerHTML =   corpo.rap.image1;
    document.getElementById('nome1').innerHTML =  "Nome da artista: " +corpo.rap.name1;
    document.getElementById('disco1').innerHTML = "Album: " +corpo.rap.album1;
    document.getElementById('estilo1').innerHTML = corpo.rap.style1;
    document.getElementById('preco1').innerHTML = "Preço " + corpo.rap.price1;

    document.getElementById('imagem2').innerHTML = corpo.trap.image2;
    document.getElementById('nome2').innerHTML = "Nome da artista: " +corpo.trap.name2;
    document.getElementById('disco2').innerHTML = "Album: " +corpo.trap.album2;
    document.getElementById('estilo2').innerHTML = corpo.trap.style2;
    document.getElementById('preco2').innerHTML = "Preço " + corpo.trap.price2;

})