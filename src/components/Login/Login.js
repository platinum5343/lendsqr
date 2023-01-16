import { useRef, useState, useEffect} from 'react';
import css from './Login.module.css';

import Union from '../../assets/Union.png'

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
}
    
return (
    
    
    
    
    
    <div className={css.container}>
    {success ? (
        <section>
        <h1>you are logged in</h1>
        <br />
        <p>
        <a href='#'>Go to home</a>
        </p>
        </section>
        ) : (
        <div  >   
   <div className={css.logged}>
   <div className={css.unionn}>
        <div>
        <img src={Union} alt="" />
        </div>
        <div>
        <h1>lendsqr</h1>
        </div>
</div>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} arai-live="assertive">{errMsg}</p>
      <div>
   <h1>Welcome!</h1>
   <p>Enter details to login.</p>
   </div>
   <form onSubmit={handleSubmit}>
   <div>
   <label htmlFor='username'></label>
   <input
    className={css.form}
   placeholder='Email'
   type='text'
   id="username"
   ref={userRef}
   autoComplete="off"
   onChange={(e) => setUser(e.target.value)}
   value={user}
   required
   />
</div>
<div>
   <label htmlFor='password'></label>
   <input
    className={css.form}
   id="password"
   placeholder='password'
   onChange={(e) => setPwd(e.target.value)}
   value={pwd}
   required
   />
   </div>
   <h5>forgot password?</h5>
   <button className={css.login}>Log in</button>
   </form>
   </div>
   
    </div>
   )}
    </div>
  )
}

export default Login