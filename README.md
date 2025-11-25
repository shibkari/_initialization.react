# My React App 🚀

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?style=flat&logo=vite)

## 📝 Опис проекту

Це базовий React проект з TypeScript, створений за допомогою Vite, який демонструє роботу з функціональними компонентами, props та обробниками подій. Проект включає два переосяжні компоненти: **Button** (кнопка) та **Input** (текстове поле).

## ✨ Особливості

- ⚛️ React 19 з TypeScript
- ⚡ Vite для швидкої розробки
- 🎨 Власні компоненти Button та Input з типізацією
- 🔄 Обробка подій (onClick, onChange)
- 📦 Модульна структура коду
- 🚀 Готовий до деплою

## 🛠️ Технології

- **React** - бібліотека для створення користувацьких інтерфейсів
- **TypeScript** - типізована надбудова над JavaScript
- **Vite** - інструмент для швидкої розробки
- **ESLint** - лінтер для перевірки якості коду

## 📁 Структура проекту

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── Button.tsx      # Компонент кнопки
│   │   └── Input.tsx       # Компонент поля введення
│   ├── App.tsx             # Головний компонент додатку
│   ├── main.tsx            # Точка входу
│   ├── App.css             # Стилі App компонента
│   ├── index.css           # Глобальні стилі
│   └── assets/             # Статичні ресурси
├── public/                 # Публічні файли
├── index.html              # HTML шаблон
├── package.json            # Залежності проекту
├── tsconfig.json           # Конфігурація TypeScript
└── vite.config.ts          # Конфігурація Vite
```

## 🚀 Швидкий старт

### Передумови

- Node.js (версія 14.0+)
- npm або yarn

### Встановлення

```bash
# Клонуйте репозиторій
git clone https://github.com/shibkari/_initialization.react.git
cd _initialization.react/my-react-app

# Встановіть залежності
npm install

# Запустіть dev сервер
npm run dev
```

Відкрийте [http://localhost:5173](http://localhost:5173) у браузері.

## 📦 Доступні скрипти

| Команда           | Опис                                |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Запуск проекту в режимі розробки    |
| `npm run build`   | Збірка проекту для продакшену       |
| `npm run preview` | Перегляд production збірки локально |
| `npm run lint`    | Перевірка коду за допомогою ESLint  |

## 🎯 Компоненти

### 🔘 Button Component

Переосяжний компонент кнопки з підтримкою різних типів та обробників подій.

**Props:**

- `text` (string) - текст кнопки
- `type` (string, optional) - тип кнопки: `button`, `submit`, `reset`
- `onClick` (function) - обробник кліку

**Приклад:**

```tsx
<Button
  text="Натисни мене"
  type="button"
  onClick={() => console.log("Clicked!")}
/>
```

### 📝 Input Component

Переосяжний компонент поля введення з підтримкою різних типів.

**Props:**

- `placeholder` (string, optional) - підказка для користувача
- `type` (string, optional) - тип поля: `text`, `password`, `email`, `number`
- `onChange` (function) - обробник зміни значення
- `value` (string, optional) - значення поля

**Приклад:**

```tsx
<Input
  placeholder="Введіть ваше ім'я"
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>
```

## 🌐 Демо

🔗 **Live Demo:** [https://initialization-react-epke2hnf2-shibkaris-projects.vercel.app](https://initialization-react-epke2hnf2-shibkaris-projects.vercel.app)

> ✨ Переглянути робочу версію проекту онлайн!

**Альтернативне посилання:** [initialization-react.vercel.app](https://initialization-react.vercel.app)

## 📤 Деплоймент

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shibkari/_initialization.react)

```bash
npm install -g vercel
vercel
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shibkari/_initialization.react)

```bash
npm run build
netlify deploy --prod
```

## 📝 Виконані завдання

- ✅ Ініціалізація React проекту з TypeScript через Vite
- ✅ Створення компонента Button з props (text, type, onClick)
- ✅ Створення компонента Input з props (placeholder, type, onChange, value)
- ✅ Типізація всіх компонентів за допомогою TypeScript
- ✅ Використання компонентів в App.tsx з прикладами
- ✅ Обробка подій користувача (onClick, onChange)
- ✅ Управління станом з useState
- ✅ Документація проекту

## 🎓 Навчальні цілі

Цей проект допомагає освоїти:

- ✨ Створення React проекту з Vite та TypeScript
- 🔧 Роботу з функціональними компонентами
- 📦 Передачу та використання props з типізацією
- 🎯 Обробку подій в React
- 🎨 Управління станом за допомогою хуків (useState)
- 🏗️ Структурування коду та розділення компонентів
- ♻️ Створення переосяжних (reusable) компонентів

## 💡 Приклад використання

```tsx
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name && password) {
      alert(`Привіт, ${name}!`);
    }
  };

  return (
    <div>
      <Input
        placeholder="Ім'я користувача"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Увійти" type="submit" onClick={handleSubmit} />
    </div>
  );
}
```

## 📚 Корисні ресурси

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 👨‍💻 Автор

**shibkari**

- GitHub: [@shibkari](https://github.com/shibkari)

## 📄 Ліцензія

MIT License - використовуйте проект як завгодно!

---

<div align="center">
  <p>Зроблено з ❤️ для навчання React + TypeScript</p>
  <p>⭐ Якщо проект був корисним, поставте зірочку на GitHub!</p>
</div>
