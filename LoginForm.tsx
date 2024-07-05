import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import HomeAdmin from '../admin/home/HomeAdmin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
    navigate('/admin');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="container-fluid p-3 my-5 h-custom">
      <div className="row">
        <div className="col-md-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Đăng nhập bằng</p>
            <a className="btn btn-outline-primary btn-floating me-2" href="#!">
              <FaFacebookF />
            </a>
            <a className="btn btn-outline-primary btn-floating me-2" href="#!">
              <FaTwitter />
            </a>
            <a className="btn btn-outline-primary btn-floating me-2" href="#!">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Tài khoản Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Mật khẩu đăng nhập</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#!">Quên mật khẩu?</a>
            </div>
            <div className="text-center text-md-start mt-4 pt-2">
              <button className="btn btn-primary px-5" type="submit">Đăng nhập</button>
              <p className="small fw-bold mt-2 pt-1 mb-2">Bạn chưa có tài khoản? <a href="#!" className="text-danger">Đăng ký</a></p>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary text-white">
        <div className="mb-3 mb-md-0">
          Bạn có thể đăng nhập bằng!
        </div>
        <div>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaFacebookF />
          </a>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaTwitter />
          </a>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaGoogle />
          </a>
          <a className="btn btn-outline-light btn-floating mx-3" href="#!">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<HomeAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;