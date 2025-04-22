import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '../components/breadcrumb';


const routes = [
    { name: 'Home', path: '/' },
    { name: 'Introduction', path: '/Introduction' },
    // 其他路由...
]

export default function Home() {
    return (
        <React.Fragment>
            <Breadcrumbs routes={routes}/>
        <CssBaseline /> 
        <Container maxWidth="lg">
            <Typography variant="h5" component="h1" gutterBottom>
                Welcome to the My Home Page
            </Typography>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
    );
}