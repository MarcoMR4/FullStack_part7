import { useResource } from "../hooks"
import { useField } from "../hooks"
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Grid
} from "@mui/material"
import { Person, Phone, Save } from "@mui/icons-material"

const People = () => {
  const [people, peopleService] = useResource('http://localhost:3005/people')
  const nameFull = useField('text')
  const numberFull = useField('text')

  const { reset: resetName, ...name } = nameFull
  const { reset: resetNumber, ...number } = numberFull

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    peopleService.create({ name: name.value, number: number.value })
      .then((person) => {
        people.concat(person) // para que se vea el cambio, lo ideal es actualizar un estado
        resetName()
        resetNumber()
      })
      .catch((error) => console.log(error))
  }

  return (
    <Container maxWidth="sm" className="mt-4">
      <Typography variant="h4" gutterBottom>📇 People List</Typography>

      <form onSubmit={handlePersonSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            InputProps={{
              startAdornment: <Person color="primary" sx={{ mr: 1 }} />
            }}
            {...name}
          />
          <TextField
            label="Phone number"
            variant="outlined"
            InputProps={{
              startAdornment: <Phone color="secondary" sx={{ mr: 1 }} />
            }}
            {...number}
          />
          <Button
            type="submit"
            variant="contained"
            startIcon={<Save />}
            color="success"
          >
            Save Contact
          </Button>
        </Stack>
      </form>

      <div className="mt-4">
        <Typography variant="h6" gutterBottom>Saved Contacts:</Typography>
        <Grid container spacing={2}>
          {people.map(p => (
            <Grid item xs={12} sm={6} key={p.id}>
              <Card variant="outlined">
                <CardHeader
                  avatar={
                    <Avatar>
                      <Person />
                    </Avatar>
                  }
                  title={p.name}
                  subheader={`📞 ${p.number}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default People
