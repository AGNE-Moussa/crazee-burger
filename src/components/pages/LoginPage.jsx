import { useState } from "react"
export default function LoginPage() {
    // State
  const [prenom, setPrenom] = useState("")

  // Comportements
  const handleChange = (e) => setPrenom(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Bonjour ${prenom}`)
    setPrenom("")
  }

  // Affichage
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          id="prenom"
          type="text"
          placeholder="Entrez votre prénom..."
          value={prenom}
          onChange={handleChange}
          required
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  )

}

