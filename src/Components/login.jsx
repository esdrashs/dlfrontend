import React, { useState, useContext } from "react";
import './css/styles.css'; //imports local css
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { login } from "../api/auth.ts";
import Nav from "./nav.jsx";


const Login = () => {
    const navigate = useNavigate();
    const { setActiveUser } = useContext(GlobalContext);
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    //Nav.setIsDarkBackground(false);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setIsLoading(true);
  
      const result = await login(formData);
      
      if (result.success) {
        setActiveUser(result.data.user);
        setError('Welcome back ' + result.data.user.email + '!');
        setTimeout(() => {
          navigate('/management');
        }, 1000);
      } else {
        setError(result.error || 'Login failed');
      }
      
      setIsLoading(false);
      
    }

  return (
    <div>
      <Nav/>
      <header className="masthead" style={{ minHeight: '100vh' }}>
        <div className="container px-4 px-lg-5 h-100 d-flex align-items-center justify-content-center">
          <div className="row justify-content-center w-100">
            <div className="col-lg-4 col-md-6 col-sm-8">
              {/* Page Title */}
              <div className="text-center mb-4">
                <h3 className="text-white mt-0 mb-3">Members Login</h3>
                <hr className="divider" style={{ maxWidth: '150px', margin: '0 auto' }} />
              </div>

              {/* Login Form Container */}
              <div className="card shadow-sm" style={{ borderRadius: '8px', border: 'none' }}>
                <div className="card-body p-4">
                  {/* Social Login Buttons */}
                  <div className="mb-4">
                    <div className="d-grid gap-2">
                      <button type="button" className="btn btn-outline-danger" style={{ borderRadius: '6px' }}>
                        <i className="bi bi-google me-2"></i>Use Google Account
                      </button>
                      <button type="button" className="btn btn-outline-primary" style={{ borderRadius: '6px' }}>
                        <i className="bi bi-facebook me-2"></i>Use Facebook
                      </button>
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <small className="text-muted">or</small>
                  </div>

                  <form method="post" id="frmlogin" onSubmit={handleSubmit}>
                    {error && (
                      <div className="rounded-md bg-red-50 p-4">
                        <div className="text-sm font-medium text-red-800">{error}</div>
                      </div>
                    )}
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="txtEmail"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="txtPassword"
                        name="password"
                        placeholder="Your Password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="d-grid mb-3">
                      <button type="submit" className="btn btn-primary" style={{ borderRadius: '6px' }}>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                      </button>
                    </div>
                    <div className="text-center">
                      <small>
                        <a href="#" className="text-primary" style={{ textDecoration: 'underline' }}>
                          Lost your password?
                        </a>
                      </small>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                          Sign up
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              <div className="mt-4">
                {/* Login Form Container <p className="text-muted text-center small" style={{ maxWidth: '100%', margin: '0 auto' }}>
                  To become a member, you need to purchase at least one template or a Premium plan. After your payment is complete, we'll automatically create an account with your email so you can log in and start building or downloading right away!
                </p>*/}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;
