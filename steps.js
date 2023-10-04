
const { addKeyword } = require('@bot-whatsapp/bot')


const flowBienvenido = addKeyword(['clave1', 'siguiente']).addAnswer('¿Cual es tu email?', {
    capture: true,
    media: 'https://i.imgur.com/0HpzsEm.png',
}, async (ctx) => {
    
    const mensajeRecibido = ctx.body 

    console.log(mensajeRecibido)

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
    [flowBienvenido, flow2, flow3]
)

module.exports = {
    flowPrincipal,
    flowBienvenido
}