# Vue web component
Este proyecto es una plantilla de Vue.js para crear web components con Vite.

## Instalación
Para instalar las dependencias, ejecute el siguiente comando:

```bash
npm install
```

## Configuración
La parte más crucial de este proyecto es la configuración del archivo __vite.config.ts__. Aquí está la configuración utilizada para este proyecto:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('simple-sample')
      }
    }
  })],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'simple-sample',
      fileName: 'simple-sample',
    },
  },
  define: {
    'process.env': process.env
  }
})
```
Además, para que el proyecto funcione correctamente, es necesario crear un archivo de nombre __main.ce.ts__ con el siguiente contenido:

```ts
import { defineCustomElement } from 'vue'
import SimpleSampleComponent from './SimpleSample.ce.vue'

const SimpleSample = defineCustomElement(SimpleSampleComponent)

customElements.define('simple-sample', SimpleSample)
```

También es necesario crear un componente Vue con una extensión muy específica, que es __.ce.vue__. El componente Vue utiliza una sintaxis SFC con el script setup. Aquí está el contenido del archivo SimpleSample.ce.vue:

```vue
<template>
  <h1>Hola mundo</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
```

## Use
Para construir la librería, ejecute el siguiente comando:

```bash
npm run build
```

Esto generará un archivo de distribución en la carpeta dist.

Para probar la librería, puede incluir el archivo generado en una página web y utilizar el elemento simple-sample en su HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Sample Web Component</title>
    <script src="simple-sample.js"></script>
  </head>
  <body>
    <simple-sample></simple-sample>
  </body>
</html>
```
