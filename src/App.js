import './App.css';
import { Header } from './comps/Header';
import { Balance } from './comps/Balance';
import { IncomeExpenses } from './comps/IncomeExpenses';
import {TransactionList } from './comps/TransactionList';
import { AddTransaction } from './comps/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
