
# Vibe Coding - Plantopedia

## 1. Introducción

Plantopedia es una aplicación web desarrollada con Next.js 16 y TypeScript. El proyecto utiliza la metodología Vibe Coding, que consiste en describir necesidades mediante lenguaje natural, recibir propuestas de código generadas con inteligencia artificial y realizar iteraciones para mejorar la aplicación.

## 2. Herramientas utilizadas

- ChatGPT como asistente de programación.
- Visual Studio Code como editor.
- Next.js y React para el desarrollo web.
- TypeScript para el tipado.
- Git y GitHub para el control de versiones.
- Vercel como plataforma prevista para el despliegue.

## 3. Flujo de desarrollo y prompts propuestos

Los siguientes prompts son ejemplos representativos de las instrucciones que pueden utilizarse en cada etapa del desarrollo.

### Iteración 1: Creación del proyecto

**Prompt propuesto:**

"Actúa como desarrollador frontend especializado en Next.js. Ayúdame a crear desde cero una aplicación llamada Plantopedia, una enciclopedia digital de plantas. Utiliza Next.js con App Router, TypeScript y un diseño moderno, limpio y adaptable."

**Resultado esperado:**

Creación de la estructura inicial del proyecto y configuración de las tecnologías.

### Iteración 2: Diseño de la página principal

**Prompt propuesto:**

"Diseña una página de inicio para Plantopedia con una barra de navegación, una sección principal de bienvenida, una presentación del catálogo de plantas y un pie de página. Utiliza una identidad visual inspirada en la naturaleza, con tonos verdes y colores claros."

**Resultado esperado:**

Implementación de la interfaz principal y sus estilos.

### Iteración 3: Catálogo interactivo

**Prompt propuesto:**

"Crea un componente de catálogo de plantas utilizando React y TypeScript. Incluye tarjetas con nombre científico, nombre común, categoría, descripción e imagen. Agrega un buscador y un filtro por categoría utilizando useState y useEffect."

**Resultado esperado:**

Creación de un catálogo interactivo y reutilizable.

### Iteración 4: API interna

**Prompt propuesto:**

"Implementa un Route Handler en Next.js que proporcione información de plantas en formato JSON. Después conecta el componente del catálogo con ese endpoint utilizando fetch dentro de useEffect."

**Resultado esperado:**

Separación de los datos y su consumo mediante una API interna.

### Iteración 5: Rutas y navegación

**Prompt propuesto:**

"Organiza la aplicación utilizando App Router. Crea páginas para Inicio, Plantas, Categorías y Nosotros, además de una ruta dinámica para consultar información individual de cada planta."

**Resultado esperado:**

Implementación de navegación y páginas independientes.

### Iteración 6: Manejo de estados

**Prompt propuesto:**

"Agrega estados visuales de carga y error a la aplicación. Utiliza loading.tsx y error.tsx siguiendo las convenciones de Next.js."

**Resultado esperado:**

Mejora de la experiencia de usuario durante la carga y ante errores.

### Iteración 7: Corrección y optimización

**Prompt propuesto:**

"Revisa el código de la aplicación, identifica errores de TypeScript, problemas de navegación y posibles errores de hidratación. Propón correcciones manteniendo la estructura de Next.js."

**Resultado esperado:**

Corrección de errores y mejora de la estabilidad del proyecto.

## 4. Decisiones técnicas

- Se eligió Next.js por su sistema de enrutamiento y sus capacidades de renderizado.
- Se utilizó TypeScript para mejorar la seguridad y claridad del código.
- Se implementaron Server Components para las páginas y un Client Component para el catálogo interactivo.
- Se utilizó un Route Handler para proporcionar los datos de las plantas.
- Se emplearon useState y useEffect para administrar la búsqueda, los filtros y la carga de datos.
- Se utilizaron archivos loading.tsx y error.tsx para gestionar estados de la interfaz.

## 5. Desafíos y soluciones

### Navegación

Se reemplazaron las etiquetas HTML `<a>` utilizadas para navegar entre páginas internas por el componente Link de Next.js.

### Error de hidratación

Se presentó una diferencia entre el HTML generado por el servidor y el renderizado en el cliente. Se reinició el servidor de desarrollo y se eliminó la caché `.next` para resolver el problema.

### Permisos de Windows

Durante la limpieza de la caché apareció un error EPERM porque Windows mantenía archivos bloqueados. Se detuvieron los procesos Node y posteriormente se eliminó la carpeta temporal.

## 6. Conclusión

El desarrollo permitió aplicar los fundamentos de Next.js y React mediante un flujo iterativo asistido por inteligencia artificial. La aplicación integra navegación, componentes interactivos, consumo de API y manejo de estados, demostrando cómo el Vibe Coding puede apoyar el desarrollo de soluciones web.
