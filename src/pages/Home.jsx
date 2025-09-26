import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Briefcase,
  Users,
  TrendingUp,
  Star,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Zap,
  Heart,
  Target,
  Sparkles,
  Calendar,
  DollarSign,
  MapIcon,
  UserCheck,
} from "lucide-react";
import "./Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/seasonal-jobs?q=${encodeURIComponent(
      searchQuery
    )}&location=${encodeURIComponent(location)}`;
  };

  const stats = [
    {
      number: "25,000+",
      label: "Mavsumiy Ishchilar",
      icon: Users,
      color: "var(--primary)",
    },
    {
      number: "5,000+",
      label: "Fermer Xo'jaliklari",
      icon: Briefcase,
      color: "var(--feature-accent)",
    },
    {
      number: "150,000+",
      label: "Muvaffaqiyatli Ish",
      icon: CheckCircle,
      color: "var(--warning)",
    },
    {
      number: "95%",
      label: "Mijoz Mamnunligi",
      icon: Heart,
      color: "var(--error)",
    },
  ];

  const seasonalCategories = [
    {
      name: "Paxta Terib Olish",
      count: "8,500+",
      color: "var(--success)",
      icon: "🌾",
      season: "Kuz",
      salary: "150-200k/kun",
      duration: "3-4 oy",
    },
    {
      name: "Meva Yig'ib Olish",
      count: "4,200+",
      color: "var(--warning)",
      icon: "🍎",
      season: "Yoz-Kuz",
      salary: "120-180k/kun",
      duration: "2-3 oy",
    },
    {
      name: "Poliz Ekish",
      count: "3,800+",
      color: "var(--primary)",
      icon: "🌱",
      season: "Bahor",
      salary: "130-170k/kun",
      duration: "2 oy",
    },
    {
      name: "Uzum Yig'ish",
      count: "2,900+",
      color: "var(--feature-highlight)",
      icon: "🍇",
      season: "Kuz",
      salary: "140-190k/kun",
      duration: "1-2 oy",
    },
    {
      name: "Qurilish Ishlari",
      count: "5,600+",
      color: "var(--warning-dark)",
      icon: "🏗️",
      season: "Bahor-Yoz",
      salary: "200-300k/kun",
      duration: "4-6 oy",
    },
    {
      name: "Chorvachilik",
      count: "3,100+",
      color: "var(--error)",
      icon: "🐄",
      season: "Yil Bo'yi",
      salary: "100-150k/kun",
      duration: "6+ oy",
    },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Paxta Terib Oluvchi (Tajribali)",
      company: "Surxon Agro Farm",
      location: "Surxondaryo viloyati",
      salary: "180,000 - 220,000 so'm/kun",
      type: "Mavsumiy ish",
      duration: "3 oy (Sentabr-Noyabr)",
      tags: ["Tajriba talab", "Yashash joyi", "Oziq-ovqat"],
      posted: "2 soat oldin",
      logo: "🌾",
      urgent: true,
      benefits: ["Bepul yashash", "Ovqat ta'minoti", "Transport"],
    },
    {
      id: 2,
      title: "Meva Bog'i Yordamchisi",
      company: "Farg'ona Meva Export",
      location: "Farg'ona viloyati",
      salary: "150,000 - 190,000 so'm/kun",
      type: "Mavsumiy ish",
      duration: "2 oy (Avgust-Sentabr)",
      tags: ["Yangi boshlovchilar", "O'qitish", "Bonus"],
      posted: "5 soat oldin",
      logo: "🍎",
      urgent: false,
      benefits: ["O'qitish dasturi", "Bonus to'lovlar", "Sertifikat"],
    },
    {
      id: 3,
      title: "Qurilish Brigadiri",
      company: "Toshkent Construction",
      location: "Toshkent shahar",
      salary: "250,000 - 350,000 so'm/kun",
      type: "Mavsumiy ish",
      duration: "6 oy (Mart-Avgust)",
      tags: ["Tajriba kerak", "Yuqori maosh", "Premia"],
      posted: "1 kun oldin",
      logo: "�️",
      urgent: true,
      benefits: ["Yuqori maosh", "Premia", "Kasbiy o'sish"],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Aziz Karimov",
      role: "Paxta Teruvchi",
      company: "Surxon Agro",
      content:
        "ishLink orqali 3 yildan beri mavsumiy ishlar topib kelaman. Eng yaxshi platforma!",
      avatar: "�‍🌾",
      rating: 5,
      earnings: "4.2 mln so'm",
      period: "3 oy",
    },
    {
      id: 2,
      name: "Malika Rahimova",
      role: "Fermer Xo'jalik Egasi",
      company: "Gulshan Farm",
      content:
        "Eng ishonchli ishchilarni shu yerdan topaman. Barcha hujjatlar rasmiy!",
      avatar: "�‍💼",
      rating: 5,
      workers: "150+ ishchi",
      period: "har mavsum",
    },
    {
      id: 3,
      name: "Bobur Toshev",
      role: "Qurilish Ustasi",
      company: "Build Pro",
      content:
        "Professional muhit, vaqtida to'lov va mukammal shartlar. Tavsiya qilaman!",
      avatar: "�‍♂️",
      rating: 5,
      earnings: "6.8 mln so'm",
      period: "5 oy",
    },
  ];

  const howItWorks = {
    workers: [
      {
        step: "1",
        title: "Profil yarating",
        description: "Mavsumiy ish tajribangiz va ko'nikmalaringizni kiriting",
        icon: UserCheck,
      },
      {
        step: "2",
        title: "Ish tanlang",
        description: "O'zingizga mos mavsumiy ishlarni qidiring va tanlang",
        icon: Search,
      },
      {
        step: "3",
        title: "Ariza yuboring",
        description: "Bir bosish bilan ariza yuboring va javob oling",
        icon: Target,
      },
      {
        step: "4",
        title: "Ishni boshlang",
        description: "Qabul qilinganingizdan keyin ishni boshlang",
        icon: Sparkles,
      },
    ],
    employers: [
      {
        step: "1",
        title: "Xo'jalik ro'yxati",
        description: "Fermer xo'jaligingiz yoki kompaniyangiz haqida ma'lumot",
        icon: Award,
      },
      {
        step: "2",
        title: "Ish e'lon qiling",
        description: "Kerakli ishchi soni va shartlarni batafsil yozing",
        icon: Briefcase,
      },
      {
        step: "3",
        title: "Ishchilar toping",
        description: "Eng yaxshi va ishonchli ishchilarni tanlang",
        icon: Users,
      },
      {
        step: "4",
        title: "Ishni boshqaring",
        description: "Jarayonni kuzatib boring va to'lovlarni amalga oshiring",
        icon: Shield,
      },
    ],
  };

  const features = [
    {
      title: "Ishonchli To'lovlar",
      description: "Barcha to'lovlar kafolatli va vaqtida amalga oshiriladi",
      icon: Shield,
      color: "var(--success)",
    },
    {
      title: "Tezkor Jarayon",
      description: "24 soat ichida ish topish yoki ishchi jalb qilish",
      icon: Zap,
      color: "var(--primary)",
    },
    {
      title: "Professional Yordam",
      description: "24/7 qo'llab-quvvatlash va maslahat xizmati",
      icon: Heart,
      color: "var(--warning)",
    },
    {
      title: "Rasmiy Hujjatlar",
      description: "Barcha shartnomalar qonun asosida tuziladi",
      icon: Award,
      color: "var(--feature-highlight)",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Mavsumiy ishlar uchun
              <span className="text-gradient"> eng ishonchli</span>
              <br />
              hamkor platformasi
            </h1>

            <p className="hero-description">
              25,000+ mavsumiy ishchi va 5,000+ fermer xo'jalik o'rtasida
              ishonchli aloqa. Professional mavsumiy ish imkoniyatlari va
              kafolatlangan to'lovlar.
            </p>

            <form className="hero-search" onSubmit={handleSearch}>
              <div className="search-group">
                <div className="search-field">
                  <input
                    type="text"
                    placeholder="Paxta, meva yig'ish, qurilish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
                <div className="location-field">
                  <input
                    type="text"
                    placeholder="Viloyat, tuman..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="location-input"
                  />
                </div>
                <button type="submit" className="search-button">
                  Ish Izlash
                </button>
              </div>
            </form>

            <div className="hero-actions">
              <Link to="/seasonal-jobs" className="btn btn-primary btn-lg">
                <Briefcase size={20} />
                Mavsumiy Ishlar
                <ArrowRight size={20} />
              </Link>
              <Link to="/mardikor" className="btn btn-outline btn-lg">
                <Users size={20} />
                Tezkor Ishchilar
              </Link>
            </div>

            <div className="hero-features">
              <div className="hero-feature">
                <Shield size={16} />
                <span>Kafolatlangan to'lov</span>
              </div>
              <div className="hero-feature">
                <Clock size={16} />
                <span>24/7 qo'llab-quvvatlash</span>
              </div>
              <div className="hero-feature">
                <Award size={16} />
                <span>Rasmiy shartnoma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mashhur mavsumiy ishlar</h2>
            <p className="section-description">
              Turli mavsumlar bo'yicha minglab ish imkoniyatlari
            </p>
          </div>

          <div className="categories-grid">
            {seasonalCategories.map((category, index) => (
              <Link
                key={index}
                to={`/seasonal-jobs?category=${category.name}`}
                className="category-card"
              >
                <div className="category-header">
                  <div
                    className="category-icon"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>{category.icon}</span>
                  </div>
                  <div
                    className="category-season"
                    style={{ color: category.color }}
                  >
                    {category.season}
                  </div>
                </div>

                <div className="category-content">
                  <h4 className="category-name">{category.name}</h4>
                  <p className="category-count">{category.count} ish o'rni</p>
                  <div className="category-details">
                    <div className="category-detail">
                      <DollarSign size={14} />
                      <span>{category.salary}</span>
                    </div>
                    <div className="category-detail">
                      <Calendar size={14} />
                      <span>{category.duration}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="category-arrow" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Qanday ishlaydi?</h2>
            <p className="section-description">
              Oddiy 4 qadamda mavsumiy ish toping yoki ishchi jalb qiling
            </p>
          </div>

          <div className="how-it-works-content">
            <div className="how-section">
              <div className="how-header">
                <Users className="how-icon" size={32} />
                <h3 className="how-title">Mavsumiy ishchilar uchun</h3>
              </div>
              <div className="how-steps">
                {howItWorks.workers.map((step, index) => (
                  <div key={index} className="how-step">
                    <div className="step-icon">
                      <step.icon size={20} />
                    </div>
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="how-section">
              <div className="how-header">
                <Briefcase className="how-icon" size={32} />
                <h3 className="how-title">Fermer xo'jaliklari uchun</h3>
              </div>
              <div className="how-steps">
                {howItWorks.employers.map((step, index) => (
                  <div key={index} className="how-step">
                    <div className="step-icon">
                      <step.icon size={20} />
                    </div>
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Eng so'ralgan mavsumiy ishlar</h2>
            <p className="section-description">
              Eng yaxshi fermer xo'jaliklari va kompaniyalardan yangi ish
              e'lonlari
            </p>
            <Link to="/seasonal-jobs" className="section-link">
              Barcha ishlarni ko'rish
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="jobs-grid">
            {featuredJobs.map((job) => (
              <Link
                key={job.id}
                to={`/job/${job.id}`}
                className={`job-card ${job.urgent ? "urgent" : ""}`}
              >
                {job.urgent && (
                  <div className="urgent-badge">
                    <Zap size={12} />
                    Shoshilinch
                  </div>
                )}

                <div className="job-header">
                  <div className="company-logo">{job.logo}</div>
                  <div className="job-meta">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                </div>

                <div className="job-details">
                  <div className="job-info">
                    <span className="job-location">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-duration">
                    <Calendar size={14} />
                    {job.duration}
                  </div>
                  <p className="job-salary">{job.salary}</p>
                </div>

                <div className="job-benefits">
                  {job.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="job-benefit">
                      {benefit}
                    </span>
                  ))}
                  {job.benefits.length > 2 && (
                    <span className="job-benefit">
                      +{job.benefits.length - 2}
                    </span>
                  )}
                </div>

                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="job-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="job-footer">
                  <span className="job-posted">
                    <Clock size={12} />
                    {job.posted}
                  </span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Muvaffaqiyat hikoyalari</h2>
            <p className="section-description">
              Minglab mavsumiy ishchi va fermer xo'jaliklari JobLink orqali
              muvaffaqiyat qozongan
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled" />
                    ))}
                  </div>
                  {testimonial.earnings && (
                    <div className="testimonial-earnings">
                      <DollarSign size={14} />
                      {testimonial.earnings}
                    </div>
                  )}
                  {testimonial.workers && (
                    <div className="testimonial-workers">
                      <Users size={14} />
                      {testimonial.workers}
                    </div>
                  )}
                </div>

                <p className="testimonial-content">"{testimonial.content}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">
                      {testimonial.role} • {testimonial.company}
                    </p>
                    <p className="author-period">
                      <Calendar size={12} />
                      {testimonial.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nima uchun ishLink?</h2>
            <p className="section-description">
              O'zbekistondagi eng ishonchli mavsumiy ish platformasi
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div
                  className="feature-icon"
                  style={{
                    backgroundColor: `${feature.color}15`,
                    color: feature.color,
                  }}
                >
                  <feature.icon size={28} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={16} />
              Bepul ro'yxatdan o'ting
            </div>

            <h2 className="cta-title">Mavsumiy ishingizni bugun boshlang</h2>
            <p className="cta-description">
              25,000+ ishchi va 5,000+ fermer xo'jaliklar orasida o'z
              o'rningizni toping. Kafolatlangan to'lovlar va professional
              xizmat.
            </p>

            <div className="cta-stats">
              <div className="cta-stat">
                <strong>4.9/5</strong>
                <span>Mijoz baholovi</span>
              </div>
              <div className="cta-stat">
                <strong>24/7</strong>
                <span>Qo'llab-quvvatlash</span>
              </div>
              <div className="cta-stat">
                <strong>95%</strong>
                <span>Muvaffaqiyat darajasi</span>
              </div>
            </div>

            <div className="cta-actions">
              <Link to="/auth/register" className="btn btn-primary btn-xl">
                <UserCheck size={20} />
                Ishchi sifatida ro'yxatdan o'tish
                <ArrowRight size={20} />
              </Link>
              <Link to="/e/register" className="btn btn-outline btn-xl">
                <Briefcase size={20} />
                Ish beruvchi sifatida
              </Link>
            </div>

            <div className="cta-trust">
              <div className="trust-item">
                <Shield size={16} />
                <span>100% xavfsiz to'lovlar</span>
              </div>
              <div className="trust-item">
                <Award size={16} />
                <span>Rasmiy litsenziyalangan</span>
              </div>
              <div className="trust-item">
                <Heart size={16} />
                <span>25,000+ mamnun mijoz</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
