
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')


const flowBienvenido = addKeyword(['clave1', 'siguiente']).addAnswer('¿Cual es tu email?', {
    capture: true,
    media: 'https://i.imgur.com/0HpzsEm.png',
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

}).addAnswer('¿Cual es tu nombre?', {
    capture: true
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
.addAnswer('🙌 Hola prueba *Chatbot*')
.addAnswer(
    [
        'Menu del flow',
        '👉 *clave1* primera opción',
        '👉 *clave2* segunda opción',
        '👉 *clave3* tercera opción',
    ],
    null,
    null,
    [flowBienvenido]
)

module.exports = {
    flowPrincipal,
    flowBienvenido
}