# Star Wars Starship Viewer

## Descripción

Este proyecto es una aplicación web que permite a los usuarios explorar un listado de naves del universo de Star Wars. La aplicación utiliza React y TypeScript para ofrecer una experiencia de usuario fluida y tipada. Los estilos se gestionan mediante Tailwind CSS y Flowbite, proporcionando un diseño moderno.

## Características

- **Listado de Naves**: Muestra un listado inicial de 10 naves obtenidas de una API. Los usuarios pueden cargar más naves haciendo clic en un botón que carga 10 naves adicionales.
- **Rutas Protegidas**: Los usuarios deben iniciar sesión para acceder a las rutas protegidas donde se encuentran las naves. Esto se gestiona mediante un sistema de autenticación utilizando Supabase.

- **Detalles de Naves**: Al hacer clic en una nave, los usuarios son redirigidos a una página de detalles donde se muestra información completa sobre la nave, incluyendo:

  - Información de la nave
  - Pilotos asociados
  - Películas en las que aparece

- **Imágenes de Tarjetas**: Se realiza un nuevo llamado a otra API para obtener imágenes de las naves, pilotos y películas, utilizando los IDs correspondientes para mostrar imágenes en las tarjetas.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework de CSS para un diseño moderno.
- **Flowbite**: Componentes de UI construidos sobre Tailwind CSS.
- **Supabase**: Plataforma de backend que proporciona autenticación y gestión de datos.
- **API de Star Wars**: API utilizada para obtener información sobre naves, pilotos y películas.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/star-wars-starship-viewer.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd star-wars-starship-viewer
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno para Supabase en un archivo `.env`:

   ```
   VITE_SUPABASE_URL=tu_url_de_supabase
   VITE_SUPABASE_ANON_KEY=tu_clave_anónima
   ```

5. Inicia la aplicación:
   ```bash
   npm run dev
   ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
