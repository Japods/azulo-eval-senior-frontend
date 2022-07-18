# Azulo: Evaluación para el rol Desarrollador Senior Front End

## Instrucciones
1. Crear una carpeta 'role/front-end/senior/[gitusername]' reemplazando '[gitusername]' por el nombre de usuario del candidato en GitHub.
1. Favor realizar todos sus cambios dentro de esta carpeta. Por favor no realice cambios en archivos fuera de esta carpeta, ni tampoco agregue otras carpetas fuera de esta.
1. El resultado de su evaluación debe ser un ejemplo autosuficiente y autocontenido. Para compilar y construir los productos debe incluir un readme con las instrucciones suficientes para levantar el ambiente de ejemplo sin necesidad de corregir errores o instalar productos no mencionados en las instrucciones.
1. Herramientas de manejo de paquetes como npm, yarn, entre otras, deben ser instaladas y ejecutas de forma autosuficiente y autocontenida, sin necesidad de cambios.
1. Después de leer con detenimiento este archivo, se espera que antes de iniciar al trabajo el candidato envíe un estimado de las horas/hombre que le tomará realizarlas, y de acuerdo a su disponibilidad de horas diarias para realizar esta prueba, en cuantos días calendario se traduce ese estimado. Si el estimado no es recibido por el candidato el mismo día que se envía la prueba, se descartará su solicitud.
1. Al final hay una lista de tareas marcadas como "*Extra*." Aunque no es requerido realizar todas estas tareas, hacerlo se reflejará positivamente en su evaluación. El candidato debe también decidir cuales tareas extra va a realizar después de su evaluación inicial e incluirlas en el estimado descrito en el punto anterior. Junto con el estimado, el candidato debe mencionar cuales tareas extra se compromete a realizar.
1. Se espera que un candidato senior realice al menos dos tareas extra a elegir, aunque más tareas extra se reflejarán positivamente en su evaluación.

## El proyecto

### Libretas de viaje
  La aplicación funciona para crear libretas para viajeros
    - Con la prosibilidad de crear varias libretas de viaje y editar y/o borrar cada una de ellas.
    - Cada Libreta recibe varios tipos de entrada. 
      - Texto, 
      - Imágenes, 
      - Rich Text
      - Una o varias Varias Imágenes
      - Geolocalización ((consulta a [Google Places API](https://developers.google.com/maps/documentation/places/web-service)) para seleccionar lugares alrededor) del Location 
        - Se uede agregar geolocalización a cada entrada. 
        - Se puede agregar pin a lugares. 
        - (**Extra** guardar geocode del post para búsquedas en la página principal) 
      - Fotografías de la cámara del dispositivo. Si está disponible.

### Pantallas

#### Inicio | Layout
path: /

```
|-----------|------|------------|
| Logo      | Name |            |
|-----------|------|------------|
| Libretas                  | S | 1. búsqueda
|-----------|------|------------|
| Libreta 1                     |
| Libreta 2                     |
| Libreta 3                     |
| Libreta 4          agregar +  | 2. +
|-----------|------|------------|
```
1. (Extra) Botón abre la búsqueda
   (extra, abrir drop down de sugerencias, indexa por nombre o geocode)

2. Botón abajo flotante para agregar listas, Inician un modal o crea un item nuevo directamente en la lista. se agrega apenas se escribe un nombre.

Tablet > desktop : las tarjetas están de 2 a 3 columnas.
Tablet > desktop : las libretas y la búsqueda están en un sidebar

(**Extra**) : Checkbox de selección múltiple, con opción para borrar flotando a la par del boton de agregar.


#### Libreta | Layout
path: /[slug-de-la-libreta]

```
|--------|----------------------|
| < Logo | libreta 1            |
|--------|----------------------|
|                               |
|             ---------------   |
|            | nota        ^ |  | 1. Nota 1.2 ^ Geo Pin de la nota
|             ---------------   |
|             ---------------   |
|            | *nota*        |  |
|            |   - lista     |  |
|            |   - lista     |  |
|            |   - lista   ^ |  | 1.3
|             ---------------   |
|                               |
|                   ---------   |
|                  | imagen  |  | 2. imagen sola
|                  |         |  |
|                  |         |  |
|                  |       ^ |  | 2.2 ^ Geo pin
|                   ---------   |
|                  | caption |  |
|                   ---------   |
|                               |
|               - - ---------   |
|              | | | imagen  |  |
|              | | |         |  | 3. grupo de imagenes
|              | | |         |  |
|              | | |     map |  |
|              | | |       ^ |  |
|               - - ---------   |
|              | | | caption |  |
|               - - ---------   |
|                               |
|                               | 
|-------------------------------|
| A |                         + | 4. Controles | 4.1 A | 4.2 +
|-------------------------------|
|  --   --   --                 |
| |  | |  | |  |                | 5. < imagenes adjuntas
|  --   --   --                 |
|-------------------------------|
| texto de nota o caption       |
|    - lista 1                  |
|    - lista 1                  |
|    - lista 1                  |
|                            ---|
|                           | > | 6. nota | 6.1 > guardar post
|-------------------------------|
```

1. Nota
1.2 Geolocalizazión de la Nota
1.2 Nota Rich Text

2. Carta de imagen sola
2.2 ^ pin de Geolocalizazión de la imagen

3. Stack de Cartas de Grupo de Imagenes (abre carousel overlay)

4. Control de los entries
4.1 A agrega opciones de Rich Text (italic, bold, bullets, indent)
4.2 + ícono de adjuntar archivos o geolocalización de la imagen y/o nota

5. < imagenes adjuntas

6. < texto
6.1 > botón para guardar post

Tablet > desktop : la lista de libretas pasa al sidebar con la busqueda y el título.
(**Extra**) Salva ultimo post al salirse de la lista. 

## Tareas
### Web App
1. Crear un PWA(Progressive Web) que construya las pantallas de arriba Usando alguno de los dos Component Frameworks:
  - [Quasar CLI | Quasar Framework](https://quasar.dev/start/quasar-cli) (Usando Vite por la velocidad del build y de dev, y public está typescript ready)
  - ó [Vuetify 3 Beta](https://next.vuetifyjs.com/en/getting-started/installation/) (Usando Vite por la velocidad del build y de dev) y [Vue CLI](https://cli.vuejs.org/guide/installation.html)
    1. Agregando typescript support.
    2. Agregando [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) para evitar tener muchos imports en cada archivo. (opcional)
    4. El Proyecto debe tener [Pinia](https://quasar.dev/quasar-cli-vite/state-management-with-pinia#introduction).
    5. Incluir el Store en el [Local Storage](https://seb-l.github.io/pinia-plugin-persist/advanced/strategies.html)

2. Crear las pantallas descritas arriba tomando en cuenta:
    1. Todas las soluciones deben considerar primero los componentes en Quasar antes que instalar dependencias nuevas, salvo que sean justificables.
    1. Crear stores como sea necesario para mantener las distintas partes del estado del app.
    1. Crear Unit tests para cada componente creado.
    1. Crear componentes usando interfaces para los props y defaults amigables.
    1. Todas las consultas asincronas a servicios tienen que tener error handling.
    1. **Extra** Los componentes con consultas pueden usar <Suspense>
    1. **Extra** Todas las consultas tienen que hacerse desde un [proxy](https://quasar.dev/quasar-cli-vite/api-proxying#introduction).
    1. **Extra** Incluir history en el storage para poder deshacer cambios en el estado de la applicación.

### CMS
1. La aplicación trae el branding (logo y colores primarios y secunbdarios) desde un CMS, puede incluirse usando algo como (https://directus.io/) la cuenta demo permite iniciar un proyecto.
  - El CMS debe contener: 
    - Un SVG del logo del App.
    - Los Strings de la applicación
      - Un nombre de applicación
      - El nombre de las libretas
      - el texto las instrucciones del app
    - el color primario y secundario de la paleta de quasar
    - (Extra) la typografía en quasar
