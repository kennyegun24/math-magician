import './calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const [calc, setCalc] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const onCalculate = (e) => {
    const btnName = e.target.innerText;

    const calcs = calculate(calc, btnName);
    setCalc(calcs);
  };

  const { total, next } = calc;
  return (
    <section className="flex">
      <div>
        <h2>
          Let&apos;s do some math!
        </h2>
      </div>
      <section className="calcSection">
        <div className="calculator">
          <div className="screen">
            <p className="screenCalc">
              {next || total || 0 }
            </p>
          </div>
          <div className="arithmetics">
            {keys.map((key) => <button key={key} onClick={onCalculate} type="button" className="numbers border">{key}</button>)}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Calculator;
