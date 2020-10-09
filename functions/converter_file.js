const fs = require('fs')

const fileConverted = stringBase64 => {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFile('file.pdf', stringBase64, { encoding: 'base64' }, (err) => {
                if (err) {
                    throw new Error(err)
                } else {
                    console.log('File convertido')
                    resolve()
                }
            })
        } catch (err) {
            reject(err)
        }
    })
}
module.exports = fileConverted