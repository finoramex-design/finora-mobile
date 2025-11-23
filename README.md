# FINORA Mobile App (MVP v1)

Aplicación móvil desarrollada en **Expo + React Native** como parte del MVP v1 de FINORA — bienestar financiero simple, claro y sin estrés.

---

## 🚀 Cómo correr la app en tu computadora y en tu celular

### 1. Instala Node.js
https://nodejs.org/

### 2. Instala Expo CLI
npm install -g expo-cli

powershell
Copiar código

### 3. Instala dependencias
En la carpeta del proyecto:
npm install

shell
Copiar código

### 4. Inicia la app
npm start

yaml
Copiar código

Expo abrirá un QR que puedes escanear con la app **Expo Go** en tu celular (iOS o Android).

---

## 📱 Pantallas incluidas

- Onboarding  
- Dashboard  
- Categorías  
- Registrar gasto  

---

## 🧩 Estructura

src/
├── navigation/
├── screens/
├── components/
├── theme/

yaml
Copiar código

---

## 🌐 Conexión al backend FINORA

Puedes consumir el backend (cuando esté desplegado en Railway o Render) con:

```js
fetch("https://tu-backend-url/api/v1/quincena/actual")
