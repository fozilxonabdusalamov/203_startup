import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building2,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "worker", // 'worker' or 'employer'
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email manzil kiritish majburiy";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email manzil noto'g'ri formatda";
    }

    if (!formData.password) {
      newErrors.password = "Parol kiritish majburiy";
    } else if (formData.password.length < 6) {
      newErrors.password = "Parol kamida 6 ta belgidan iborat bo'lishi kerak";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect based on user type
      if (formData.userType === "worker") {
        window.location.href = "/w/dashboard";
      } else {
        window.location.href = "/e/dashboard";
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Panel - Form */}
        <div className="login-form-panel">
          <div className="login-form-container">
            {/* Header */}
            <div className="login-header">
              <Link to="/" className="login-logo">
                <div className="logo-container">
                  <span className="logo-icon">🔗</span>
                  <span className="logo-text">JobLink</span>
                </div>
              </Link>
              <div className="login-title">
                <h1>Xush kelibsiz</h1>
                <p>Hisobingizga kiring va ishni davom eting</p>
              </div>
            </div>

            {/* User Type Selection */}
            <div className="user-type-selection">
              <div className="user-type-buttons">
                <button
                  type="button"
                  className={`user-type-btn ${
                    formData.userType === "worker" ? "active" : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, userType: "worker" }))
                  }
                >
                  <User size={20} />
                  <span>Ishchi</span>
                </button>
                <button
                  type="button"
                  className={`user-type-btn ${
                    formData.userType === "employer" ? "active" : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, userType: "employer" }))
                  }
                >
                  <Building2 size={20} />
                  <span>Ish beruvchi</span>
                </button>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="login-form" noValidate>
              <div className="form-group">
                <label className="form-label">
                  <Mail size={18} />
                  Email manzil
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="sizning@email.uz"
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Lock size={18} />
                  Parol
                </label>
                <div className="input-wrapper password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-input ${errors.password ? "error" : ""}`}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkbox-custom"></span>
                  Meni eslab qol
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Parolni unutdingizmi?
                </Link>
              </div>

              <button
                type="submit"
                className={`login-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    Kirish
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <span>yoki</span>
            </div>

            {/* Social Login */}
            <div className="social-login">
              <button className="social-btn google">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#4285f4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34a853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#fbbc05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#ea4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google bilan kirish
              </button>
            </div>

            {/* Register Link */}
            <div className="register-link">
              <p>
                Akkauntingiz yo'qmi?{" "}
                <Link to="/register">
                  Ro'yxatdan o'tish
                  <ArrowRight size={16} />
                </Link>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <Shield size={16} />
                <span>256-bit SSL himoyasi</span>
              </div>
              <div className="trust-item">
                <Star size={16} />
                <span>25,000+ foydalanuvchi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Visual Content */}
        <div className="login-visual-panel">
          <div className="visual-content">
            <div className="visual-header">
              <h2>O'zbekistonning #1 ish izlash platformasi</h2>
              <p>Minglab mavsumiy ish va ishonchli ish beruvchilar</p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">25K+</div>
                <div className="stat-label">Faol ishchi</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5K+</div>
                <div className="stat-label">Ish beruvchi</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Muvaffaqiyat</div>
              </div>
            </div>

            <div className="visual-features">
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <h4>Xavfsiz to'lovlar</h4>
                  <p>Barcha to'lovlar himoyalangan</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h4>Tez ish topish</h4>
                  <p>24 soat ichida javob oling</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-text">
                  <h4>To'g'ri ish</h4>
                  <p>AI yordamida eng mos ishlar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
