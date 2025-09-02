import { useState } from 'react';

const UseStateEx = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    
    const reset = () => {
        setCount(0);
    };
    
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span style={{ margin: '0 10px' }}>Count: {count}</span>
            <button onClick={increment}>+</button>
            <button onClick={reset} style={{ marginLeft: '10px' }}>
                Reset
            </button>
        </div>
    );
};

export default UseStateEx;