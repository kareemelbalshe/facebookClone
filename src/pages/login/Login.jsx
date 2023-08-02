import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Kareem social</h3>
          <span className="logoDesc">
            Connect with friends and the world around you on Kareem social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text"className="loginInput" name="" id=""placeholder="Email" />
            <input type="text"className="loginInput" name="" id=""placeholder="password" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRigsterButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
