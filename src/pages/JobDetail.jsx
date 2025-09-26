import { useState } from 'react'
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Users, 
  Calendar,
  Share2,
  Heart,
  ExternalLink,
  Building,
  Globe,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'
import './JobDetail.css'

const JobDetail = () => {
  const [activeTab, setActiveTab] = useState('description')
  const [saved, setSaved] = useState(false)

  // Mock job data
  const job = {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp',
    companyLogo: '🚀',
    location: 'Toshkent, O\'zbekiston',
    salary: '15,000,000 - 25,000,000 so\'m',
    type: 'To\'liq vaqt',
    category: 'IT va Dasturlash',
    experience: '3-5 yil',
    posted: '2 kun oldin',
    remote: true,
    featured: true,
    description: `
      Biz TechCorp kompaniyasida React va zamonaviy web texnologiyalarida tajribali dasturchi qidiramiz. 
      
      Siz bizning jamoamizga qo'shilsangiz, quyidagi vazifalarni bajarasiz:
      • Yuqori sifatli va samarali React komponentlarini yaratish
      • TypeScript yordamida type-safe kod yozish
      • RESTful API va GraphQL bilan ishlash
      • Jest va React Testing Library bilan testlar yozish
      • Git workflow va code review jarayonlarida ishtirok etish
    `,
    requirements: [
      '3+ yil React dasturlash tajribasi',
      'TypeScript bilishi majburiy',
      'Redux yoki Zustand bilan ishlagan tajriba',
      'REST API va GraphQL bilishi',
      'Git va GitHub bilan ishlash ko\'nikmasi',
      'Agile/Scrum metodologiyasi bilishi',
      'Ingliz tili (o\'qish va tushunish darajasida)',
      'Problem solving va analytical thinking'
    ],
    responsibilities: [
      'Frontend arxitekturasini loyihalash va amalga oshirish',
      'Reusable komponentlar kutubxonasini yaratish',
      'Performance optimizatsiya ishlarini olib borish',
      'Cross-browser compatibility ta\'minlash',
      'UI/UX dizaynerlar bilan hamkorlik qilish',
      'Code review va mentoring',
      'Technical documentation yozish',
      'Yangi texnologiyalar va best practices bilan tanishish'
    ],
    benefits: [
      'Raqobatbardosh maosh va bonuslar',
      'Sog\'liqni saqlash sug\'urtasi',
      'Flexible work schedule',
      'Remote work imkoniyati',
      'Professional development budget',
      'MacBook va zarur jihozlar',
      'Team building va corporate events',
      'Bepul lunch va coffee'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'],
    company_info: {
      name: 'TechCorp',
      size: '100-500 xodim',
      industry: 'Information Technology',
      founded: '2015',
      website: 'https://techcorp.uz',
      description: 'Biz O\'zbekistondagi yetakchi IT kompaniyalaridan biriyiz. Innovatsion yechimlar yaratamiz.'
    }
  }

  const similarJobs = [
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'StartupHub',
      salary: '10,000,000 - 18,000,000 so\'m',
      location: 'Toshkent',
      posted: '1 kun oldin'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'DevAgency',
      salary: '12,000,000 - 20,000,000 so\'m',
      location: 'Samarqand',
      posted: '3 kun oldin'
    },
    {
      id: 4,
      title: 'React Native Developer',
      company: 'MobileFirst',
      salary: '11,000,000 - 16,000,000 so\'m',
      location: 'Toshkent',
      posted: '5 kun oldin'
    }
  ]

  const handleApply = () => {
    // Handle application logic
    alert('Ariza yuborish sahifasiga o\'tkaziladi...')
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `${job.company}da ${job.title} ish o'rni`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Havola nusxalandi!')
    }
  }

  return (
    <div className="job-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/jobs" className="breadcrumb-link">
            <ArrowLeft size={16} />
            Ish o'rinlariga qaytish
          </Link>
        </div>

        <div className="job-detail-layout">
          {/* Main Content */}
          <main className="job-main">
            {/* Job Header */}
            <div className="job-header">
              <div className="job-header-content">
                <div className="company-section">
                  <div className="company-logo">{job.companyLogo}</div>
                  <div className="job-info">
                    <h1 className="job-title">{job.title}</h1>
                    <Link to={`/company/${job.company}`} className="company-name">
                      <Building size={16} />
                      {job.company}
                    </Link>
                  </div>
                </div>
                
                <div className="job-actions">
                  <button 
                    className={`save-btn ${saved ? 'saved' : ''}`}
                    onClick={handleSave}
                  >
                    <Heart size={18} />
                    {saved ? 'Saqlangan' : 'Saqlash'}
                  </button>
                  <button className="share-btn" onClick={handleShare}>
                    <Share2 size={18} />
                    Ulashish
                  </button>
                </div>
              </div>
              
              {/* Job Meta Info */}
              <div className="job-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                  {job.remote && <span className="remote-badge">Masofaviy</span>}
                </div>
                <div className="meta-item">
                  <DollarSign size={16} />
                  <span>{job.salary}</span>
                </div>
                <div className="meta-item">
                  <Briefcase size={16} />
                  <span>{job.type}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{job.experience}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>E'lon qilingan: {job.posted}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="job-cta">
                <button className="btn btn-primary btn-lg" onClick={handleApply}>
                  Ariza berish
                  <ExternalLink size={18} />
                </button>
                <Link to={`/company/${job.company}`} className="btn btn-outline btn-lg">
                  Kompaniyani ko'rish
                  <Building size={18} />
                </Link>
              </div>
            </div>

            {/* Job Content Tabs */}
            <div className="job-content">
              <div className="job-tabs">
                <button 
                  className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Tavsif
                </button>
                <button 
                  className={`tab-button ${activeTab === 'requirements' ? 'active' : ''}`}
                  onClick={() => setActiveTab('requirements')}
                >
                  Talablar
                </button>
                <button 
                  className={`tab-button ${activeTab === 'company' ? 'active' : ''}`}
                  onClick={() => setActiveTab('company')}
                >
                  Kompaniya
                </button>
                <button 
                  className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
                  onClick={() => setActiveTab('benefits')}
                >
                  Imtiyozlar
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'description' && (
                  <div className="tab-panel">
                    <h3>Ish tavsifi</h3>
                    <div className="job-description">
                      {job.description.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <h3>Vazifalar</h3>
                    <ul className="job-list">
                      {job.responsibilities.map((item, index) => (
                        <li key={index}>
                          <CheckCircle size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3>Kerakli ko'nikmalar</h3>
                    <div className="skills-grid">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div className="tab-panel">
                    <h3>Talablar</h3>
                    <ul className="job-list">
                      {job.requirements.map((req, index) => (
                        <li key={index}>
                          <CheckCircle size={16} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'company' && (
                  <div className="tab-panel">
                    <h3>Kompaniya haqida</h3>
                    <div className="company-details">
                      <p>{job.company_info.description}</p>
                      
                      <div className="company-stats">
                        <div className="stat">
                          <Users size={16} />
                          <span>{job.company_info.size}</span>
                        </div>
                        <div className="stat">
                          <Building size={16} />
                          <span>{job.company_info.industry}</span>
                        </div>
                        <div className="stat">
                          <Calendar size={16} />
                          <span>Tashkil etilgan: {job.company_info.founded}</span>
                        </div>
                        <div className="stat">
                          <Globe size={16} />
                          <a href={job.company_info.website} target="_blank" rel="noopener noreferrer">
                            Veb-sayt
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="tab-panel">
                    <h3>Imtiyozlar va qulayliklar</h3>
                    <ul className="job-list">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>
                          <CheckCircle size={16} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="job-sidebar">
            {/* Application CTA */}
            <div className="sidebar-card cta-card">
              <h3>Ushbu ishga ariza bering</h3>
              <p>Sizning profilingiz mos keladi</p>
              <button className="btn btn-primary w-full" onClick={handleApply}>
                Ariza berish
              </button>
              <button 
                className={`btn btn-outline w-full ${saved ? 'saved' : ''}`}
                onClick={handleSave}
              >
                <Heart size={16} />
                {saved ? 'Saqlangan' : 'Saqlash'}
              </button>
            </div>

            {/* Similar Jobs */}
            <div className="sidebar-card">
              <h3>O'xshash ishlar</h3>
              <div className="similar-jobs">
                {similarJobs.map((similarJob) => (
                  <Link 
                    key={similarJob.id} 
                    to={`/jobs/${similarJob.id}`}
                    className="similar-job-card"
                  >
                    <h4>{similarJob.title}</h4>
                    <p className="company">{similarJob.company}</p>
                    <div className="job-details">
                      <span className="salary">{similarJob.salary}</span>
                      <span className="location">{similarJob.location}</span>
                    </div>
                    <span className="posted">{similarJob.posted}</span>
                  </Link>
                ))}
              </div>
              <Link to="/jobs" className="view-all-link">
                Barcha ishlarni ko'rish
                <ExternalLink size={14} />
              </Link>
            </div>

            {/* Company Info */}
            <div className="sidebar-card">
              <h3>Kompaniya</h3>
              <div className="company-card">
                <div className="company-header">
                  <div className="company-logo">{job.companyLogo}</div>
                  <div>
                    <h4>{job.company_info.name}</h4>
                    <p>{job.company_info.industry}</p>
                  </div>
                </div>
                <p>{job.company_info.description}</p>
                <Link 
                  to={`/company/${job.company}`}
                  className="btn btn-outline w-full"
                >
                  Kompaniya profili
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
