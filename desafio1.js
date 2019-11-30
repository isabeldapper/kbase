/* Crie uma função que dado o objeto a seguir:
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };
   Retorne o seguinte conteúdo:
   O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293 

=================================================================================================== */

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function address() {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`
}

var a = address(endereco);
console.log(a);



/* =========================================================================================================================== 

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);

==============================================================================================================================*/

function pares(x, y) {

    var resultadoPares = [];

    for (i = x; i <= y; i++) {
        if (i % 2 == 0) {
            resultadoPares.push(i);
        }
    }
    return resultadoPares
}
var p = pares(32, 40);
console.log(p);



/* =========================================================================================================================== 

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf

==============================================================================================================================*/

var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
    var skill = "Javascript";
    if (skills.indexOf("Javascript") !== -1) {
        console.log("Tem a skill");
        return true
    } else {
        console.log("Não tem a skill");
        return false
    }
};
temHabilidade(skills); // true ou false



/* =========================================================================================================================== 

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

==============================================================================================================================*/

var anosEstudo = 7;

function experiencia(anos) {

    var calcExp = anos;
    switch (calcExp) {
        case calcExp >= 0 && calcExp <= 1:
            console.log(`Você tem ${calcExp} anos de exp, seu nível é: Iniciante`);
            break;
        case calcExp >= 1 && calcExp <= 3:
            console.log(`Você tem ${calcExp} anos de exp, seu nível é: Intermediário`);
            break;
        case calcExp >= 3 && calcExp <= 6:
            console.log(`Você tem ${calcExp} anos de exp, seu nível é: Avançado`);
            break;
        default:
            console.log(`Você tem ${calcExp} anos de exp, seu nível é: Jedi Master `);
            break;
    };
};

experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

/* =========================================================================================================================== 

Dado o seguinte vetor de objetos:
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.

==============================================================================================================================*/
var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function exibeHabilidades(usuarios) {
    for (usuario of usuarios) {
        console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(", "));
    }
}
console.log(exibeHabilidades(usuarios));