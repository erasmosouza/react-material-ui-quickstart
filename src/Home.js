import React from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/LockOpen';
import Input from './components/Input'
import Navbar from './components/NavBar'
import MiniDrawer from './components/MiniDrawer'

function Home() {

  return (
    <div>
        <Input
          hintText="E-mail"
          type="text"
        />
        <Input
          hintText="Senha"
          type="password"
        />
        <Button variant="contained" color="secondary">
            <Bookmarks></Bookmarks>
        </Button>
        <Navbar />
        <MiniDrawer >

        </MiniDrawer>


      </div>
  );
}

export default Home;
