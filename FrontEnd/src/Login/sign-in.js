import { Link } from "react-router-dom";
import { useState } from "react";
import './sign-in.css';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Sign_In = ({setLoginUser}) => {

    const history = useHistory()

  const [ user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = e => {
    const { name, value } = e.target
      setUser({
        ...user,
        [name]: value
      })
  }

 const login = () => {
        axios.post("http://localhost:9002", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/home")
        })
    }

  return (    
    <div className="title">
      <div className="first">
          <img src="Amazon_Logo.png" alt="Amazon Logo" /> 
      </div>
      <div className="sign">        
      <div className="sign-in">
        <form className="form-1"  action="/password">
          <h1>Sign-In</h1>
          <label>Email </label>
          <br />
          <input type="email" name="email"  value={user.email}  onChange={ handleChange }/>
          <br />
          <label >Password</label>
          <br />
          <input type="password"  name="password" value={user.password}  onChange={ handleChange }/>
          <button className="sub" type="button" onClick={login}>Continue</button>
          <p className="para">By continuing, you agree to Amazon's <a href="/">Conditions Of Use</a> and <a href="/">Privacy Notice.</a></p>
        </form>
      </div>
      </div>
      <div className="second">
        <h4>New To Amazon?</h4>  
         <div className="link">
        <Link to="/register" className="app-link">Create Your Amazon Account</Link>
         </div>
      </div>
      <div className="app-third">
        <div className="app-condition">
          <a href="/">Condition Of Use</a>
        </div>
        <div className="app-privacy">
          <a href="/">Privacy Notice</a>
        </div>
        <div className="app-help">
          <a href="/">Help</a>    
        </div>
      </div>
        <h5 className="app-fourth">© 1996-2021, Amazon.com, Inc. or its affiliates</h5>
    </div>    
  );
}
 
export default Sign_In;