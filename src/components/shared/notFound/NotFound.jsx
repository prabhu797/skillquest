import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <Stack height='100%' width='100%' justifyContent='center' alignItems='center' spacing={2}>
            <Typography variant="h2">
                Page not found
            </Typography>

            <Button component={Link} to="/home">Go Back</Button>
        </Stack>
    )
}
