# Vue 3 + TypeScript + Vite + Quasar + Firebase

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

Iniciar proyecto.
npm install


Compilar y correr en entorno de desarrollo
npm run dev

El proyecto tiene el siguiente stack

->Vue3
->Vite
->Quasar
->Firebase
->Composition API
->Pinia Store

Se realizo el proyecto primero en diseño en Figma el cual dejare el link aqui:

https://www.figma.com/file/6HehzQ64lxRrf8YTm93UV0/Azulo-Test?node-id=0%3A1

Primero se realizaron los diseños, se trato de seguir el mismo al pie de la letra, pero hay components de Quasar que no se adaptaban al mismo asi que de igual manera se siguio el diseño solo que con algunos ligeros cambios.

Tambien les di Acceso a Jose Madriz, al Firebase donde guardo la configuracion del proyecto y renderiza logo, Nombre de la aplicacion, primary y secundary color.

<img width="1254" alt="image" src="https://user-images.githubusercontent.com/27907133/191170144-5d1b7b44-45ec-411e-9f87-1bb6394070c2.png">

Ahi mismo cree las colecciones de Configuracion, Notebooks y Notas.

Hice la integracion con Google Places API, al momento de crear la nota se puede agregar una Ubicacion.

Las notas se pueden eliminar de a una o de Varias (Tuve un pequeño problema con la promesa que no espera a que el For de deletes se haga respectivamente por ende hay un bug, que al eliminar varias, no se ejecuta el refresh luego de eliminarlas todas, pero al recargar la pagina las notas se eliminaron correctamente) No logre solucionarlo y estaba perdiendo mucho tiempo en ese issue.

Se pueden agregar una Imagen Preview y una series de imagenes a las notas

Se creo un ScalleFold basado en DDD, editando un poco la estructura tradicional de Vue3 con Vite

Se instalo VITE PWA, y Te sale la notificacion de Si Deseas instalar la app

Se crearon interfaces sobre todos los datos que se manejarian.

Se instalo unplugin-vue-components y se configuro, pero no logre hacer que los componentes importados, No hicieran falta importar, estoy seguro que si investigaba un poco mas y tenia un poco mas de tiempo lo lograba

No logre hacer los Unit test, investigue pero me daban error, tengo esa Deuda Tecnica pendiente ya que he trabajado con Test de Integracion con Puppeter y Nightwatch. 


Espero mi prueba sea de su agrado, cualquier duda estoy disponible para una meet y una pronta Respuesta.

Muchas gracias por la oportunidad aprendi bastante en estas semanas realizando la prueba


