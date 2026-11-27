
# 🌿 Plantopedia

Enciclopedia botánica desarrollada con Next.js 16, React y TypeScript como parte de la actividad de implementación mediante Vibe Coding.

## Descripción

Plantopedia es una aplicación web informativa que permite explorar diferentes especies vegetales, consultar sus características y filtrar plantas por categoría.

## Tecnologías utilizadas

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- CSS personalizado
- API interna mediante Route Handlers
- Git y GitHub

## Funcionalidades

- Página de inicio.
- Catálogo de plantas.
- Búsqueda por nombre común o científico.
- Filtro por categorías.
- Consulta de información de plantas.
- API interna para obtener los datos.
- Componentes de servidor y cliente.
- Estados de carga y error.
- Diseño adaptable a dispositivos móviles y escritorio.

## Estructura del proyecto

```text
src/
├── app/
│   ├── api/
│   │   └── plantas/
│   │       └── route.ts
│   ├── categorias/
│   │   └── page.tsx
│   ├── nosotros/
│   │   └── page.tsx
│   ├── plantas/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    └── CatalogoPlantas.tsx
```
## Visualizaciòn
```
https://api-vibecoding.vercel.app/
```
## Instalación

Requisitos:
- Node.js compatible con Next.js 16.
- npm.

Clonar el repositorio:

```bash
git clone https://github.com/3smer4ld4/API-VIBE-CODING.git
```

Entrar al proyecto:

```bash
cd plantopedia-vibe
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Abrir http://localhost:3000

## API interna

La aplicación dispone de un Route Handler:

`GET /api/plantas`

Este endpoint devuelve los datos de las plantas en formato JSON.

## Compilación para producción

```bash
npm run build
```

Ejecutar la versión compilada:

```bash
npm run start
```

## Variables de entorno

Actualmente no se requieren variables de entorno. Se incluye `.env.example` como referencia para futuras integraciones.

## Despliegue

La aplicación está preparada para desplegarse en Vercel mediante la conexión con GitHub.

## Autoría

Proyecto académico desarrollado mediante un flujo de trabajo asistido por inteligencia artificial (Vibe Coding).

Nomas como una nota general de las entregas de este dia, me hubiera gustado mas manejar Plantitis Informativa y esta esta basada en parte en ella y su antecesora Hojijitas, pero bueno, igualmente seria interesante implementar todo en uno con laravel, next,js las auth y demas agregados para una pagina web mas similar a INaturalist;
mi favorita fue la de gestor de actividades con typescript : 3
igualmente muchas gracias

Todos los derechos reservados a mi gato
