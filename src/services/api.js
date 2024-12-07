import axios from "axios";

const API_URL = "http://localhost:8080"; 

export const getTransactions = async () => {
    try {
      const response = await axios.get('/transactions');
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des transactions :", error);
      throw error;
    }
  };

export const addTransaction = async (transaction) => {
    try {
        const response = await axios.post(`${API_URL}/transactions`, transaction);
        console.log('Transaction ajoutée:', response.data);
        return response;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la transaction:', error);
        throw error;
    }
};

export const updateTransaction = async (id, transaction) => {
    try {
        const response = await axios.put(`${API_URL}/transactions/${id}`, transaction);
        console.log('Transaction mise à jour:', response.data);
        return response;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la transaction:', error);
        throw error;
    }
};

export const deleteTransaction = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/transactions/${id}`);
        console.log('Transaction supprimée:', response.data);
        return response;
    } catch (error) {
        console.error('Erreur lors de la suppression de la transaction:', error);
        throw error;
    }
};
