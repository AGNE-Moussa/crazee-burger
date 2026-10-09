import { useState } from "react"

function App() {
  // State
  const [prenom, setPrenom] = useState("")

  // Comportements
  const handleChange = (e) => setPrenom(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Bonjour ${prenom.trim()}`)
  }

  // Affichage
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>

      <form onSubmit={handleSubmit}>
        <input
          id="prenom"
          type="text"
          placeholder="Entrez votre prénom"
          value={prenom}
          onChange={handleChange}
          required
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  )
}

export default App