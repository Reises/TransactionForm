import { useState } from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from "./components/TransactionList.jsx";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// UTCプラグインを読み込み
dayjs.extend(utc);
// timezoneプラグインを読み込み
dayjs.extend(timezone);
// 日本語化
dayjs.locale('ja');
// タイムゾーンのデフォルトをJST化
dayjs.tz.setDefault('Asia/Tokyo');

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddTransaction = ({amount, type, date, category}) => {
    const adjustedAmount = type === "expense" ? -amount : amount
    //  登録処理
    setTransactions([
      ...transactions,
      {id: `${date}-${Date.now()}`, amount: adjustedAmount, date: dayjs(date).tz("Asia/Tokyo").format("YYYY-MM-DD"), type, category}
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
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionList items={transactions} onRemove={handleRemoveTransaction} setItems={setTransactions} />
      </Stack>
    </Container>
  );
}

export default App;