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

function address(endereco) {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na "${endereco.rua}" com nº ${endereco.numero}.`
}

var a = address(endereco);
console.log(a);