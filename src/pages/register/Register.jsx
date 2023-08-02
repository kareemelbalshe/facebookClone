import "./register.css"

export default function Register() {
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
            <input type="text"className="loginInput" name="" id=""placeholder="Username" />
            <input type="text"className="loginInput" name="" id=""placeholder="Email" />
            <input type="text"className="loginInput" name="" id=""placeholder="Password Again" />
            <input type="text"className="loginInput" name="" id=""placeholder="Password Again" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRigsterButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
