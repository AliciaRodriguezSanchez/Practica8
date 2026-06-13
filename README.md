# Practica8

API REST desarrollada con Node.js, Express y MySQL para gestionar autores y
posts. El proyecto separa la logica por rutas, controladores, modelos,
schemas de validacion y middlewares.

## Tecnologias

- Node.js
- Express
- MySQL con `mysql2`
- Yup para validar datos de entrada
- Dotenv para variables de entorno
- Biome para lint/formato

## Estructura principal

- `index.js`: crea y arranca el servidor HTTP.
- `src/app.js`: configura Express, CORS, JSON, rutas y middlewares globales.
- `src/routes`: define las rutas de la API.
- `src/controllers`: contiene la logica de cada endpoint.
- `src/models`: realiza las consultas a MySQL.
- `src/schemas`: define las validaciones con Yup.
- `src/middlewares`: valida ids, relaciones y errores de base de datos.
- `src/utils/error-logger.js`: guarda errores de MySQL en ficheros de log.
- `BBDD/post_db.sql`: script SQL con la estructura y datos iniciales.
- `peticiones.rest`: ejemplos de peticiones para probar la API.

## Configuracion

Crea un fichero `.env` en la raiz del proyecto con estas variables:

```env
PORT=3001
NODE_ENV=development

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_PORT=3306
DB_NAME=post_db
```

## Instalacion y ejecucion

```bash
npm install
npm run dev
```

Para ejecutar sin `nodemon`:

```bash
npm start
```

## Endpoints principales

### Autores

- `GET /api/authors`: obtiene todos los autores.
- `GET /api/authors/:authorId`: obtiene un autor por id.
- `GET /api/authors/:authorId/posts`: obtiene los posts de un autor.
- `POST /api/authors`: crea un autor.
- `PUT /api/authors/:authorId`: actualiza un autor.
- `DELETE /api/authors/:authorId`: elimina un autor.

### Posts

- `GET /api/posts`: obtiene todos los posts.
- `GET /api/posts/:postId`: obtiene un post por id.
- `POST /api/posts`: crea un post.
- `PUT /api/posts/:postId`: actualiza un post.
- `DELETE /api/posts/:postId`: elimina un post.

## Gestion de errores

Las validaciones propias de la API se controlan con middlewares y schemas. Los
errores de base de datos se gestionan en un middleware especifico y se guardan
en `logs/mysql-errors.log`, evitando enviar detalles internos de MySQL en la
respuesta al cliente.
