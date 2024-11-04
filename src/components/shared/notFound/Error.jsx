import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Error() {

  const navigate = useNavigate();

  const handleError = () => {
    navigate('/home');
    window.location.reload();
  }

  return (
    <Stack height='100%' width='100%' justifyContent='center' alignItems='center' spacing={2}>
      <Typography variant="h2">
        Something went wrong
      </Typography>

      <Button onClick={handleError}>Go Back</Button>
    </Stack>
  )
}
