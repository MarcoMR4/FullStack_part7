import React from 'react'
import { Container, Typography, IconButton } from '@mui/material'
import { Home as HomeIcon, Notes as NotesIcon } from '@mui/icons-material'

const Home = () => (
  <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 4 }}>
    <Typography variant="h2" component="h2" gutterBottom>
      <IconButton color="primary" sx={{ marginRight: 1 }}>
        <HomeIcon />
      </IconButton>
      TKTL Notes App
    </Typography>

    <Typography variant="h5" component="h5" paragraph>
      <IconButton color="secondary" sx={{ marginRight: 1 }}>
        <NotesIcon />
      </IconButton>
      Welcome to your personal notes app. Start adding your notes now!
    </Typography>
  </Container>
)

export default Home
