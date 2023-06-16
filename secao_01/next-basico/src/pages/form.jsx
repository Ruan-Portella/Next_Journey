import {useState} from 'react'

export default function form() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    async function subbmit() {
      await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade })
        })
      const resp = await fetch('/api/form')
      const usuarios = await resp.json()
      setUsuarios(usuarios)
    }

    function renderizarUsuarios() {
        return usuarios.map((usuario, index) => {
            return <li key={index}>{usuario.nome} tem {usuario.idade} anos</li>
        })
    }
    return (
        <div>
            <h1>Integrando com API</h1>
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}></input>
            <input type="number" value={idade} onChange={(event) => setIdade(event.target.value)}></input>
            <button onClick={subbmit}>Enviar</button>
            <ul>
                {renderizarUsuarios()}
            </ul>
        </div>
    )
}