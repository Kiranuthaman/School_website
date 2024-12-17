import './Login.css';

const Login =()=>{
    const registerLink=()=>{
        setAction(' active');
    }
   
    const universalStyles = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        
      };
    
    return(
        <div style={universalStyles}>
        <div className='wrapper'>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    {/* <div className='input-box'>
                        <input type="email" placeholder='Email' required/>
                    </div> */}
                    
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required/>
                    </div>
                    {/* <div className='input-box'>
                        <input type="password" placeholder='ConfirmPassword' required/>
                    </div> */}
                    <div className='remember-forgot'>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account?<a href='#' onClick={registerLink}> Register</a></p>

                    </div>

                </form>
            </div>

        </div>
        </div>
    )
}
  

export default Login