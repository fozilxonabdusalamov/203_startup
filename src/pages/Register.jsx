import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Building2, ArrowRight, Shield, Star, Phone, MapPin, CheckCircle } from 'lucide-react';
import './Register.css';

import JobLinkLogo from '../components/JobLinkLogo';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    userType: 'worker', // 'worker' or 'employer'
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Step 2 - Location & Details
    region: '',
    district: '',
    
    // Worker specific
    specialization: '',
    experience: '',
    skills: [],
    
    // Employer specific
    companyName: '',
    industry: '',
    companySize: '',
    
    // Step 3 - Terms
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToMarketing: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const regions = [
    'Toshkent shahri', 'Toshkent viloyati', 'Andijon viloyati', 'Buxoro viloyati',
    'Farg\'ona viloyati', 'Jizzax viloyati', 'Xorazm viloyati', 'Namangan viloyati',
    'Navoiy viloyati', 'Qashqadaryo viloyati', 'Qoraqalpog\'iston Respublikasi',
    'Samarqand viloyati', 'Sirdaryo viloyati', 'Surxondaryo viloyati'
  ];

  const workerSpecializations = [
    'Qishloq xo\'jaligi', 'Qurilish', 'Turizm', 'Tekstil', 'Transport',
    'Ovqat xizmati', 'Uy xizmati', 'Sanoat', 'Savdo'
  ];

  const employerIndustries = [
    'Qishloq xo\'jaligi', 'Qurilish', 'Sanoat', 'Turizm', 'Transport',
    'Tekstil', 'Ovqat sanoati', 'Xizmat ko\'rsatish', 'Savdo'
  ];

  const companySizes = [
    '1-10 xodim', '11-50 xodim', '51-200 xodim', '201-500 xodim', '500+ xodim'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Ism kiritish majburiy';
    if (!formData.lastName.trim()) newErrors.lastName = 'Familiya kiritish majburiy';
    
    if (!formData.email) {
      newErrors.email = 'Email manzil kiritish majburiy';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email manzil noto\'g\'ri formatda';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Telefon raqam kiritish majburiy';
    } else if (!/^[+]?[0-9\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Telefon raqam noto\'g\'ri formatda';
    }
    
    if (!formData.password) {
      newErrors.password = 'Parol kiritish majburiy';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Parol kamida 8 ta belgidan iborat bo\'lishi kerak';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Parolni tasdiqlash majburiy';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Parollar mos kelmaydi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.region) newErrors.region = 'Viloyat tanlash majburiy';
    if (!formData.district) newErrors.district = 'Tuman kiritish majburiy';
    
    if (formData.userType === 'worker') {
      if (!formData.specialization) newErrors.specialization = 'Ixtisoslik tanlash majburiy';
      if (!formData.experience) newErrors.experience = 'Tajriba tanlash majburiy';
    } else {
      if (!formData.companyName) newErrors.companyName = 'Kompaniya nomi kiritish majburiy';
      if (!formData.industry) newErrors.industry = 'Soha tanlash majburiy';
      if (!formData.companySize) newErrors.companySize = 'Kompaniya hajmi tanlash majburiy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Foydalanish shartlariga rozilik majburiy';
    }
    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = 'Maxfiylik siyosatiga rozilik majburiy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (step === 1) {
      isValid = validateStep1();
    } else if (step === 2) {
      isValid = validateStep2();
    }
    
    if (isValid && step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep3()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to login or dashboard
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: "🎯",
      title: "Tez ish topish",
      desc: "24 soat ichida mos ish toping"
    },
    {
      icon: "🛡️",
      title: "Xavfsiz to'lovlar",
      desc: "Barcha to'lovlar kafolatlangan"
    },
    {
      icon: "⭐",
      title: "Yuqori reyting",
      desc: "Sifatli ish uchun yuqori baho"
    },
    {
      icon: "📱",
      title: "24/7 qo'llab-quvvatlash",
      desc: "Har doim yordam berishga tayyormiz"
    }
  ];

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Panel - Form */}
        <div className="register-form-panel">
          <div className="register-form-container">
            {/* Header */}
            <div className="register-header">
              <Link to="/" className="register-logo">
                <JobLinkLogo className="w-24 h-8 mb-4" />
              </Link>
              
              <div className="register-title">
                <h1>Ro'yxatdan o'tish</h1>
                <p>O'zbekiston ish bozorida o'z o'rningizni toping</p>
              </div>

              {/* Progress Steps */}
              <div className="progress-steps">
                <div className="steps-container">
                  {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="step-item">
                      <div className={`step-circle ${step >= stepNumber ? 'active' : ''}`}>
                        {step > stepNumber ? <CheckCircle size={16} /> : stepNumber}
                      </div>
                      {stepNumber < 3 && <div className={`step-line ${step > stepNumber ? 'active' : ''}`}></div>}
                    </div>
                  ))}
                </div>
                <div className="step-labels">
                  <span className={step === 1 ? 'active' : ''}>Asosiy</span>
                  <span className={step === 2 ? 'active' : ''}>Batafsil</span>
                  <span className={step === 3 ? 'active' : ''}>Yakunlash</span>
                </div>
              </div>
            </div>

            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="form-step">
                {/* User Type Selection */}
                <div className="user-type-selection">
                  <div className="user-type-buttons">
                    <button
                      type="button"
                      className={`user-type-btn ${formData.userType === 'worker' ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, userType: 'worker' }))}
                    >
                      <User size={20} />
                      <span>Ishchi</span>
                    </button>
                    <button
                      type="button"
                      className={`user-type-btn ${formData.userType === 'employer' ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, userType: 'employer' }))}
                    >
                      <Building2 size={20} />
                      <span>Ish beruvchi</span>
                    </button>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      Ism
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="Ismingiz"
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      Familiya
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Familiyangiz"
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Mail size={16} />
                    Email manzil
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="sizning@email.uz"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone size={16} />
                    Telefon raqam
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+998 90 123 45 67"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <Lock size={16} />
                      Parol
                    </label>
                    <div className="input-wrapper password-wrapper">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-input ${errors.password ? 'error' : ''}`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Lock size={16} />
                      Parolni tasdiqlash
                    </label>
                    <div className="input-wrapper password-wrapper">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>
                </div>

                <button type="button" onClick={handleNext} className="next-btn">
                  Keyingi qadam
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="form-step">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <MapPin size={16} />
                      Viloyat
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className={`form-input ${errors.region ? 'error' : ''}`}
                    >
                      <option value="">Viloyatni tanlang</option>
                      {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                    {errors.region && <span className="error-message">{errors.region}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MapPin size={16} />
                      Tuman/Shahar
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`form-input ${errors.district ? 'error' : ''}`}
                      placeholder="Tuman yoki shahar"
                    />
                    {errors.district && <span className="error-message">{errors.district}</span>}
                  </div>
                </div>

                {formData.userType === 'worker' ? (
                  <>
                    <div className="form-group">
                      <label className="form-label">
                        🎯 Ixtisoslik
                      </label>
                      <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className={`form-input ${errors.specialization ? 'error' : ''}`}
                      >
                        <option value="">Ixtisoslikni tanlang</option>
                        {workerSpecializations.map(spec => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
                      </select>
                      {errors.specialization && <span className="error-message">{errors.specialization}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        💼 Tajriba
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`form-input ${errors.experience ? 'error' : ''}`}
                      >
                        <option value="">Tajribani tanlang</option>
                        <option value="Yangi boshlovchi">Yangi boshlovchi</option>
                        <option value="1 yil">1 yil</option>
                        <option value="2-3 yil">2-3 yil</option>
                        <option value="3-5 yil">3-5 yil</option>
                        <option value="5+ yil">5+ yil</option>
                      </select>
                      {errors.experience && <span className="error-message">{errors.experience}</span>}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label className="form-label">
                        🏢 Kompaniya nomi
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`form-input ${errors.companyName ? 'error' : ''}`}
                        placeholder="Kompaniya yoki fermer xo'jalik nomi"
                      />
                      {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        🏭 Faoliyat sohasi
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={`form-input ${errors.industry ? 'error' : ''}`}
                      >
                        <option value="">Sohani tanlang</option>
                        {employerIndustries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                      {errors.industry && <span className="error-message">{errors.industry}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        👥 Kompaniya hajmi
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className={`form-input ${errors.companySize ? 'error' : ''}`}
                      >
                        <option value="">Hajmni tanlang</option>
                        {companySizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      {errors.companySize && <span className="error-message">{errors.companySize}</span>}
                    </div>
                  </>
                )}

                <div className="step-buttons">
                  <button type="button" onClick={handleBack} className="back-btn">
                    Orqaga
                  </button>
                  <button type="button" onClick={handleNext} className="next-btn">
                    Keyingi qadam
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Terms & Conditions */}
            {step === 3 && (
              <div className="form-step">
                <div className="terms-section">
                  <h3>Shartlar va maxfiylik</h3>
                  <p>Ro'yxatdan o'tish uchun quyidagi shartlarga rozilik bering:</p>

                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                      />
                      <span className="checkbox-custom"></span>
                      <span>
                        <Link to="/terms" target="_blank">Foydalanish shartlari</Link>ga roziman
                      </span>
                    </label>
                    {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
                  </div>

                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onChange={handleChange}
                      />
                      <span className="checkbox-custom"></span>
                      <span>
                        <Link to="/privacy" target="_blank">Maxfiylik siyosati</Link>ga roziman
                      </span>
                    </label>
                    {errors.agreeToPrivacy && <span className="error-message">{errors.agreeToPrivacy}</span>}
                  </div>

                  <div className="checkbox-group">
                    <label className="checkbox-label optional">
                      <input
                        type="checkbox"
                        name="agreeToMarketing"
                        checked={formData.agreeToMarketing}
                        onChange={handleChange}
                      />
                      <span className="checkbox-custom"></span>
                      <span>Yangi ish e'lonlari va marketing xabarlarini olish (ixtiyoriy)</span>
                    </label>
                  </div>
                </div>

                <div className="step-buttons">
                  <button type="button" onClick={handleBack} className="back-btn">
                    Orqaga
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`submit-btn ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <>
                        Ro'yxatdan o'tish
                        <CheckCircle size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Login Link */}
            <div className="login-link">
              <p>
                Akkauntingiz bormi?{' '}
                <Link to="/login">
                  Kirish
                  <ArrowRight size={16} />
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Benefits */}
        <div className="register-visual-panel">
          <div className="visual-content">
            <div className="visual-header">
              <h2>O'zbekistonning eng ishonchli ish platformasi</h2>
              <p>Minglab ish imkoniyatlari va professional rivojlanish</p>
            </div>

            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="success-stats">
              <div className="stat-item">
                <div className="stat-number">25,000+</div>
                <div className="stat-label">Faol foydalanuvchi</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Muvaffaqiyat darajasi</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Foydalanuvchi baholovi</div>
              </div>
            </div>

            <div className="trust-section">
              <h3>Bizga ishonch bildirgan kompaniyalar</h3>
              <div className="company-logos">
                <div className="company-logo">🏭</div>
                <div className="company-logo">🌾</div>
                <div className="company-logo">🏗️</div>
                <div className="company-logo">🚛</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
