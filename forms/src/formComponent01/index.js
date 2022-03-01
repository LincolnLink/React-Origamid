import React, { useState } from 'react';
import CheckBoxGenerico from './checkBoxGenerico';
import InputGenerico from './inputGenerico';
import RadioGenerico from './radioGenerico';
import SelectGenerico from './selectGenerico';

function FormComponent01() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [produto, setProduto] = useState('');
  const [produto02, setProduto02] = useState('');
  const [radio01, setRadio01] = useState('Azul');
  const [radio02, setRadio02] = useState('Azul');
  const [linguagens, setLinguagens] = useState([]);
  const [termos, setTermos] = useState([]);

  if (termos.length > 0) {
    console.log('enviar');
  }

  return (
    <>
      <h1>Exemplo de Input Generico</h1>
      <br />
      <form>
        <InputGenerico
          id="nomeg"
          label="Nome"
          value={nome}
          setValue={setNome}
        />
        <InputGenerico
          id="emailg"
          label="Email"
          value={email}
          setValue={setEmail}
          required
        />

        <br />
        <br />
        <SelectGenerico
          options={['smartphone GX9', 'Tablet LG']}
          label="Produto Eletronico"
          value={produto}
          setValue={setProduto}
        />
        <br />
        <br />
        <SelectGenerico
          options={['Banana', 'Pera', 'Goiaba']}
          label="Frutas"
          value={produto02}
          setValue={setProduto02}
        />
        <br />
        <br />

        <RadioGenerico
          label="Cor"
          options={['Azul', 'Vermelho', 'Verde']}
          value={radio01}
          setValue={setRadio01}
        />

        <RadioGenerico
          label="Mobilha"
          options={['Cadeira', 'Mesa']}
          value={radio02}
          setValue={setRadio02}
        />
        <br />
        <br />
        <h5>Linguagens</h5>
        <CheckBoxGenerico
          value={linguagens}
          setValue={setLinguagens}
          options={['JS', 'PHP', 'Ruby']}
        />

        <br />
        <br />
        <h5>Termos</h5>
        <CheckBoxGenerico
          value={termos}
          setValue={setTermos}
          options={['Li e aceito os termos.']}
        />

        <br />
        <br />
        <button className="btnEnviar">Enviar</button>
      </form>
    </>
  );
}

export default FormComponent01;
