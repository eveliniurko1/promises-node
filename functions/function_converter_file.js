const fs = require('fs')

const fileConverted = stringBase64 => {
    try {
        fs.writeFile('file.pdf', stringBase64, { encoding: 'base64' }, (err) => {
            console.log('File convertido')
        })
    } catch (err) {
        console.log(err)
    }
}
module.exports = fileConverted