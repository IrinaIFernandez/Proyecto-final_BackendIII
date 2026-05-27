# Proyecto Final Backend

## Descripción

Proyecto final desarrollado en **Node.js** y **Express** para la gestión de adopciones de mascotas.

Se implementaron:

- Tests funcionales automatizados con **Supertest** y **Chai**
- Dockerización del proyecto
- Publicación de imagen en **Docker Hub**
- Escaneo básico de seguridad con **Docker Scout**

---

## Instalación

Clonar el repositorio:

git clone https://github.com/IrinaIFernandez/Proyecto-final_BackendIII.git


Instalar dependencias:

npm install


---

## Variables de entorno

Crear un archivo `.env` con las siguientes variables:

PORT=8080
DATABASE=<mongodb_connection_string>


---

## Ejecutar proyecto

Iniciar servidor:


npm start


---

## Ejecutar tests

Ejecutar tests funcionales:


npm test


Los tests verifican endpoints del router de adopciones utilizando peticiones HTTP reales con MongoDB Atlas.

---

## Docker

### Construir imagen Docker


docker build -t adopme-backend .


### Ejecutar contenedor


docker run -p 8080:8080 adopme-backend


---

## Imagen DockerHub

Repositorio público de la imagen:

https://hub.docker.com/r/irinaifernandez/adopme-backend

---

## Seguridad Docker

Se realizó un escaneo básico de seguridad utilizando **Docker Scout** sobre la imagen publicada en DockerHub para verificar vulnerabilidades y el estado de la imagen base utilizada.

---

## Repositorio

Repositorio del proyecto:

https://github.com/IrinaIFernandez/Proyecto-final_BackendIII
