import { Container, Typography, Box } from "@mui/material";
import TransactionForm from './components/TransactionForm.jsx'

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        収支トラッカー
      </Typography>
      <Box>
        <Typography variant="h5">残高: ¥0</Typography>
      </Box>
      {/* フォームや履歴リストは後で追加 */}
      <TransactionForm />
    </Container>
  );
}

export default App;