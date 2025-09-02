import { useState } from 'react';

const UseStateExample = () => {
    // Example 1: String state (original)
    const [state, setState] = useState(1);
    const state2 = 3;
    
    // Example 2: Number state (counter)
    const [count, setCount] = useState(0);
    
    // Example 3: Boolean state (toggle)
    const [isVisible, setIsVisible] = useState(true);
    
    // Example 4: String state with user input
    const [userInput, setUserInput] = useState('');

    return (
        <div className="use-state-examples">
            {/* Example 1: String state */}
            <div className="example">
                <h3>Example 1: String State</h3>
                <p>State: {state}</p>
                <button onClick={() => setState(state + state2)}>Change State</button>
            </div>

            {/* Example 2: Counter */}
            <div className="example">
                <h3>Example 2: Counter</h3>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>

            {/* Example 3: Toggle */}
            <div className="example">
                <h3>Example 3: Toggle</h3>
                <p>Visibility: {isVisible ? 'Visible' : 'Hidden'}</p>
                <button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'Hide' : 'Show'}
                </button>
                {isVisible && <p>This content is visible!</p>}
            </div>

            {/* Example 4: Form input */}
            <div className="example">
                <h3>Example 4: Form Input</h3>
                <input 
                    type="text" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type something..."
                />
                <p>You typed: {userInput}</p>
                <button onClick={() => setUserInput('')}>Clear</button>
            </div>
        </div>
    );
};

export default UseStateExample;