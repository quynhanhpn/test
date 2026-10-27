import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Vui lòng nhập đầy đủ thông tin!");
      setSuccess(false);
      return;
    }

    // Lấy danh sách người dùng đã đăng ký
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Tìm tài khoản theo email
    const user = users.find((item) => item.email === email);

    if (user) {
      setMessage("Tìm thấy tài khoản! Email đã được đăng ký.");
      setSuccess(true);
    } else {
      setMessage("Email chưa được đăng ký!");
      setSuccess(false);
    }
  };

  const inputStyle =
    "w-full border border-pink-200 bg-pink-50/50 rounded-xl px-4 py-3 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-7">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🌸</span>
          </div>

          <h1 className="text-3xl font-bold text-pink-600">Welcome Back</h1>

          <p className="text-gray-400 text-sm mt-2">Login to your account</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* Thông báo */}
        {message && (
          <p
            className={`text-center text-sm mb-4 ${
              success ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Nút Login */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 hover:shadow-lg transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-400 mt-5">
          Don't have an account?
          <Link
            to="/"
            className="text-pink-500 font-semibold ml-1 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
