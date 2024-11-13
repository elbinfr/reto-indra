# API REST

Reto técnico desarrollado con Serverless, Express, Typescript y MySQL.

## Requisitos

Crear tu propia base de datos MySQL, luego ejecuta el script sql que se encuentra en la base del proyecto en tu base de datos: db.sql

Añade tu archivo .env con las variables de ejemplo que se encuentran en el archivo .env-example; solo debes modificar las variables
relacionadas a la base de datos

Es necesario tener instalados los siguientes elementos antes de ejecutar la aplicación:

- Node.js v18
- npm o yarn
- serverless

## Configuración

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/elbinfr/reto-indra.git
   cd reto-indra
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Renombra el archivo .env-example -> .env y coloca las credenciales correspondientes para conectar a tu base de datos

## Ejecución

 **Ejecutar Test:**
   ```bash
   npm run test
   ```

 **Ejecutar entorno de desarrollo:**
   ```bash
   npm run dev
   ```

 **Ejecutar entorno de desarrollo serverless:**
   ```bash
   npm run serverless:dev
   ```
   
 **Deploy con serverless:**
   ```bash
   npm run serverless:deploy
   ```


## Endpoints

Base url
- local: http://localhost:3000/dev

### `GET /dev/api/planets`

Este endpoint permite obtener la lista de planetas.

Ejemplo:

```bash
curl http://localhost:3000/dev/api/planets
```


### `GET /dev/api/cards`

Este endpoint permite obtener una lista de tarjetas.

Ejemplo:
```bash
curl http://localhost:3000/dev/api/cards
```


### `POST /dev/api/cards`

Este endpoint se usa para registrar una nueva tarjeta.

Ejemplo:
```bash
curl http://localhost:3000/dev/api/cards
