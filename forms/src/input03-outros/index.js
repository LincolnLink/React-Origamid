import React, { useState } from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

function Input03() {
  const [mensagem, setMensagem] = useState('');
  const [select, setSelect] = useState('');
  const [produto, setProduto] = useState('');
  const [cor, setCor] = useState('');
  const [termos, setTermos] = useState(false);
  const [cores, setCores] = useState([]);
  const [coresMult, setCoresMult] = useState([]);

  // Unico select
  function handleChange({ target }) {
    setTermos(target.checked);
  }

  // Select
  function handleChange2({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  // Select
  function handleChecked(cor) {
    return cores.includes(cor);
  }

  // Select multiplos
  function handleChange3({ target }) {
    if (target.checked) {
      setCoresMult([...coresMult, target.value]);
    } else {
      setCoresMult(coresMult.filter((cor) => cor !== target.value));
    }
  }

  // Select multiplos
  function handleChecked3(cor) {
    return coresMult.includes(cor);
  }

  return (
    <form>
      <br />
      <h2>Input - outros tipos de input</h2>
      <p>textarea</p>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
      <br />

      <br />
      <h2>Select</h2>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
      <br />

      <br />
      <h2>Radio</h2>
      <h5>Dispositivo</h5>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>

      <h5>Cor</h5>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === 'azul'}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === 'vermelho'}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
      <br />

      <br />
      <h2>Checkbox</h2>
      {termos && <p>Aceitou os termos</p>}
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={handleChange}
        />
        Aceito os termos.
      </label>

      <br />
      <br />

      <h2>Multiplos Checkbox</h2>

      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange2}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange2}
        />
        Vermelho
      </label>
      <br />

      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
      <br />
      <br />

      <h2>Multiplos Checkbox OTIMIZADO</h2>

      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked3(cor)}
            onChange={handleChange3}
          />
          {cor}
        </label>
      ))}
      <ul>
        {coresMult.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>

      <br />
      <br />
    </form>
  );
}

export default Input03;
