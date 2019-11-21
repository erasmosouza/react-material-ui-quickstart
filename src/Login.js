import React            from 'react';
import Button           from '@material-ui/core/Button';
import { makeStyles }   from '@material-ui/core/styles';
import VpnKeyIcon       from '@material-ui/icons/VpnKey';
import TextField        from '@material-ui/core/TextField';
import InputAdornment   from '@material-ui/core/InputAdornment';
import AccountCircle    from '@material-ui/icons/AccountCircle';
import AppBar           from '@material-ui/core/AppBar';
import Box              from '@material-ui/core/Box';
import Link             from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function Login() {
    const classes = useStyles();

  return (
    <div>
        
        <AppBar color="primary" position="static">
          <h1>Minha Empresa</h1>
        </AppBar>

        <Box style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
          <Box>
            <h1>Seja bem vindo</h1>
          </Box>
          <Box>
            <TextField
                className={classes.margin}
                id="input-login"
                label="Usuário"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
                />
                
          </Box>
          <Box>
            <TextField
                className={classes.margin}
                type="password"
                id="input-password"
                label="Senha"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
                />
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={() => { console.log('Parabens!'); }}>
                <VpnKeyIcon></VpnKeyIcon>
            </Button>
          </Box>
          <Box>
          <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Esqueci minha Senha
            </Link>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Cadastro
            </Link>
          </Box>

      </Box>

    </div>
  );
}

export default Login;
