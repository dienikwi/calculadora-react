import React, { useState } from "react";

import './Calculadora.css';

export default function Calculadora() {
    const [num, setNum] = useState('');
    const [numAntigo, setNumAntigo] = useState('');
    const [operacao, setOperacao] = useState('');
    const [result, setResult] = useState('');

    function inputNum(e) {
        var input = e.target.value;
        if (num !== ('')) {
            setNum(num + input);
        } else {
            setNum(input);
        }
    }

    function inputOperacao(e) {
        var op = e.target.value;
        setOperacao(op);
        setNumAntigo(num);
        setNum('');
    }

    function clear() {
        setNum('');
    }

    function porcentagem() {
        setNum(parseFloat(num) / 100);
    }

    function inverteSinal() {
        setNum(parseFloat(num) * -1);
    }

    function calcula() {
        if (num !== '' && numAntigo !== '') {
            if (operacao === "/") {
                setNum(parseFloat(numAntigo) / parseFloat(num));
            } else if (operacao === "x") {
                setNum(parseFloat(numAntigo) * parseFloat(num));
            } else if (operacao === "-") {
                setNum(parseFloat(numAntigo) - parseFloat(num));
            } else if (operacao === "+") {
                setNum(parseFloat(numAntigo) + parseFloat(num));
            }
        }
    }


    return (
        <>
            <div className="central">
                <div className="wrapper">
                    <div className="resultado">
                        <h2></h2>
                        <h2></h2>
                        <h2></h2>
                        <h1 className="valor"> {num} </h1>
                    </div>
                    <div>
                        <button className="bt-cinza" onClick={clear}>AC</button>
                        <button className="bt-cinza" onClick={inverteSinal}>+/-</button>
                        <button className="bt-cinza" onClick={porcentagem}>%</button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"/"}>/</button>
                    </div>

                    <div>
                        <button className="bt-cinza" onClick={inputNum} value={7}>7</button>
                        <button className="bt-cinza" onClick={inputNum} value={8}>8</button>
                        <button className="bt-cinza" onClick={inputNum} value={9}>9</button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"x"}>X</button>
                    </div>

                    <div>
                        <button className="bt-cinza" onClick={inputNum} value={4}>4</button>
                        <button className="bt-cinza" onClick={inputNum} value={5}>5</button>
                        <button className="bt-cinza" onClick={inputNum} value={6}>6</button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"-"}>-</button>
                    </div>

                    <div>
                        <button className="bt-cinza" onClick={inputNum} value={1}>1</button>
                        <button className="bt-cinza" onClick={inputNum} value={2}>2</button>
                        <button className="bt-cinza" onClick={inputNum} value={3}>3</button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"+"}>+</button>
                    </div>

                    <div>
                        <button className="bt-cinza zero" onClick={inputNum} value={0}>0</button>
                        <button className="bt-cinza" onClick={inputNum} value={"."}>,</button>
                        <button className="bt-laranja" onClick={calcula}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}