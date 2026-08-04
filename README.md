# praxis-media

Nube de imágenes de **PRAXIS**, servida gratis por el CDN de **jsDelivr**.

Reemplaza el uso de Cloudinary para imágenes: permanente, sin límite real de ancho de banda y sin riesgo de que se borre o se cobre.

## Cómo se usa

1. Las imágenes se guardan en carpetas por cliente (ej: `tacuba/`, `foxcomm/`).
2. Cada imagen queda disponible en una URL de jsDelivr lista para pegar en Tiendanube:

```
https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/CARPETA/archivo.jpg
```

## Reglas

- Solo imágenes (jpg, png, webp, svg, gif). Los videos van a Supabase / YouTube.
- No borrar carpetas sin avisar: las URLs viejas dejarían de funcionar.
