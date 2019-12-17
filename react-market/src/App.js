import React from 'react';
import Header from "./components/Header/Header"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <Container maxWidth="xl">
      <Header/>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>

    </div>
  );
}

export default App;
