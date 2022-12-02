import { useContext,} from 'react';
import Head from 'next/head';
import { Box, Button, Checkbox, Container, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link'
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Store } from '../utils/Store';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setrememberMe] = useState(false);
  const {state, dispatch} = useContext(Store);
  const url = 'http://localhost:8000/api/auth/login/';
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit =async(e)=>{
      e.preventDefault();
      console.log(email, password)
       await axios.post(url, {email:email, password:password}, {
        headers: {
        'Content-Type': 'application/json',
        'cb-client-api-key': '6df22a6a-c971-493f-9161-6ecfc72ddc35'
         },
      }).then((response) => {
         console.log(response.data)
         dispatch({type:'USER_LOGIN', payload:response.data});
         router.push('/home')
        }).catch((error) => {
        console.log(error)
    })
  }
  return (
    <>
      <Head>
        <title>Login </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                variant="h4"
              >
                Login
              </Typography>
             
            </Box>
            <Typography
             variant="caption"
             color='text.secondary'
            >
              Email 
            </Typography>
            <TextField
              color="info"
              fullWidth
              name="email"
              placeholder="Enter Your Email"
              onChange={(e)=>setemail(e.target.value)}
              value={email}
              variant="outlined"
            />
              <Typography
              sx={{
                color:'text.secondary',
                variant:'caption',
                mt:3
              }}
            >
              Password
            </Typography>
            <TextField
              color="info"
              fullWidth
              name="password"
              placeholder="Enter Your Password"
              onChange={(e)=>setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              value={password}
              variant="outlined"
              InputProps={{
                endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                // alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                ml: -1,
                mb:2,
              }}
            >
              <Box sx={{alignItems: 'center', display: 'flex'}}>
              <Checkbox
                checked={rememberMe}
                name="rememberme"
                onChange={(e)=>setrememberMe(!rememberMe)}
              />
              <Typography
                color="text.secondary"
                // variant="caption"
                variant="body2"
              >
                Remember my email
              </Typography>
                </Box>
              <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    underline="none"
                    // variant="caption"
                    variant="body2"
                  >
                    Forget Password?
                  </Link>
                </NextLink>
            </Box>
            <Box sx={{ py: 1 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                // onSubmit={submitHandler}
                variant="contained"
                // onSubmit={formik.handleSubmit}
              >
                Submit
              </Button>
            </Box>
           
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ py: 2, }}
              align='center'
            >
              Don&apos;t have an account yet?
              {' '}
            </Typography>
            <Button
                color="info"
                fullWidth
                size="large"
                variant="contained"
              >
                Create Account
              </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
