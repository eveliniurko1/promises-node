const express = require('express')
const fs = require('fs');
const pdf = require('pdf-parse')

const result = () => {
    try {
        console.log("Iniciando função de leitura do documento")
        const dataFile = fs.readFileSync('file.pdf');

        return pdf(dataFile)//ja tem uma promise por padrao:
        //se conseguir ler o arquivo chama a resolve() que também é interna
        //se não resolver, chama a reject() interna
    }
    catch (err) {
        throw new Error(err)//eh como se chamasse o reject()? quando usar throw ou chamar direto a reject()
    }
}
module.exports = result