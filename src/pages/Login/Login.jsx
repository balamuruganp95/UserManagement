import React from 'react'
import Button from '../../components/Button/Button'
import Typography from '../../components/Typography/Typography';
import { Link } from 'react-router-dom';
const Login = () => {
  
  return (
    <>
    {/* <Button variant="primary" >Login</Button>
    <Button variant="danger" >Delete</Button> */}

    
    <Typography variant="h1" >Login Page</Typography>
    
    <div>
    <Typography variant="label" htmlFor="username">UserName </Typography>
    <Typography variant="input" type="text" id="username" ></Typography>
    </div>

    <div>
      <Typography variant="label" htmlFor="password" >Password </Typography>
      <Typography variant="input" type="password" id="password" ></Typography>
    </div>

    <Button variant="primary" >Login</Button>

    <Link to="forget-password" > Forget Password </Link>
    
      <br /><br /><br />
    <Typography variant="small">
      Changepond @2026
    </Typography>

    {/* <Typography variant="span" title="Company name">
    Changepond
    </Typography>   */}
      


    </>
  )
}

export default Login