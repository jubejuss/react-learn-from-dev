# React useState Hook - Simple Guide

## What is useState?

`useState` is a React hook that gives you two things:
1. **state** - a variable that holds data
2. **setState** - a function to change that data

## Basic Syntax

```javascript
const [state, setState] = useState(initialValue);
```

## Simple Example

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
    </div>
  );
}
```

## Breaking it down:

### 1. `const [count, setCount] = useState(0);`

- `count` = the state variable (holds the current value)
- `setCount` = the function to update the state
- `useState(0)` = starts with value 0

### 2. `onClick={() => setCount(count + 1)}`

- When button is clicked, `setCount` is called
- `count + 1` = new value for the state
- React updates `count` and re-renders the component

## How it works:

1. **Initial render**: `count` starts as 0
2. **User clicks button**: `setCount(count + 1)` is called
3. **React updates**: `count` becomes 1
4. **Component re-renders**: Shows "Count: 1"

## Key Rules:

### ✅ Do this:
```javascript
setCount(count + 1);  // Update with new value
```

### ❌ Don't do this:
```javascript
count = count + 1;    // Never change state directly
```

## Multiple State Variables

```javascript
function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Age: {age}</p>
      <button onClick={() => setIsActive(!isActive)}>
        Toggle
      </button>
    </div>
  );
}
```

## Summary

- `state` = your data
- `setState` = function to change your data
- Always use `setState` to update state
- Never change state directly
- When state changes, component re-renders
