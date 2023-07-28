# Proyecto Fullstack CRUD de Comentarios

Este es un proyecto fullstack que implementa un CRUD de comentarios, utilizando React para el frontend y Express para el backend. A continuación, se describen los pasos para configurar y ejecutar el proyecto.

## Configuración del Cliente

1. Dirígete a la carpeta `Client` desde la línea de comandos.
2. Ejecuta el siguiente comando para instalar las dependencias necesarias:
```
npm install
```
3. Una vez que se completen las instalaciones, ejecuta el servidor de desarrollo con el siguiente comando:
```
npm run dev
```

## Configuración del Servidor

1. Ve a la carpeta `Server` desde la línea de comandos.
2. Ejecuta el mismo comando para instalar las dependencias requeridas:
```
npm install
```
3. Para iniciar el servidor backend en modo de desarrollo, utiliza el siguiente comando:
```
npm run start:dev
```

## Configuración de la Base de Datos

Para el funcionamiento de la base de datos, se requiere Postgresql. Tienes dos opciones para configurar las credenciales de conexión:

### Opción 1: Añadir credenciales directamente en el archivo 'db'

Puedes editar el archivo `db.js` que se encuentra en la carpeta `src` del servidor y proporcionar tus credenciales de Postgresql directamente en el archivo.

### Opción 2: Crear un archivo .env

Si prefieres utilizar un archivo `.env`, sigue estos pasos:

1. Crea un archivo llamado `.env` en la carpeta `src` del servidor.
2. Abre el archivo `.env` con un editor de texto y agrega las siguientes variables con tus credenciales de Postgresql:
```
DB_HOST=tu_host
DB_PORT=tu_puerto
DB_DATABASE=tu_nombre_de_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
```

4. Luego, en el archivo `config.js` que se encuentra en la carpeta `src`, ajusta el valor de las variables para que se utilicen las credenciales del archivo `.env`.

## ¡Listo para probar el proyecto!
