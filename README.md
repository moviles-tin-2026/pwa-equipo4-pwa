PyyME-Sync

Sistema PWA de Gestión de Inventario y Ventas

PyyME-Sync es una Progressive Web Application (PWA) desarrollada por Team 4 orientada a la gestión de inventario y operaciones de ventas para pequeñas y medianas empresas (PyMEs).

La aplicación permite administrar productos, controlar existencias, registrar ventas y consultar información en tiempo real desde dispositivos móviles o de escritorio. Gracias a su arquitectura PWA, PyyME-Sync ofrece una experiencia rápida, adaptable y accesible incluso con conexiones de red limitadas.

CARACTERÍSTICAS PRINCIPALES

Gestión de inventario en tiempo real
Registro y control de ventas
Administración de productos y categorías
Actualización automática de stock
Interfaz adaptable para dispositivos móviles y escritorio
Funcionalidad offline mediante tecnologías PWA
Sincronización de datos al recuperar conexión
Panel de control con métricas básicas de ventas
Gestión de usuarios y autenticación
Búsqueda rápida de productos
Generación de reportes básicos

TECNOLOGÍAS UTILIZADAS

Frontend:

React.js
Vite
HTML5
CSS3
JavaScript ES6+

Backend:

Node.js
Express.js

Base de Datos:

MongoDB

Tecnologías PWA:

Service Workers
Web App Manifest

Herramientas:

Git
GitHub
npm
Postman

REQUISITOS PREVIOS

Antes de ejecutar el proyecto, se necesita tener instalado:

Node.js versión 18 o superior
npm o yarn
MongoDB local o acceso a MongoDB Atlas
Git

Comandos para verificar instalaciones:

node -v
npm -v
git --version

INSTALACIÓN

Clonar el repositorio

git clone https://github.com/Team4/PyyME-Sync.git

Entrar al directorio del proyecto

cd PyyME-Sync

Instalar dependencias

npm install

Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/pyyme-sync
JWT_SECRET=your_secret_key

Iniciar el servidor de desarrollo

npm run dev

USO

Una vez iniciado el proyecto, acceder desde el navegador en:

http://localhost:3000

Funciones principales:

Gestión de Inventario:

Agregar productos
Editar productos
Eliminar productos
Consultar existencias

Gestión de Ventas:

Registrar ventas
Actualizar stock automáticamente
Consultar historial de ventas

Uso como PWA:

Instalar la aplicación en dispositivos móviles
Acceso rápido desde pantalla principal
Funcionalidad parcial sin conexión

ESTRUCTURA DEL PROYECTO

PyyME-Sync/

public/ → Archivos públicos y manifest PWA
src/

assets/ → Imágenes e íconos
components/ → Componentes reutilizables
pages/ → Vistas principales
services/ → API y lógica de negocio
hooks/ → Hooks personalizados
context/ → Context API
styles/ → Archivos CSS
utils/ → Funciones auxiliares

server/ → Backend Express
database/ → Configuración y modelos de base de datos
.env → Variables de entorno
package.json
README.md

EQUIPO DE DESARROLLO

Proyecto desarrollado por Team 4.

LICENCIA

Este proyecto está bajo la licencia MIT.

Se permite el uso, modificación y distribución del software respetando los términos de la licencia.

GUÍA DE CONTRIBUCIÓN

Las contribuciones son bienvenidas.

Flujo recomendado:

Crear una rama

git checkout -b feature/nueva-funcionalidad

Realizar cambios y commits

git commit -m "Agregar nueva funcionalidad"

Subir cambios

git push origin feature/nueva-funcionalidad

Crear Pull Request

El Pull Request debe incluir:

Descripción de cambios
Objetivo de la funcionalidad
Evidencia o capturas si aplica

BUENAS PRÁCTICAS

Mantener código limpio y documentado
Seguir la estructura del proyecto
Utilizar nombres descriptivos
Validar funcionalidades antes de hacer merge
No subir archivos sensibles como .env

SOPORTE Y CONTACTO

Para reportar errores o solicitar ayuda:

Crear un Issue en el repositorio de GitHub
Contactar al equipo Team 4

Ejemplo de reporte:

Título: Error al registrar ventas

Descripción:
Al intentar registrar una venta, el sistema no actualiza el stock automáticamente.

Pasos para reproducir:

Iniciar sesión
Registrar una venta
Verificar inventario

Resultado esperado:
El stock debe disminuir automáticamente.

ESTADO DEL PROYECTO

PyyME-Sync se encuentra en desarrollo activo y continuará recibiendo mejoras y nuevas funcionalidades.

OBJETIVO DEL PROYECTO

Brindar a las pequeñas y medianas empresas una solución moderna, accesible y eficiente para administrar inventarios y ventas desde cualquier dispositivo.
