import React, { useState } from 'react';

function CalculadoraIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    setResultado(imc.toFixed(2));
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="button" onClick={calcularIMC}>
          Calcular IMC
        </button>
      </form>
      {resultado && (
        <div>
          <h2>Seu IMC é: {resultado}</h2>
        </div>
      )}
    </div>
  );
}

export default CalculadoraIMC;
