import './calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(pro) {
    super(pro);
    this.keys = {};
  }

  render() {
    return (
      <section className="calcSection">
        <div className="calculator">
          <div className="screen" />
          <div className="arithmetics">
            <button type="button" className="ash numbers border">AC</button>
            <button type="button" className="ash numbers border">+/-</button>
            <button type="button" className="ash numbers border">%</button>
            <button type="button" className="orange numbers border">/</button>
            <button type="button" className="ash numbers border">7</button>
            <button type="button" className="ash numbers border">8</button>
            <button type="button" className="ash numbers border">9</button>
            <button type="button" className="orange numbers border">*</button>
            <button type="button" className="ash numbers border">4</button>
            <button type="button" className="ash numbers border">5</button>
            <button type="button" className="ash numbers border">6</button>
            <button type="button" className="orange numbers border">-</button>
            <button type="button" className="ash numbers border">1</button>
            <button type="button" className="ash numbers border">2</button>
            <button type="button" className="ash numbers border">3</button>
            <button type="button" className="orange numbers border">+</button>
            <button type="button" className="ash zero border">0</button>
            <button type="button" className="ash numbers border">.</button>
            <button type="button" className="orange numbers border">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
