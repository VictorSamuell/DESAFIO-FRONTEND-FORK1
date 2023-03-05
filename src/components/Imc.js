import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Imc.css";
    //lembrete : colocar form com bootstrap


function Imc() {
  
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculaImc = () => {
    const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setResult(imc);
  };

  return (
    <div className="flauta">
        <header className='involvente'>
            <h1 className='h1imc'> Veja se você está fora de forma!</h1>
        </header>

        <section className='quemexe'>
        
      <Form>
        <Form.Group>
          <Form.Label>Altura (cm)</Form.Label>
          <Form.Control 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Peso (kg)</Form.Label>
          <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </Form.Group>
        <h3>----------</h3>

        <Button variant="primary" onClick={calculaImc}>
          Calcular
        </Button>
        
        {result && (
          <h1 className='involvente'>IMC : {result} </h1>
          
        )}
            <div className='divimc4'>
            <li>Menor que 16,9 - MUITO ABAIXO DO PESO</li>
            <li>17 a 18,4      - ABAIXO DO PESO</li>
            <li>18,5 a 24,9    - PESO NORMAL</li>
            <li>25 a 29,9      - ACIMA DO PESO</li>
            <li>30 a 34,9      - OBESIDADE GRAU I</li>
            <li>35 a 40        - OBESIDADE GRAU II</li>
            <li>Maior que 40   - OBESIDADE GRAU III</li>
            </div>
      </Form>
      </section>
    </div>
  );
}

export default Imc;