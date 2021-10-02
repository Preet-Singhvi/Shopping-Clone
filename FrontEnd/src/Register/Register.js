import { useState } from "react"
import "./Register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

 const history = useHistory()

  const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
    })
  }
  const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/")
            })
        } else {
            alert("invalid input")
        }
        
    }

   return (  
        <div className="title">
          <div className="logo">
            <img src="Amazon_Logo.png" alt="Amazon Logo" /> 
          </div>
          <div className="create-form">
          <div className="sign-up">
            <form className="form">
              <h3>Create Account</h3>
              <label >Your Name</label>
              <br />
              <input type="text" name="name" value={user.name}  onChange={ handleChange }/>
              <label >Email</label>
              <br />
              <input  type="email" name="email" value={user.email}  onChange={ handleChange }/>
              <label >Password</label>
              <br />
              <input  type="password" name="password"  value={user.password}  onChange={ handleChange }/>
              <br />
              <label >Re-Enter Password</label>
              <br />
              <input type="password" name="reEnterPassword"  value={user.reEnterPassword}  onChange={ handleChange }/>
              <div className="image">
                <img src="info_i.png" alt="" />
                <h6>Passwords must be at least 6 characters.</h6>
              </div>
              <div className="info">
                <h5>We will send you a text to verify your phone.</h5>
                <h5 className="message">Message and Data rates may apply.</h5>
              </div>
              <button className="submit" type="button" onClick={register}>Register</button>
            </form>
            <div className="account">
              <h5>Already have an account?</h5>
              <a className="sign-in" href="/">Sign in</a>
            </div>              
            <div className="business">
              <h5>Buying for work?</h5>
              <a className="business-account" href="/register">Create a free business account</a>
            </div>
          </div>
          </div>
          <div className="third">
        <div className="condition">
          <a href="/register">Condition Of Use</a></div>
        <div className="privacy">
          <a href="/register">Privacy Notice</a></div>
        <div className="help">
          <a href="/register">Help</a>    
        </div>
      </div>
        <h5 className="fourth">© 1996-2021, Amazon.com, Inc. or its affiliates</h5>
        </div>    
    );
  }
 
export default Register;
