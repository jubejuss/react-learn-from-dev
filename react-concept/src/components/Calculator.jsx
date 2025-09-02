import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    // State for calculator display and operations
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    // Function to input digits
    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setDisplay(String(digit));
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? String(digit) : display + digit);
        }
    };

    // Function to input decimal point
    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    // Function to clear display
    const clearDisplay = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    // Function to perform operations
    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    // Function to calculate result
    const calculate = (firstValue, secondValue, operation) => {
        switch (operation) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '×':
                return firstValue * secondValue;
            case '÷':
                return firstValue / secondValue;
            default:
                return secondValue;
        }
    };

    // Function to calculate final result
    const calculateResult = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
            const newValue = calculate(previousValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForOperand(true);
        }
    };

    return (
        <div className="calculator">
            <h2>React Calculator</h2>
            
            {/* Display */}
            <div className="calculator__display">
                <div className="calculator__display-value">{display}</div>
            </div>

            {/* Buttons */}
            <div className="calculator__buttons">
                {/* Row 1 */}
                <button className="calculator__button calculator__button--clear" onClick={clearDisplay}>
                    AC
                </button>
                <button className="calculator__button calculator__button--operator" onClick={() => performOperation('÷')}>
                    ÷
                </button>

                {/* Row 2 */}
                <button className="calculator__button" onClick={() => inputDigit(7)}>7</button>
                <button className="calculator__button" onClick={() => inputDigit(8)}>8</button>
                <button className="calculator__button" onClick={() => inputDigit(9)}>9</button>
                <button className="calculator__button calculator__button--operator" onClick={() => performOperation('×')}>
                    ×
                </button>

                {/* Row 3 */}
                <button className="calculator__button" onClick={() => inputDigit(4)}>4</button>
                <button className="calculator__button" onClick={() => inputDigit(5)}>5</button>
                <button className="calculator__button" onClick={() => inputDigit(6)}>6</button>
                <button className="calculator__button calculator__button--operator" onClick={() => performOperation('-')}>
                    -
                </button>

                {/* Row 4 */}
                <button className="calculator__button" onClick={() => inputDigit(1)}>1</button>
                <button className="calculator__button" onClick={() => inputDigit(2)}>2</button>
                <button className="calculator__button" onClick={() => inputDigit(3)}>3</button>
                <button className="calculator__button calculator__button--operator" onClick={() => performOperation('+')}>
                    +
                </button>

                {/* Row 5 */}
                <button className="calculator__button calculator__button--zero" onClick={() => inputDigit(0)}>
                    0
                </button>
                <button className="calculator__button" onClick={inputDecimal}>.</button>
                <button className="calculator__button calculator__button--equals" onClick={calculateResult}>
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
