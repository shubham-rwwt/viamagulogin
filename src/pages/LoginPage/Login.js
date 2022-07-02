import { useState, useEffect } from 'react'
import './Login.css'
import tree from '../../img/tree.png'
import bg from '../../img/bg.png'
import google from '../../img/google.png'
import fb from '../../img/fb.png'
import amazon from '../../img/amazon.png'

const Login = () => {
  const initialValue = { email: '', password: '' }

  const [formValues, setFromValues] = useState(initialValue)
  const [formErr, setFromErr] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFromValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setFromErr(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isSubmit) {
      setFromValues(initialValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErr])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.email) {
      errors.email = 'The email field is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'Please enter valid email'
    }

    if (!values.password) {
      errors.password = 'The password field is required'
    } else if (values.password.length < 8) {
      errors.password = 'Password must be more than 8 characters'
    }

    return errors
  }

  return (
    <div className="login">
      <main className="formbody">
        <div className="bg">
          <img src={bg} alt="" />
        </div>

        {Object.keys(formErr).length === 0 && isSubmit ? (
          <div
            style={{
              background: 'white',
              height: '50px',
              width: '200px',
              position: 'absolute',
              top: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              color: '#20B716',
            }}
          >
            Signed in successfully
          </div>
        ) : (
          ''
        )}

        <div className="form" action="submit">
          <div className="formsec">
            <nav>
              <img src={amazon} alt="dsf" />
            </nav>

            <div className="formsection">
              <span className="loginhead">Login</span>

              <div className="tree">
                <img src={tree} alt="" />
              </div>

              <form onSubmit={handleSubmit}>
                <div className="inputs">
                  <div className="email" id="child">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="Email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{formErr.email}</p>
                  </div>
                  <div className="password" id="child">
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{formErr.password}</p>
                  </div>
                </div>

                <button className="signinbtn">Sign In</button>
              </form>
              <div className="forgotpass">
                <span>Forgot Password</span>
                <span>New User? Sign Up</span>
              </div>
              <span>or</span>

              <div className="loginbtns">
                <button>
                  <img src={google} alt="" />
                  CONTINUE WITH GOOGLE
                </button>

                <button>
                  <img src={fb} alt="" />
                  CONTINUE WITH FACEBOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
