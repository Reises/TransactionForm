import { Button, TextField, Typography, Stack, Alert, Select, InputLabel, FormControl, MenuItem } from "@mui/material";

export default function TransactionForm({onAdd, amount, setAmount, errorMessage, setErrorMessage, type, setType}) {  //  親から子に渡されたpropsはオブジェクトなので分割代入でかくとそのまま使えるprops.onAddと書かなくていい
    //  登録処理
    const handleRegister = () => {
        const parsedAmount = parseFloat(amount);
        if (amount.trim() === "" || isNaN(parsedAmount) || parsedAmount <= 0) {
            setErrorMessage('学習時間が入力されていません。')
            return;
        }
        onAdd({ amount: parsedAmount, type}); // 親で定義した関数を呼び出すので親に渡すことができる
        setAmount("");
        setType("income");  //  初期化
        setErrorMessage('');
    };
    return (
        <>
            <Stack spacing={2}>
                {/* タイプ選択 */}
                <FormControl fullWidth>
                    <InputLabel>タイプ</InputLabel>
                    <Select value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="income">収入</MenuItem>
                        <MenuItem value="expense">支出</MenuItem>
                    </Select>
                </FormControl>

                {/* 金額入力 */}
                <TextField label="取引" margin="normal" value={amount} onChange={e => setAmount(e.target.value)} />
                <Typography variant="body1">入力金額:{amount}</Typography>
                <Button variant="contained" color="primary" onClick={handleRegister}>登録</Button>
                {/* <Alert>{errorMessage}</Alert> */}
                {/* エラーメッセージがあるときだけ表示 */}
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </Stack>
        </>
    )
}