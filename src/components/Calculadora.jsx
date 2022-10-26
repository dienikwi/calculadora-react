import React, { useState } from "react";

import './Calculadora.css';

export default function Calculadora() {
    const [num, setNum] = useState('');
    const [numAntigo, setNumAntigo] = useState('');
    const [operacao, setOperacao] = useState('');
    const [result, setResult] = useState(0);

    function inputNum(e) {
        var input = e.target.value;
        if (num != ('')) {
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
        setNum(num / 100);
    }

    function inverteSinal() {
        setNum(num * -1);
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
                        <button className="bt-cinza" onClick={clear}><span>AC</span></button>
                        <button className="bt-cinza" onClick={inverteSinal}><span>+/-</span></button>
                        <button className="bt-cinza" onClick={porcentagem}><span>%</span></button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"/"}><span>/</span></button>
                    </div>

                    <div>
                        <button className="bt-cinza" onClick={inputNum} value={7}><span>7</span></button>
                        <button className="bt-cinza" onClick={inputNum} value={8}><span>8</span></button>
                        <button className="bt-cinza" onClick={inputNum} value={9}><span>9</span></button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"x"}><span>X</span></button>
                    </div>

                    <div>
                        <button className="bt-cinza" onClick={inputNum} value={4}><span>4</span></button>
                        <button className="bt-cinza" onClick={inputNum} value={5}><span>5</span></button>
                        <button className="bt-cinza" onClick={inputNum} value={6}><span>6</span></button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"-"}><span>-</span></button>
                    </div>

                    <div>
                        <button className="bt-cinza" onClick={inputNum} value={1}><span>1</span></button>
                        <button className="bt-cinza" onClick={inputNum} value={2}><span>2</span></button>
                        <button className="bt-cinza" onClick={inputNum} value={3}><span>3</span></button>
                        <button className="bt-laranja" onClick={inputOperacao} value={"+"}><span>+</span></button>
                    </div>

                    <div>
                        <button className="bt-cinza zero" onClick={inputNum} value={0}><span>0</span></button>
                        <button className="bt-cinza" onClick={inputNum} value={"."}><span>,</span></button>
                        <button className="bt-laranja" onClick={calcula}><span>=</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}