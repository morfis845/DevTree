<div align="center">

# 🌳 DevTree

### _Tu Linktree, pero para Desarrolladores_

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

<p align="center">
  <img src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif" width="500" alt="Coding gif"/>
</p>

**Una plataforma moderna y elegante para que los desarrolladores compartan todos sus enlaces importantes en un solo lugar.**

[Demo](#) • [Documentación](#instalación) • [Reportar Bug](#) • [Solicitar Feature](#)

</div>

---

## ✨ Características

- 🎨 **Diseño Minimalista** - Interfaz limpia y profesional
- 🚀 **Super Rápido** - Construido con Express.js para máximo rendimiento
- 📱 **Responsive** - Perfecto en cualquier dispositivo
- 🔗 **Enlaces Ilimitados** - Agrega todos tus proyectos, redes sociales y portfolio
- 💼 **Orientado a Devs** - Diseñado específicamente para desarrolladores
- ⚡ **Hot Reload** - Desarrollo rápido con watch mode
- 🌐 **Fácil Deploy** - Listo para producción

---

## 🎯 ¿Por qué DevTree?

Como desarrolladores, necesitamos un lugar centralizado para mostrar nuestro trabajo:

- 💻 Repositorios de GitHub
- 📝 Blog técnico
- 🎥 Canal de YouTube
- 🐦 Redes sociales
- 📧 Información de contacto
- 🏆 Portafolio y proyectos

**DevTree** te permite crear tu página personalizada en minutos, sin complicaciones.

---

## 🛠️ Stack Tecnológico

<div align="center">

| Tecnología                                                                                               | Versión | Propósito             |
| -------------------------------------------------------------------------------------------------------- | ------- | --------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)          | 20+     | Runtime de JavaScript |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | 5.9+    | Lenguaje              |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)          | 5.2.1   | Framework web         |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)          | 9.0+    | Base de datos         |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)       | 9.0.2   | ODM para MongoDB      |

</div>

---

## 🚀 Instalación

Para instalar DevTree, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/DevTree.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd DevTree
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Uso

Una vez que la aplicación esté en funcionamiento, podrás acceder a ella en `http://localhost:3000`. Puedes personalizar tu perfil y agregar enlaces a tus proyectos, redes sociales y más.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama para tu característica:
   ```bash
   git checkout -b mi-nueva-caracteristica
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m 'Agregué una nueva característica'
   ```
4. Envía tus cambios:
   ```bash
   git push origin mi-nueva-caracteristica
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia ISC. Lee el archivo [LICENSE](LICENSE) para más detalles.

---

## � API Endpoints

### Autenticación

#### Registrar Usuario

```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Respuesta exitosa:**

```json
{
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## �📦 Scripts Disponibles

```bash
# Desarrollo con Node.js watch mode (recomendado)
npm run dev

# Desarrollo con Nodemon
npm run dev:nodemon

# Build
npm run build

# Start
npm start

# Tests (próximamente)
npm test
```

---

## 🗂️ Estructura del Proyecto

```
devtree/
├── � src/
│   ├── 📄 index.ts           # Punto de entrada de la aplicación
│   ├── 📄 server.ts          # Configuración del servidor Express
│   ├── 📄 router.ts          # Rutas de la API
│   ├── 📁 config/
│   │   └── 📄 db.ts          # Configuración de MongoDB
│   ├── 📁 handlers/
│   │   └── 📄 index.ts       # Controladores de rutas
│   ├── 📁 models/
│   │   └── 📄 User.ts        # Modelo de usuario
│   └── 📁 utils/
│       └── 📄 logger.ts      # Utilidades de logging
├── 📦 package.json           # Dependencias y scripts
├── 📄 tsconfig.json          # Configuración de TypeScript
├── 📄 .env.example           # Ejemplo de variables de entorno
└── 📄 README.md              # Documentación del proyecto
```

---

## 🎨 Roadmap

- [x] Configuración inicial del servidor Express
- [x] Sistema de autenticación de usuarios
- [ ] Panel de administración
- [ ] Personalización de temas
- [ ] Analytics de clics
- [ ] Integración con redes sociales
- [ ] Generación de QR codes
- [ ] Vista previa en tiempo real
- [ ] Modo oscuro / claro
- [ ] Exportar datos
- [x] Integración con MongoDB/Mongoose
- [x] Modelo de usuario
- [x] Endpoint de registro de usuarios
- [x] Hash de contraseñas (bcrypt)
- [ ] Autenticación con JWT
- [x] Login de usuarios
- [ ] Panel de administración
- [ ] Gestión de enlaces
- [ ] Personalización de perfil # Este archivo

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar DevTree:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Convención de Commits

Usamos commits semánticos:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

---

## 📸 Screenshots

<div align="center">

### Desktop

<img src="https://via.placeholder.com/800x400/6366f1/ffffff?text=DevTree+Desktop+View" alt="Desktop View" width="600"/>

### Mobile

<img src="https://via.placeholder.com/400x800/8b5cf6/ffffff?text=DevTree+Mobile+View" alt="Mobile View" width="300"/>

</div>

---

## 🌟 Inspiración

Inspirado en Linktree, pero diseñado específicamente para desarrolladores que necesitan:

- Mayor personalización
- Control total sobre sus datos
- Integración con herramientas de desarrollo
- Sin limitaciones de enlaces

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC - mira el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**morfis**

- GitHub: [@morfis](https://github.com/morfis)
- LinkedIn: [Tu LinkedIn](#)
- Twitter: [@tutwitter](#)

---

## 💖 Apoyo

Si este proyecto te ha sido útil, considera:

- ⭐ Dar una estrella al repositorio
- 🐦 Compartir en redes sociales
- ☕ [Invitarme un café](https://www.buymeacoffee.com/tuusuario)

---

<div align="center">

### ⚡ Built with ❤️ by developers, for developers

**[⬆ Volver arriba](#-devtree)**

</div>
