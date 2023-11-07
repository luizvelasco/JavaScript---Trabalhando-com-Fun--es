let nome = 'Ariel';

function addNome() {
    nome = 'Carlos';
    console.log(nome);

    function novoNome(){
        nome = 'Daniel';
        console.log(nome);
    }

    novoNome();

} 

addNome();

console.log(nome);