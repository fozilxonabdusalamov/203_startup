import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  ArrowRight
} from 'lucide-react'
import './Home.css'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Navigate to jobs page with search parameters
    window.location.href = `/jobs?q=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}`
  }

  const stats = [
    { number: '50,000+', label: 'Ish o\'rinlari', icon: Briefcase },
    { number: '15,000+', label: 'Kompaniyalar', icon: Users },
    { number: '200,000+', label: 'Foydalanuvchilar', icon: TrendingUp },
    { number: '25,000+', label: 'Muvaffaqiyatli ishga joylashish', icon: CheckCircle }
  ]

  const categories = [
    { name: 'IT va Dasturlash', count: '5,200+', color: '#3b82f6', icon: '💻' },
    { name: 'Marketing', count: '2,800+', color: '#10b981', icon: '📈' },
    { name: 'Moliya', count: '1,900+', color: '#f59e0b', icon: '💰' },
    { name: 'Ta\'lim', count: '3,100+', color: '#ef4444', icon: '📚' },
    { name: 'Sog\'liqni saqlash', count: '1,500+', color: '#8b5cf6', icon: '🏥' },
    { name: 'Qurilish', count: '2,200+', color: '#06b6d4', icon: '🏗️' },
    { name: 'Savdo', count: '4,100+', color: '#84cc16', icon: '🛒' },
    { name: 'Transport', count: '1,800+', color: '#f97316', icon: '🚛' }
  ]

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Toshkent',
      salary: '15,000,000 - 25,000,000 so\'m',
      type: 'To\'liq vaqt',
      tags: ['React', 'TypeScript', 'Node.js'],
      posted: '2 kun oldin',
      logo: '🚀'
    },
    {
      id: 2,
      title: 'Marketing Menejer',
      company: 'Digital Agency',
      location: 'Samarqand',
      salary: '8,000,000 - 12,000,000 so\'m',
      type: 'To\'liq vaqt',
      tags: ['Digital Marketing', 'SEO', 'Analytics'],
      posted: '1 kun oldin',
      logo: '📱'
    },
    {
      id: 3,
      title: 'Grafik Dizayner',
      company: 'Creative Studio',
      location: 'Toshkent',
      salary: '6,000,000 - 10,000,000 so\'m',
      type: 'Qisman vaqt',
      tags: ['Photoshop', 'Illustrator', 'Figma'],
      posted: '3 kun oldin',
      logo: '🎨'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Aziza Karimova',
      role: 'Frontend Developer',
      company: 'Tech Solutions',
      content: 'JobLink orqali o\'z orzuimdagi ishni topdim. Platform juda qulay va professional.',
      avatar: '👩‍💻',
      rating: 5
    },
    {
      id: 2,
      name: 'Bobur Rahimov',
      role: 'HR Manager',
      company: 'Business Corp',
      content: 'Eng yaxshi kandidatlarni topish uchun eng samarali platforma. Tavsiya qilaman!',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      id: 3,
      name: 'Malika Tosheva',
      role: 'UX Designer',
      company: 'Design Agency',
      content: 'Juda tez va oson. Bir hafta ichida ish topdim. Rahmat JobLink!',
      avatar: '👩‍🎨',
      rating: 5
    }
  ]

  const howItWorks = {
    seekers: [
      {
        step: '1',
        title: 'Profil yarating',
        description: 'Batafsil profil yarating va CV yuklang'
      },
      {
        step: '2',
        title: 'Ish qidiring',
        description: 'Minglab ish o\'rinlari orasidan tanlang'
      },
      {
        step: '3',
        title: 'Ariza yuboring',
        description: 'Bir marta bosish bilan ariza yuboring'
      }
    ],
    employers: [
      {
        step: '1',
        title: 'Kompaniya profili',
        description: 'Kompaniyangiz haqida ma\'lumot kiriting'
      },
      {
        step: '2',
        title: 'Ish e\'lon qiling',
        description: 'Ish o\'rni haqida batafsil yozing'
      },
      {
        step: '3',
        title: 'Kandidat toping',
        description: 'Eng yaxshi kandidatlarni tanlang'
      }
    ]
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              O'zbekistondagi eng yirik
              <span className="text-gradient"> ish izlash</span> platformasi
            </h1>
            <p className="hero-description">
              Minglab ish o'rinlari, professional imkoniyatlar va muvaffaqiyatli karyera
              boshlanish nuqtasi. Bugun o'z kelajagingizni quring!
            </p>
            
            <form className="hero-search" onSubmit={handleSearch}>
              <div className="search-group">
                <div className="search-field">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Kasb, kompaniya yoki kalit so'z..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
                <div className="location-field">
                  <MapPin className="location-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Shahar, viloyat..."
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
              <Link to="/jobs" className="btn btn-primary btn-lg">
                Ish o'rinlarini ko'rish
                <ArrowRight size={20} />
              </Link>
              <Link to="/e/jobs/new" className="btn btn-outline btn-lg">
                Ish e'lon qilish
              </Link>
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
            <h2 className="section-title">Mashhur kategoriyalar</h2>
            <p className="section-description">
              Turli sohalarda minglab ish imkoniyatlari
            </p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link key={index} to={`/jobs?category=${category.name}`} className="category-card">
                <div className="category-icon" style={{ backgroundColor: `${category.color}15` }}>
                  <span style={{ color: category.color, fontSize: '2rem' }}>
                    {category.icon}
                  </span>
                </div>
                <div className="category-content">
                  <h4 className="category-name">{category.name}</h4>
                  <p className="category-count">{category.count} ish o'rni</p>
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
              Oddiy 3 qadamda ish toping yoki ishchi toping
            </p>
          </div>

          <div className="how-it-works-tabs">
            <div className="tab-content">
              <div className="how-section">
                <h3 className="how-title">Ish izlovchilar uchun</h3>
                <div className="how-steps">
                  {howItWorks.seekers.map((step, index) => (
                    <div key={index} className="how-step">
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
                <h3 className="how-title">Ish beruvchilar uchun</h3>
                <div className="how-steps">
                  {howItWorks.employers.map((step, index) => (
                    <div key={index} className="how-step">
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
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ajoyib ish imkoniyatlari</h2>
            <p className="section-description">
              Eng yaxshi kompaniyalardan yangi ish o'rinlari
            </p>
            <Link to="/jobs" className="section-link">
              Barcha ishlarni ko'rish
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="jobs-grid">
            {featuredJobs.map((job) => (
              <Link key={job.id} to={`/jobs/${job.id}`} className="job-card">
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
                  <p className="job-salary">{job.salary}</p>
                </div>

                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="job-tag">{tag}</span>
                  ))}
                </div>

                <div className="job-footer">
                  <span className="job-posted">{job.posted}</span>
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
            <h2 className="section-title">Foydalanuvchilar fikri</h2>
            <p className="section-description">
              Minglab odamlar JobLink orqali o'z kelajagini qurgan
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
                
                <p className="testimonial-content">
                  "{testimonial.content}"
                </p>
                
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
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
            <h2 className="cta-title">
              Bugun o'z karyerangizni boshlang
            </h2>
            <p className="cta-description">
              Minglab ish imkoniyatlari va professional rivojlanish yo'llari kutmoqda
            </p>
            <div className="cta-actions">
              <Link to="/auth/register" className="btn btn-primary btn-lg">
                Bepul ro'yxatdan o'tish
              </Link>
              <Link to="/jobs" className="btn btn-outline btn-lg">
                Ishlarni ko'rish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
