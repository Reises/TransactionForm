import { Button, TextField, Typography, Stack, Alert } from "@mui/material";

export default function TransactionForm({onAdd, amount, setAmount, errorMessage, setErrorMessage}) {  //  親から子に渡されたpropsはオブジェクトなので分割代入でかくとそのまま使えるprops.onAddと書かなくていい
    //  登録処理
    const handleRegister = () => {
        const parsedAmount = parseFloat(amount);
        if (amount.trim() === "" || isNaN(parsedAmount) || parsedAmount <= 0) {
            setErrorMessage('学習時間が入力されていません。')
            return;
        }
        onAdd(parsedAmount); // 親で定義した関数を呼び出すので親に渡すことができる
        setAmount("");
        setErrorMessage('');
    };
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
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </Stack>
        </>
    )
}