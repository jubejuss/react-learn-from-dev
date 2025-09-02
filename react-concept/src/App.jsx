import './App.css'
import FilterableProductTable from './components/FilterableProductTable';
import TodoList from './components/TodoList';
import SimpleTodoList from './components/SimpleTodoList';
import UseStateExample from './components/UseStateExample';
import UseStateEx from './components/UseStateEx';
import Calculator from './components/Calculator';
import { PRODUCTS } from './data/products';

export default function App() {
  return (
    <div>
      <h1>React useState Hook Demo</h1>
      <div style={{ marginBottom: '40px' }}>
        <UseStateEx />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <UseStateExample />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Calculator />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <SimpleTodoList />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <TodoList />
      </div>
      
      <div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </div>
  );
}

