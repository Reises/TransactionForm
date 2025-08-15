import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from "./components/TransactionList.jsx";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(''); // エラーメッセージ用のstate

  const handleAddTransaction = (parseAmount) => {
    //  登録処理
    setTransactions([
      ...transactions,
      {id: Date.now(), amount: parseAmount, date: new Date().toLocaleDateString()}
    ]);
      setTotalAmount(prevAmount => prevAmount + parseAmount)
  }

  //  削除処理
  const handleRemoveTransaction = (id, removeAmount) => {
    setTransactions(transactions.filter((item) => item.id !== id));
    setTotalAmount(prevAmount => prevAmount - removeAmount)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        収支トラッカー
      </Typography>
      <Box>
        <Typography variant="h5">残高: ¥{totalAmount}</Typography>
      </Box>
      <TransactionForm onAdd={handleAddTransaction} amount={amount} setAmount={setAmount} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      <TransactionList items={transactions} onRemove={handleRemoveTransaction} />
    </Container>
  );
}

export default App;