import { Link } from "react-router-dom"
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Stack
} from "@mui/material"
import { ThumbUp, Visibility, Add } from "@mui/icons-material"

const AnecdoteList = ({ anecdotes, vote }) => (
  <Container maxWidth="md">
    <Typography variant="h4" gutterBottom>Anecdotes</Typography>

    <Button
      variant="contained"
      color="primary"
      startIcon={<Add />}
      component={Link}
      to="/anecdotes_new"
      sx={{ mb: 2 }}
    >
      Create Anecdote
    </Button>

    <Stack spacing={2}>
      {anecdotes.map(anecdote => (
        <Card key={anecdote.id} variant="outlined">
          <CardContent>
            <Typography variant="h6">{anecdote.content}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              startIcon={<Visibility />}
              component={Link}
              to={`/anecdotes/${anecdote.id}`}
            >
              See anecdote
            </Button>
            <Button
              size="small"
              color="secondary"
              startIcon={<ThumbUp />}
              onClick={() => vote(anecdote.id)}
            >
              Vote
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  </Container>
)

export default AnecdoteList
