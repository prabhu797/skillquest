import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from '../components/shared/navbar/Navbar';
import Sidebar from '../components/shared/sidebar/Sidebar';
import { Stack } from '@mui/material';

const Error = lazy(() => import('../components/shared/notFound/Error'));

export default function FullLayout() {
    return (
        <ErrorBoundary fallback={<Error />}>
            <Stack direction="row" height="100vh" width="100vw">
                <Stack
                    width="20%"
                    spacing={2}
                >
                    <Sidebar />
                </Stack>

                <Stack flexGrow={1}>
                    <Navbar />
                    <Stack flexGrow={1} padding={2}>
                        <Outlet />
                    </Stack>
                </Stack>
            </Stack>
        </ErrorBoundary>
    );
}
