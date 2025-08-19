import { useState } from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from "./components/TransactionList.jsx";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); //  収支管理
  const [totalAmount, setTotalAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(''); // エラーメッセージ用のstate

  const handleAddTransaction = ({amount, type}) => {
    const adjustedAmount = type === "expense" ? -amount : amount
    //  登録処理
    setTransactions([
      ...transactions,
      {id: Date.now(), amount: adjustedAmount, date: new Date().toLocaleDateString(), type}
    ]);
      setTotalAmount(prevAmount => prevAmount + adjustedAmount)
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
      <Stack spacing={2}>
      <Box><Typography variant="h5">残高: ¥{totalAmount}</Typography></Box>
      <TransactionForm onAdd={handleAddTransaction} amount={amount} setAmount={setAmount} errorMessage={errorMessage} setErrorMessage={setErrorMessage} type={type} setType={setType} />
      <TransactionList items={transactions} onRemove={handleRemoveTransaction} />
      </Stack>
    </Container>
  );
}

export default App;