import './calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(pro) {
    super(pro);
    this.keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  onCalculate = (e) => {
    const btnName = e.target.innerText;

    const calc = calculate(this.state, btnName);
    this.setState(calc);
  }

  render() {
    const { total, next } = this.state;
    return (
      <section className="calcSection">
        <div className="calculator">
          <div className="screen">
            <p className="screenCalc">
              {next || total || 0 }
            </p>
          </div>
          <div className="arithmetics">
            {this.keys.map((key) => <button key={key} onClick={this.onCalculate} type="button" className="numbers border">{key}</button>)}
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
