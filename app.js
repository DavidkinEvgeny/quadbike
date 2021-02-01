const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const config = require('config')
const path = require('path')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 3001

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>С сайта</h3>
        <p>Гражданин(ка) <b>${req.body.name}</b> хочет что-бы Вы ему(ей) перезвонили</p>
        <p>По телефону: <a href="tel:${req.body.tel}">${req.body.tel}</a></p>

        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'oooabsolutooo@mail.ru',
                pass: 'Poiu987!'
            }
        })

        let mailOptions = {
            from: '<oooabsolutooo@mail.ru>',
            to: 'azinchenko77@gmail.com',
            subject: 'Сообщение с сайта Absolut',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Message sent %s', info.message)
            console.log('Message URL %s', nodemailer.getTestMessageUrl(info))
        })
    })
})



// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`)
// })
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
