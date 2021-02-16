# Proyect Boilerplate Tailwind v0.1 Portales Web II
**Autor: Orlando José Betancourth A**
## Requirimientos Funcionales
* Usar Twailand css con el cli para crear un css optimizado
* Usar todas las utilidades de tailwind css para **Design System**
* Generar componentes con Handlebars con layouts y parciales

## Instalación
  1. Descargar el repositorio o clonarlo
  2. Ejecutar ```npm install```
  3. ```npm start``` para desarrollo
  4. ```npm run build``` para compilar en producción.

## Estructura de Carpetas

| Carpetas | Contenido | Tecnología |
|:--|--|--|
| ```src```| Plantillas de html, cada plantilla se convierte en un documento html. | handlebars |
| ```src/components```| Componentes reutilizables como paciales | |
| ```src/components/layouts```| Páginas maestras o estructuras comunes de las plantillas ||
| ```src/data``` | Archivo JSON con información estructurada que es completada en las plantillas| |
| ```src/helpers```| Archivos javascript que agregan utilitarios al plantillero de handlebars | |
|```css_src```| Carpeta con el css para el framework de Tailwind y los css custom con apply | TailwindCss |
|```img_src```| Carpeta con las imágenes relacionadas en las plantillas | assets |
