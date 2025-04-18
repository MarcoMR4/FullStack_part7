import { Typography, Card, CardContent, Container } from "@mui/material"

const Anecdote = ({ anecdote }) => (
  <Container maxWidth="sm">
    <Card variant="outlined" sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {anecdote.content}
        </Typography>
        <Typography variant="subtitle1">
          Author: {anecdote.author}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Info: <i>{anecdote.info}</i>
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Votes: <strong>{anecdote.votes}</strong>
        </Typography>
      </CardContent>
    </Card>
  </Container>
)

export default Anecdote
