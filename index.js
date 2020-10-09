const express = require('express')

const app = express()

app.use(express.json())

const converterFile = require('./functions/converter_file')
const readFile = require('./functions/read_file')
const functionConverterFile = require('./functions/function_converter_file.js')
const functionReadFile = require('./functions/function_read_file')

app.post('/', (req, res) => {
    const stringBase64 = "JVBERi0xLjcNCiWhs8XXDQoxIDAgb2JqDQo8PC9QYWdlcyAyIDAgUiAvVHlwZS9DYXRhbG9nL1ZpZXdlclByZWZlcmVuY2VzPDwvRGlyZWN0aW9uL0wyUj4+Pj4NCmVuZG9iag0KMiAwIG9iag0KPDwvQ291bnQgMS9LaWRzWyA0IDAgUiBdL1R5cGUvUGFnZXM+Pg0KZW5kb2JqDQozIDAgb2JqDQo8PC9DcmVhdGlvbkRhdGUoRDoyMDIwMTAwOTE3MDAxNSkvQ3JlYXRvcihQREZpdW0pL1Byb2R1Y2VyKFBERml1bSk+Pg0KZW5kb2JqDQo0IDAgb2JqDQo8PC9BcnRCb3hbIDAgMCA0MTkuNTI4IDU5NS4yNzZdL0JsZWVkQm94WyAwIDAgNDE5LjUyOCA1OTUuMjc2XS9Db250ZW50cyA1IDAgUiAvQ3JvcEJveFsgMCAwIDQxOS41MjggNTk1LjI3Nl0vTWVkaWFCb3hbIDAgMCA0MTkuNTI4IDU5NS4yNzZdL1BhcmVudCAyIDAgUiAvUGllY2VJbmZvPDwvSW5EZXNpZ248PC9Eb2N1bWVudElEPEZFRkYwMDc4MDA2RDAwNzAwMDJFMDA2NDAwNjkwMDY0MDAzQTAwMzgwMDMzMDA2NTAwNjEwMDMyMDA2NDAwMzcwMDY1MDAyRDAwMzkwMDM1MDAzNTAwMzUwMDJEMDAzODAwNjYwMDM0MDAzMjAwMkQwMDM4MDA2NjAwNjMwMDMwMDAyRDAwMzMwMDMzMDAzMjAwMzEwMDYxMDAzNzAwMzAwMDM1MDAzNDAwNjQwMDYxMDAzOT4vTGFzdE1vZGlmaWVkPEZFRkYwMDQ0MDAzQTAwMzIwMDMwMDAzMTAwMzkwMDMxMDAzMjAwMzIwMDM0MDAzMTAwMzMwMDM0MDAzMTAwMzQwMDMwMDA1QT4vTnVtYmVyb2ZQYWdlcyAxL09yaWdpbmFsRG9jdW1lbnRJRDxGRUZGMDA3ODAwNkQwMDcwMDAyRTAwNjQwMDY5MDA2NDAwM0EwMDMyMDA0MTAwMzUwMDQ0MDAzNTAwMzUwMDMxMDAzMDAwMzAwMDQxMDAzMjAwMzAwMDM2MDAzODAwMzEwMDMxMDAzOTAwMzkwMDQ2MDAzNDAwMzkwMDM0MDAzNTAwMzMwMDQzMDAzMjAwMzcwMDQ0MDA0NjAwNDYwMDQxMDA0Nj4vUGFnZVVJRExpc3Q8PC8wIDYxODM2NT4+L1BhZ2VXaWR0aExpc3Q8PC8wIDQxOS41Mjg+Pj4+Pj4vUmVzb3VyY2VzPDw+Pi9Sb3RhdGUgMC9UcmltQm94WyAwIDAgNDE5LjUyOCA1OTUuMjc2XS9UeXBlL1BhZ2U+Pg0KZW5kb2JqDQo1IDAgb2JqDQo8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDk+PnN0cmVhbQ0KSIkCDAAAAAABDQplbmRzdHJlYW0NCmVuZG9iag0KeHJlZg0KMCA2DQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTcgMDAwMDAgbg0KMDAwMDAwMDEwMiAwMDAwMCBuDQowMDAwMDAwMTU4IDAwMDAwIG4NCjAwMDAwMDAyNDUgMDAwMDAgbg0KMDAwMDAwMTA0MyAwMDAwMCBuDQp0cmFpbGVyDQo8PA0KL1Jvb3QgMSAwIFINCi9JbmZvIDMgMCBSDQovU2l6ZSA2L0lEWzxEOUE0QzY3QjVFOTA3NEM1NkVBQUE0RDg4NkI5RDQyQj48RDlBNEM2N0I1RTkwNzRDNTZFQUFBNEQ4ODZCOUQ0MkI+XT4+DQpzdGFydHhyZWYNCjExMjINCiUlRU9GDQo="
    converterFile(stringBase64)
        .then(() => readFile())
        .then((data => {
            console.log("promisse")

            if (!data) {
                throw new Error('invalid file')
            } else {
                return res.json({ data })
            }
        }))
        .catch(err => {
            console.log(err)
            res.status(400).send(err)
        })

    // functionConverterFile(stringBase64)
    // functionReadFile((data) => {
    //     return res.json({ data })
    // })
})

app.listen(3333)