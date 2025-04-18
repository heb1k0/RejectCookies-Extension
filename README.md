# Ocultador de Modales de Cookies 🍪

Este pequeño script en JavaScript está diseñado para ocultar automáticamente modales de consentimiento de cookies que aparecen en muchas páginas web. Es especialmente útil en entornos de desarrollo, automatización o si estás creando extensiones de navegador.

## 🚀 ¿Qué hace?

El script:
- Busca en la página una lista de modales conocidos relacionados con cookies.
- Si encuentra alguno, lo oculta automáticamente.
- Elimina clases restrictivas de `<body>` y `<html>` que impiden el scroll.
- Incluye un caso específico para el dominio de **El País** (`elpais.com`).

## 🧩 Modales detectados

Actualmente, detecta y oculta los siguientes selectores:

```js
const MODALS_COOKIES = [
  '#pmConsentWall',
  '.popup-disagreed-cookies',
  '#didomi-host',
  '.didomi-popup',
  '#onetrust-consent-sdk',
  '#sp_message_container_1005436',
  '#_an_cmp'
];
```

## 📦 Cómo funciona

### 1. `hideCookieModal(selector)`
Oculta el modal y restaura el scroll de la página.

### 2. `checkofExist(selector)`
Comprueba si el selector existe:
- Si existe, lo oculta.
- Si no, espera 800ms y lo intenta ocultar por si aparece más tarde.

### 3. Inicialización
- Si la URL contiene `"elpais"`, se oculta específicamente `#pmConsentWall`.
- Luego recorre toda la lista de `MODALS_COOKIES` y aplica el mismo proceso.

## 🛠️ Ejemplo de uso

Puedes inyectarlo como script en una extensión de navegador o directamente en la consola del navegador para pruebas:

```html
<script>
  // Copia y pega aquí el script completo...
</script>
```

## ⚠️ Advertencia

Este script está pensado para uso personal o de desarrollo. **No lo uses en producción sin tener en cuenta la normativa de protección de datos (como el RGPD).**

## 📄 Licencia

MIT License