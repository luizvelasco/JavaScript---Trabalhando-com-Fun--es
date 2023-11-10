function multiplicador(numero) {
    let resp;
    for (let i = 1; i <= 10; i++) {
        resp = i * numero;
        console.log(`${i} x ${numero} = ${resp}`);
    }
}

multiplicador(4);