import './App.css';
import React, { useEffect, useState } from 'react';
import { addTransaction, deleteTransaction, getTransactions, updateTransaction } from './services/api';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await getTransactions();
      setTransactions(response.data);
      calculateBalance(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des transactions :", error);
    }
  };

  const calculateBalance = (transactions) => {
    const total = transactions.reduce((acc, curr) => {
      return curr.type === 'revenu' ? acc + curr.amount : acc - curr.amount;
    }, 0);
    setBalance(total);
  };

  const handleAddOrUpdate = async (transaction) => {
    if (currentTransaction) {
      await updateTransaction(currentTransaction.id, transaction);
    } else {
      await addTransaction(transaction);
    }
    setCurrentTransaction(null);
    setIsFormVisible(false);
    fetchTransactions();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTransactions();
  };

  const handleShowForm = () => {
    setIsFormVisible(true);
    setCurrentTransaction(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header balance={balance} />
      {!isFormVisible && (
        <div className="max-w-6xl mx-auto mt-6">
          <button
            onClick={handleShowForm}
            className="bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Ajouter une transaction
          </button>
        </div>
      )}
      {isFormVisible && (
        <TransactionForm onSubmit={handleAddOrUpdate} transaction={currentTransaction} />
      )}
      <TransactionList transactions={transactions} onEdit={setCurrentTransaction} onDelete={handleDelete} />
    </div>
  );
};

export default App;
