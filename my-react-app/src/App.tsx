import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [password, setPassword] = useState('')

  const handleButtonClick = () => {
    console.log('Кнопка натиснута!')
    alert('Кнопка працює!')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log('Значення поля:', e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    console.log('Пароль змінено')
  }

  const handleSubmit = () => {
    console.log('Форма надіслана')
    alert(`Ім'я: ${inputValue}`)
  }

  return (
    <div className="app">
      <h1>React Components Demo</h1>
      
      <div className="components-container">
        <div className="component-section">
          <h2>Button Component</h2>
          <Button 
            text="Натисни мене"
            type="button"
            onClick={handleButtonClick}
          />
        </div>

        <div className="component-section">
          <label>Ім'я:</label>
          <Input
            placeholder="Введіть ваше ім'я"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <div className="component-section">
          <label>Пароль:</label>
          <Input
            placeholder="Введіть пароль"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="component-section">
          <Button
            text="Надіслати"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
