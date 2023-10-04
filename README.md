### CHATBOT Whatsapp (Baileys Provider)

<p align="center">
  <img width="300" src="https://i.imgur.com/Oauef6t.png">
</p>


**Con esta librería, puedes construir flujos automatizados de conversación de manera agnóstica al proveedor de WhatsApp,** configurar respuestas automatizadas para preguntas frecuentes, recibir y responder mensajes de manera automatizada, y hacer un seguimiento de las interacciones con los clientes.  Además, puedes configurar fácilmente disparadores que te ayudaran a expandir las funcionalidades sin límites. **[Ver documentación](https://bot-whatsapp.netlify.app/)**

Para instalar las dependencias del proyecto

```
npm install

```
Para iniciar el servidor

```
npm start

```

# Funciones Clave

## addKeyword()

Esta función, que se importa desde @bot-whatsapp/bot, inicia un flujo de chat en base a la configuración proporcionada.

La función addKeyword es como un punto de partida para la conversación. Le das a addKeyword una palabra o frase clave, y cuando alguien envía ese término al chatbot, la función desencadena un flujo de diálogo que has predefinido.

En este ejemplo vemos cómo establecer un flujo que el bot seguirá al recibir un hola o alo. Las respuestas del bot se establecen con .addAnswer()

```
  const { addKeyword } = require('@bot-whatsapp/bot')

  const flowPrincipal = addKeyword(['hola', 'alo'])
    .addAnswer(['Hola, bienvenido a mi tienda', '¿Como puedo ayudarte?'])
    .addAnswer(['Tengo:', 'Zapatos', 'Bolsos', 'etc ...'])

```

Podemos limitar el flujo a una sola palabra, como en el caso de comprar.

```
  const { addKeyword } = require('@bot-whatsapp/bot')

  const flowPrincipal = addKeyword('comprar')
    .addAnswer(['¿Como puedo ayudarte?'])

```

## addAnswer()

Esta funcion se importa desde @bot-whatsapp/bot

Se encarga de responder al usuario, puedes responder un texto o archivo adjunto.

```
const { addKeyword } = require('@bot-whatsapp/bot')

const flowWelcome = addKeyword('hola').addAnswer('Hola y bievendido! como puedo ayudarte')

```

### Enviar más de un mensaje

```
  const { addKeyword } = require('@bot-whatsapp/bot')

  const flowWelcome = addKeyword('hola')
    .addAnswer('Hola!')
    .addAnswer('Bienvenido')
    .addAnswer('¿Como puedo ayudarte?')

```
### Capture

```
 const flowWelcome = addKeyword(['ok', 'siguiente']).addAnswer('¿Cual es tu email?', {
    capture: true, 
}, async (ctx) => {

    const numeroDeWhatsapp = ctx.from 
    const mensajeRecibido = ctx.body 

    console.log(numeroDeWhatsapp,mensajeRecibido)

})
```


---
