
const { addKeyword } = require('@bot-whatsapp/bot')


const flowBienvenido = addKeyword(['1']).addAnswer('¿Cual es tu email?', {
    capture: true,
    media: 'https://i.imgur.com/0HpzsEm.png',
}, async (ctx) => {
    
    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})

.addAnswer('¿Cual es su número de cedula?', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})
.addAnswer('¿Cual es su nombre?', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})
.addAnswer('¿Cual es su apellido?', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})
.addAnswer('¿Cual es su edad?', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})

const flow2 = addKeyword(['2'])
.addAnswer('¿En que productos te encuentras interesado?')
.addAnswer([
    '1. Accesorios para celulares',
    '2. Celulares',
    '3. Otros equipos de tegnologia'
])

const flow3= addKeyword(['1'])
.addAnswer('Estos son los accesorios disponibles:', null, async (ctx, {flowDynamic}) => {
    await flowDynamic('Enviar un mensaje text')

    const listaDeArticulos = [
        {
            name:'Auricukares'
        },
        {
            name:'Cargadores'
        },
        {
            name:'Vidrios templados'
        }
    ]

    const mapeoDeLista = listaDeArticulos.map((item) => item.name).join(', ') //Auriculares, Cargadores, Vidrios templados

    await flowDynamic(mapeoDeLista)
    
})
(['2'])
.addAnswer('Estos son las marcas disponibles:', null, async (ctx, {flowDynamic}) => {
    await flowDynamic('Enviar un mensaje text')

    const listaDeArticulos = [
        {
            name:'Iphone'
        },
        {
            name:'Samsung'
        },
        {
            name:'Xiaomi'
        },
        {
            name:'Motorola'
        }
    ]

    const mapeoDeLista = listaDeArticulos.map((item) => item.name).join(', ') //Iphone, Samsung, Xiaomi, Motorola

    await flowDynamic(mapeoDeLista)
})

addAnswer(['3'])
.addAnswer('Estos son otros articulos disponibles:', null, async (ctx, {flowDynamic}) => {
    await flowDynamic('Enviar un mensaje text')

    const listaDeArticulos = [
        {
            name:'Parlantes'
        },
        {
            name:'Luces'
        },
        {
            name:'Soportes'
        }
    ]

    const mapeoDeLista = listaDeArticulos.map((item) => item.name).join(', ') //Parlantes, Luces, Soportes

    await flowDynamic(mapeoDeLista)
})

const flow3 = addKeyword(['3'])
.addAnswer('¿Cual es su numero de cedula?', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})

.addAnswer('Escriba la dirección a la cual quiere que llegue su compra', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})

.addAnswer('¿En que ciudad reside?', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)
 
})

.addAnswer('¿Cual es su codigo postal?', {capture:true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
.addAnswer('🙌 Hola, ¿Como puedo ayudarte?')
.addAnswer(
    [
        'Escoge una de las tres opciones',
        '👉 1. Registro',
        '👉 2. Comprar',
        '👉 3. Datos de entrega',
    ],
    null,
    null,
    [flowBienvenido,flow2,flow3]
)



module.exports = {
    flowPrincipal,
    flowBienvenido,
    flow2,
    flow3
}