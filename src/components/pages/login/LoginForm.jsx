import React, { useState } from 'react'


export default function LoginForm() {
    // State
  const [prenom, setPrenom] = useState("")

  // Comportements
  const handleChange = (e) => setPrenom(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Bonjour ${prenom}`)
    setPrenom("")
  }

  //Affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
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
  )
}
