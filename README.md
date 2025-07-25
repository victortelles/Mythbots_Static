# Mythbots Landing Page

## Contexto sobre Mythbots

Mythbots es una empresa dedicada a la educación tecnológica, la robótica y la innovación, enfocada en inspirar a jóvenes y adultos a través de experiencias de aprendizaje modernas y creativas. Su misión es acercar la tecnología y la robótica a la comunidad, ofreciendo cursos, talleres y servicios que impulsan el desarrollo de habilidades S.T.E.A.M. (Ciencia, Tecnología, Ingeniería, Arte y Matemáticas). Mythbots busca ser un referente en la formación de futuros creadores, inventores y solucionadores de problemas, promoviendo la curiosidad, el pensamiento crítico y la colaboración.

## Descripción del Repositorio

Este repositorio contiene el código fuente de la landing page oficial de Mythbots. La landing page está diseñada para ser moderna, responsiva y visualmente atractiva, reflejando la identidad profesional de la empresa. Incluye información sobre los servicios, cursos, contacto directo por WhatsApp, formularios de contacto y secciones que muestran la oferta educativa y tecnológica de Mythbots. El sitio está optimizado para despliegue estático.

## Tecnologías Utilizadas

- **Next.js 15.2.4**: Framework de React para aplicaciones web modernas, con soporte para exportación estática.
- **React 19**: Biblioteca principal para la construcción de interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático, mejorando la mantenibilidad y escalabilidad del código.
- **TailwindCSS**: Framework de utilidades CSS para estilos rápidos y responsivos.
- **PostCSS**: Herramienta para transformar CSS con plugins.
- **pnpm**: Gestor de paquetes rápido y eficiente.
- **GitHub Actions**: Automatización de CI/CD para despliegue continuo vía FTP.
- **SamKirkland/FTP-Deploy-Action**: Acción de GitHub para despliegue automático por FTP.

## Estructura de Carpetas

```
Mythbots_Static/
│
├── app/                  # Páginas principales y layout global
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout principal (head, providers, etc.)
│   └── page.tsx          # Página principal (landing)
│
├── components/           # Componentes reutilizables de UI
│   ├── contact-section.tsx
│   ├── courses-section.tsx
│   ├── footer.tsx
│   ├── funko-section.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── pcb-section.tsx
│   ├── robotics-section.tsx
│   ├── theme-provider.tsx
│   └── ui/               # Componentes UI atómicos (botones, inputs, etc.)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── ...
│
├── hooks/                # Custom hooks de React
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/                  # Utilidades y helpers
│   └── utils.ts
│
├── public/               # Archivos estáticos (imágenes, logos, etc.)
│   ├── placeholder-logo.png
│   ├── placeholder-user.jpg
│   └── ...
│
├── styles/               # Archivos de estilos adicionales
│   └── globals.css
│
├── .github/
│   └── workflows/
│       └── deploy-ftp.yml # Workflow de despliegue automático por FTP
│
├── package.json          # Dependencias y scripts del proyecto
├── pnpm-lock.yaml        # Lockfile de pnpm
├── next.config.mjs       # Configuración de Next.js
├── tailwind.config.ts    # Configuración de TailwindCSS
├── postcss.config.mjs    # Configuración de PostCSS
├── tsconfig.json         # Configuración de TypeScript
└── components.json       # Configuración de componentes (si aplica)
```

## Pasos para Descargar, Instalar e Iniciar el Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/victortelles/Mythbots_Static.git
cd Mythbots_Static
```

### 2. Instalar dependencias

Se recomienda usar pnpm para instalar las dependencias:

```bash
pnpm install
```

Si no tienes pnpm instalado, puedes instalarlo con node:

```bash
npm install
```

### 3. Configurar variables de entorno (opcional)

Si necesitas variables de entorno, crea un archivo `.env.local` en la raíz del proyecto y define las variables necesarias. Para la mayoría de los casos de despliegue estático, no es necesario.

### 4. Ejecutar en modo desarrollo

```bash
pnpm run dev
```

node
```bash
npm run dev
```

Esto levantará el servidor local en `http://localhost:3000`.

### 5. Generar la versión estática para producción

```bash
pnpm run build
```
```bash
npm run build
```

Esto generará la carpeta `out/` con los archivos estáticos listos para desplegar.

### 6. Probar la versión estática localmente

Puedes usar un servidor estático como `serve`:

```bash
pnpm install -g serve
serve -s out
```

### 7. Despliegue automático a Hostinger (opcional)

El repositorio incluye un workflow de GitHub Actions que, al hacer push a la rama `main`, construye y sube automáticamente el contenido de `out/` a tu servidor Hostinger vía FTP.

#### Configuración de Secrets en GitHub:
- `FTP_HOST`: Host o IP del servidor FTP (ejemplo: ftp.tudominio.com)
- `FTP_USERNAME`: Usuario FTP
- `FTP_PASSWORD`: Contraseña FTP

#### Estructura del workflow:
El archivo `.github/workflows/deploy-ftp.yml` contiene la configuración para:
- Instalar dependencias
- Construir el sitio
- Subir el contenido de `out/` a la raíz de `public_html` en Hostinger

### 8. Personalización y desarrollo

- Modifica los componentes en `components/` para adaptar la landing a tus necesidades.
- Cambia imágenes y recursos en `public/`.
- Ajusta estilos globales en `app/globals.css` o `styles/globals.css`.

---

## Créditos y Licencia

Este proyecto fue desarrollado para Mythbots por AHTyler. Puedes usarlo, modificarlo y adaptarlo según tus necesidades.
