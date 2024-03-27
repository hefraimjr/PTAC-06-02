import{ useState } from "react";

export default function Main(){
    const[nome, setNome] = useState("");
    const[telefone, setTelefone] = useState("");
    const[listaContatos, setContatos] = useState( [ ] )

    const registrar = () => {
              alert("deu certo!");
    }

    return (
        <main>
            <form>
             <label htmlFor="nome">Nome:</label>
              <input
              type="text"
              nome=""
              id=""
              value={nome}
              onChange={(event)=> telefone(event.target.value)
              }
              />
              {nome}
<br></br>
<br></br>
              <label htmlFor="telefone">telefone:</label>
              <input
              type="text"
              nome=""
              id=""
              value={telefone}
              onChange={(event)=> telefone(event.target.value)
              }
              />
              {telefone}
<br></br>
<br></br>
              <button type="submit">Salva</button>
              </form>
              </main>
    );
}
