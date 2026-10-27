import React, { useState } from "react";
import { Link } from "react-router-dom";
function Register({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setMessage("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Mật khẩu không khớp!");
      return;
    }

    // Tạo object người dùng mới
    const user = {
      username: username,
      email: email,
    };

    // Lấy danh sách người dùng cũ
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Thêm người dùng mới
    users.push(user);

    // Lưu danh sách vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Đăng ký thành công!");

    // Xóa dữ liệu trên form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const inputStyle =
    "w-full border border-pink-200 bg-pink-50/50 rounded-xl px-4 py-3 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-7">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🌸</span>
          </div>

          <h1 className="text-3xl font-bold text-pink-600">Create Account</h1>

          <p className="text-gray-400 text-sm mt-2">
            Join us and create your account
          </p>
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={inputStyle}
          />
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
        <div className="mb-4">
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

        {/* Confirm Password */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* Thông báo */}
        {message && (
          <p className="text-center text-sm mb-4 text-pink-600">{message}</p>
        )}

        {/* Nút đăng ký */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 hover:shadow-lg transition-all duration-300"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?
          <Link
            to="/login"
            className="text-pink-500 font-semibold ml-1 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
