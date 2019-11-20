import React            from 'react';
import Button           from '@material-ui/core/Button';
import { makeStyles }   from '@material-ui/core/styles';
import VpnKeyIcon       from '@material-ui/icons/VpnKey';
import TextField        from '@material-ui/core/TextField';
import InputAdornment   from '@material-ui/core/InputAdornment';
import AccountCircle    from '@material-ui/icons/AccountCircle';
import AppBar           from '@material-ui/core/AppBar';

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

        <div 
            style={{
            display: "flex",
            justifyContent: "center",
            margin: 20,
            padding: 20
            }}>
        
        <form style={{ width: "50%" }}>
          <h1>Seja bem vindo</h1>
          

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
        
            <Button variant="contained" color="primary" onClick={() => { console.log('Parabens!'); }}>
                <VpnKeyIcon></VpnKeyIcon>
            </Button>
            </form>
        </div>
    </div>
  );
}

export default Login;
