/* Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.
=======================================================================================================================*/

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title > Desafio 2 </title> 
    </head>
    <body>
        <button id="novo" > QUADRADO </button>
        <div id="quadrado" > </div>
        <script>
            var botao = document.getElementById('novo');
            var quadrados = document.getElementById('quadrado');
            botao.onclick = function () {
            var quadrado = document.createElement('div');
            quadrado.style.width = '100px';
            quadrado.style.height = '100px';
            quadrado.style.backgroundColor = 'red';
            quadrados.appendChild(quadrado);
            };
        </script>
    </body> 
    </html>
/</html>/



/* =======================================================================================================================
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
=======================================================================================================================*/

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Desafio 2</title>
</head>

<body>
    <button id="novo">QUADRADO</button>
    <div id="quadrados"></div>
    <script>
        var botao = document.getElementById('novo');
        var quadrados = document.getElementById('quadrados');
        function getRandomColor() {
            var codigo = "0123456789ABCDEF";
            var cor = "#";
            for (var i = 0; i < 6; i++) {
                cor += codigo[Math.floor(Math.random() * 16)];
            }
            return cor;
        }
            botao.onclick = function () {
            var quadrado = document.createElement('div');
            quadrado.style.width = '100px';
            quadrado.style.height = '100px';
            quadrado.style.backgroundColor = '#F00';
            quadrado.onmouseover = function () {
                quadrado.style.backgroundColor = getRandomColor();
            }
            quadrados.appendChild(quadrado);
        }
    </script>
</body>
</html>

/* =======================================================================================================================
A partir do seguinte vetor:
var nomes = ["Diego", "Gabriel", "Lucas"];
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas
=======================================================================================================================*/


/* =======================================================================================================================
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
=======================================================================================================================*/