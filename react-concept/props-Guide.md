# React Props - Simple Guide

## What are Props?

Props are a way to pass data from a parent component to a child component. Think of them as "properties" or "parameters" that you give to a component.

## Basic Syntax

```javascript
// Parent component passes props
<ChildComponent name="John" age={25} />

// Child component receives props
function ChildComponent(props) {
  return <div>Hello {props.name}!</div>;
}
```

## Simple Example

```javascript
// Parent Component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Welcome website="React Tutorial" />
    </div>
  );
}

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Welcome(props) {
  return <p>Welcome to {props.website}!</p>;
}
```

## Breaking it down:

### 1. Passing Props (Parent)
```javascript
<Greeting name="Alice" />
```
- `name="Alice"` = passing a prop called "name" with value "Alice"
- Props are like HTML attributes

### 2. Receiving Props (Child)
```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
- `props` = object containing all passed data
- `props.name` = accessing the "name" prop

## Destructuring Props

```javascript
// Instead of props.name, props.age
function Person(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

// You can destructure for cleaner code
function Person({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

## Different Types of Props

```javascript
function Example() {
  return (
    <div>
      {/* String props */}
      <Component text="Hello" />
      
      {/* Number props */}
      <Component number={42} />
      
      {/* Boolean props */}
      <Component isVisible={true} />
      
      {/* Object props */}
      <Component user={{ name: "John", age: 30 }} />
      
      {/* Array props */}
      <Component items={["apple", "banana"]} />
      
      {/* Function props */}
      <Component onClick={() => alert("Clicked!")} />
    </div>
  );
}
```

## Using Props in Components

```javascript
function Button({ text, onClick, disabled = false }) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Usage
<Button 
  text="Click me" 
  onClick={() => console.log("Button clicked")}
  disabled={false}
/>
```

## Default Props

```javascript
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// These all work:
<Greeting name="Alice" />  // Shows: "Hello, Alice!"
<Greeting />               // Shows: "Hello, Guest!"
```

## Key Rules:

### ✅ Do this:
```javascript
// Pass data down to children
<ChildComponent data={someData} />

// Use props in child component
function ChildComponent({ data }) {
  return <div>{data}</div>;
}
```

### ❌ Don't do this:
```javascript
// Don't try to change props directly
function ChildComponent({ data }) {
  data = "new value";  // ❌ This won't work
  return <div>{data}</div>;
}
```

## Props vs State

| Props | State |
|-------|-------|
| Passed from parent | Managed inside component |
| Read-only | Can be changed with setState |
| Trigger re-render when changed | Triggers re-render when changed |
| Used for configuration | Used for dynamic data |

## Summary

- **Props** = data passed from parent to child
- **Props are read-only** - child can't change them
- **Use destructuring** for cleaner code: `{ name, age }`
- **Props can be any type** - strings, numbers, objects, functions
- **Default values** can be set with `= defaultValue`
- **Props trigger re-renders** when they change
