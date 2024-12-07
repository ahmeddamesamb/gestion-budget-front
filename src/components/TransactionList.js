import React from 'react';
import { Button } from '@mui/material';

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  return (
    <div className="max-w-6xl mx-auto mt-6">
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Type</th>
            <th className="py-2 px-4">Montant</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="py-2 px-4">{transaction.description}</td>
              <td className="py-2 px-4">{transaction.type}</td>
              <td className="py-2 px-4">{transaction.amount} €</td>
              <td className="py-2 px-4">{new Date(transaction.date).toLocaleDateString()}</td>
              <td className="py-2 px-4 flex space-x-2">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => onEdit(transaction)}
                >
                  Modifier
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => onDelete(transaction.id)}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
