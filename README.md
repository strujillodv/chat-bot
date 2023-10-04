### CHATBOT Whatsapp Prueba

<p align="center">
  <img width="300" src="https://gnpsa.com/bpo/images/gnpbpo-logo-2.png">
</p>


**Librería bot-whatsapp, para construir flujos automatizados de conversación de manera agnóstica al proveedor de WhatsApp,** configurar respuestas automatizadas para preguntas frecuentes, recibir y responder mensajes de manera automatizada, y hacer un seguimiento de las interacciones con los clientes.  Además, puedes configurar fácilmente disparadores que te ayudaran a expandir las funcionalidades sin límites. **[Ver documentación](https://bot-whatsapp.netlify.app/)**

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

### ctx

Esta funcion se encuentra dentro de addAnswer o addAction

Se encarga de responder al usuario, puedes responder un texto o archivo adjunto.

```
 const { addKeyword } = require('@bot-whatsapp/bot')

  const flowWelcome = addKeyword('hola').addAnswer('¿Como es tu mail?',null, async (ctx) => {
      console.log(ctx)

      const numeroDeWhatsapp = ctx.from 
      const mensajeRecibido = ctx.body 

  })

```

Se recomienda validar con console.log(ctx) todas las propiedades incluidas.

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

### FallBack

La función fallBack() es una función que se utiliza para repetir el último mensaje del flujo en caso de que el usuario no proporcione una respuesta válida. Es decir, si el usuario ingresa un mensaje que no coincide con ninguna palabra clave o respuesta esperada, el Bot puede llamar a la función fallBack() para volver a enviar el último mensaje y esperar una respuesta válida.

La función fallBack() se puede llamar dentro del método addAnswer() del flujo. Para ello, simplemente se llama a la función fallBack() dentro de una condición que comprueba si la respuesta del usuario es válida o no. Por ejemplo:

```
const { addKeyword } = require('@bot-whatsapp/bot')

const flowString = addKeyword('hola')
  .addAnswer('Indica cual es tu email', null, (ctx, { fallBack }) => {
    if (!ctx.body.includes('@')) {
      return fallBack(else } )
    {
      // Lógica para procesar el correo electrónico del usuario
    }
  })

```
## flowDynamic

La función flowDynamic se utiliza para devolver mensajes dinámicos que pueden venir de una API o Base de datos.

```
const { addKeyword } = require('@bot-whatsapp/bot')

const flowString = addKeyword('ver categorias')
  .addAnswer('Estas son las categorías disponibles:', null, async (ctx, {flowDynamic}) => {
      await flowDynamic('Enviar un mensaje text')

      const listaDeArticulos = [
          {
              name:'Item 1'
          },
          {
              name:'Item 2'
          },
          {
              name:'Item 3'
          }
      ]

      const mapeoDeLista = listaDeArticulos.map((item) => item.name).join(', ') //Item 1, Item 2, Item 3

      await flowDynamic(mapeoDeLista)
      
  })

```

## State

Para mantener un estado del flujo y poder compartir esta informacion con todos lode demás flujos

```
const flujoPrincipal = addKeyword(['hola'])
  .addAnswer(
      '¿Cual es tu talla?',
      {
          capture: true,
      },
      async (ctx, { flowDynamic, state }) => {
          await state.update({ talla: ctx.body })
          flowDynamic('Edad capturada!')
      }
  )
  .addAnswer(
      '¿Cual es tu peso?',
      {
          capture: true,
      },
      async (ctx, { flowDynamic, state }) => {
          await state.update({ peso: ctx.body })
          const myState = state.getMyState()
          await flowDynamic(`Peso capturaro!`)
      }
  )
  .addAnswer('Tus datos son:', null, async (_, { flowDynamic, state }) => {
      const myState = state.getMyState()
      flowDynamic(`Talla: ${myState.talla} Peso: ${myState.peso}`)
  })
  .addAnswer('🤖🤖 Gracias por tu participacion')
```

## Actividad de la prueba

En la raiz del proyecto se encuentra un archivo llamado steps.js, que continene dos flujos, de ejemplo, tomarlos como base y:

1. Crear Tres flujos sobre el principal para interactuar con el usuario que escriba al chat-bot.

2. Uno de los flujos debe capturar los datos de: cedula, nombre, apellido, edad, correo, al finalizar mostrarlos por consola, puede ser emulando una compra un soporte o regitro a newsletter.

3. Los otros dos son a libre interpretación, ejem: información adicional, consulta, e.t.c.

4. (Opcional), el proyecto incluye la librería axios, envíar la información capturada con el metodo POST, al endpoint http://172.232.6.66:8090/api/collections/clientes_test/records, mostrar el id del cliente creado por consola, la estrutura del json es:

```
{
    "cedula": "test",
    "nombre": "test",
    "apellido": "test",
    "correo": "test",
    "edad": 123
}
```


---
