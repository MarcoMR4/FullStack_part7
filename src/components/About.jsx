import React from 'react'
import { Typography, Container, Paper, IconButton } from '@mui/material'
import { Info as InfoIcon } from '@mui/icons-material'

const About = () => (
  <Container maxWidth="md" sx={{ marginTop: 4 }}>
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        About Anecdote App
      </Typography>

      <Typography variant="body1" paragraph>
        <IconButton color="primary" sx={{ marginRight: 1 }}>
          <InfoIcon />
        </IconButton>
        According to Wikipedia:
      </Typography>

      <Typography variant="body2" paragraph>
        <em>
          An anecdote is a brief, revealing account of an individual person or an incident.
          Occasionally humorous, anecdotes differ from jokes because their primary purpose is not
          simply to provoke laughter but to reveal a truth more general than the brief tale itself,
          such as to characterize a person by delineating a specific quirk or trait, to communicate
          an abstract idea about a person, place, or thing through the concrete details of a short
          narrative. An anecdote is "a story with a point."
        </em>
      </Typography>

      <Typography variant="body1" paragraph>
        Software engineering is full of excellent anecdotes. At this app, you can find the best and
        add more.
      </Typography>
    </Paper>
  </Container>
)

export default About
