# Notas Rápidas

## Descripción
**Notas Rápidas** es una extensión de Chrome diseñada para tomar notas rápidas mientras navegas por la web. Permite escribir, guardar y acceder a tus notas directamente desde la barra de herramientas del navegador.

## Características
- Tomar y guardar notas en un bloc de notas sencillo.
- Las notas se almacenan utilizando la API de almacenamiento de Chrome (`chrome.storage.sync`).
- Interfaz simple con un cuadro de texto y un botón para guardar.

## Instalación
1. Clona o descarga este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/moder-io/image_downloader.git
   ```
2. Abre Chrome y navega a `chrome://extensions/`.
3. Activa el modo de "Desarrollador" en la esquina superior derecha.
4. Haz clic en "Cargar extensión descomprimida" y selecciona la carpeta del proyecto.

## Cómo usar
1. Haz clic en el icono de la extensión en la barra de herramientas.
2. Escribe tus notas en el cuadro de texto.
3. Haz clic en el botón "Guardar" para almacenar tus notas.

## Permisos
La extensión requiere los siguientes permisos:
- `storage`: Permite almacenar las notas en la memoria de sincronización de Chrome.