import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2)
        setResultado(resta)
    };

    const handleDividir = () => {
        const dividir = parseFloat(num1) / parseFloat(num2)
        setResultado(dividir)
    }

    const handleMultiplicar = () => {
        const multiplicar = parseFloat(num1) * parseFloat(num2)
        setResultado(multiplicar)
    }

    const handleLimpar = () => {
        setNum1("");
        setNum2("");
        setResultado(null)
    }

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div className='calculadora-buttons'>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleDividir}>Dividir</button>
            <button onClick={handleMultiplicar}>Multiplicar</button>
            <button onClick={handleLimpar}>Limpiar Campos</button>
            </div>
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
};

export default Calculadora;