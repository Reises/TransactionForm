import { useState } from "react";
import { Button, Container, IconButton, TextField, Typography, Stack, Alert, Card, CardContent, List, LinearProgress, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

let nextId = 0;
const padZero = (value) => value.toString().padStart(2, '0');

function displayDate() {
  const now = new Date();
  const year = padZero(now.getFullYear());
  const month = padZero(now.getMonth()+1);
  const day = padZero(now.getDate());
  const date = `${year}:${month}:${day}`
  return date
}

export default function TransactionForm() {
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState('');

    const handleRegister = () => {
        const parsedAmount = parseFloat(amount);
        //  登録処理
        setTransactions([
            ...transactions,
            {id: nextId++, amount: parsedAmount, date: displayDate()}
        ]);

        //  初期化
        setAmount('');
    }

    //  削除処理
    const handleRemove = (idToRemove) => {
        setTransactions(transactions.filter((item) => item.id !== idToRemove));
    }
    return (
        <>
            <Stack spacing={1}>
                <TextField label="取引" margin="normal" value={amount} onChange={e => setAmount(e.target.value)} />
                <Typography variant="body1">
                    入力金額:{amount}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleRegister}>登録</Button>
                {/* <Alert>{errorMessage}</Alert> */}
                {/* エラーメッセージがあるときだけ表示 */}
                {/* {errorMessage && <Alert severity="error">{errorMessage}</Alert>} */}
            </Stack>
            {transactions.length === 0 ? (
                <Typography color="text.secondary">まだ記録がありません</Typography>
            ) : (
                <Card sx={{ mt: 3, mb: 3}}>
                    <CardContent>
                        <Typography variant="h6">取引リスト</Typography>
                        <List>
                            {transactions.map(item => (
                                <ListItem key={item.id}>
                                    <ListItemText primary={`金額:${item.amount} 日付:(${item.date})`} />
                                    <IconButton onClick={() => handleRemove(item.id)} aria-label="削除"><DeleteIcon /></IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            )}
        </>
    )
}