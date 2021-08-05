import './App.css';
import { Header } from './comps/Header';
import { Balance } from './comps/Balance';
import { IncomeExpenses } from './comps/IncomeExpenses';
import {TransactionList } from './comps/TransactionList';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
