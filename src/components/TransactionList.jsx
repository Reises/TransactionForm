import { IconButton, Typography,  Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function TransactionList({ items, onRemove }) {
    return (
        <>
            {items.length === 0 ? (
            <Typography color="text.secondary">まだ記録がありません</Typography>
        ) : (
            <Card sx={{ mt: 3, mb: 3}}>
                <CardContent>
                    <Typography variant="h6">取引リスト</Typography>
                    <List>
                        {items.map(item => (
                            <ListItem key={item.id}>
                                <ListItemText primary={`金額:${item.amount} (${item.type === "income" ? "収入" : "支出"}:${item.category}) 日付:(${item.date})`} />
                                <IconButton onClick={() => onRemove(item.id, item.amount)} aria-label="削除"><DeleteIcon /></IconButton>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
            )}
        </>
    );
}