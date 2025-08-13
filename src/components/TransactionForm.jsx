import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

let nextId = 0;

function displayTime(clockEl) {
  const now = new Date();
  const hour = padZero(now.getHours());
  const minute = padZero(now.getMinutes());
  const second = padZero(now.getSeconds());
  clockEl.textContent = `${hour}:${minute}:${second}`;
}

export default function TransactionForm() {
    const [transactions, setTransactions] = useState([]);

    const handleRegister = () => {
        //  登録処理
        setTransactions([
            ...transactions,
            {id: nextId++, amount: amount, date: }
        ])
    }
    return (
        <>
            <Stack spacing={1}>
                <TextField label="取引" margin="normal" value={transactions} onChange={e => setTransactions(e.target.value)} />
                <Typography variant="body1">
                    入力内容:{transactions}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleRegister}>登録</Button>
                {/* <Alert>{errorMessage}</Alert> */}
                {/* エラーメッセージがあるときだけ表示 */}
                {/* {errorMessage && <Alert severity="error">{errorMessage}</Alert>} */}
            </Stack>
        </>
    )
}