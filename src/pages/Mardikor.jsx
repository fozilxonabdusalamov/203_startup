import { useState } from 'react'
import { MapPin, Clock, DollarSign, Users, Shield, CheckCircle, Plus } from 'lucide-react'
import './Mardikor.css'

const Mardikor = () => {
  const [isAvailable, setIsAvailable] = useState(false)
  const [duration, setDuration] = useState('4')
  const [rate, setRate] = useState('')

  const availableWorkers = [
    {
      id: 1,
      name: 'Sanjar Karimov',
      skill: 'Paxta teruvchi',
      rate: '180,000 so\'m/kun',
      location: 'Surxondaryo vil.',
      rating: 4.8,
      distance: '45 km',
      verified: true,
      avatar: '🌾',
      availability: 'Sentabr-Noyabr'
    },
    {
      id: 2,
      name: 'Dilshod Rustamov',
      skill: 'Qurilish mavsumiy',
      rate: '200,000 so\'m/kun',
      location: 'Toshkent sh.',
      rating: 4.9,
      distance: '12 km',
      verified: true,
      avatar: '🏗️',
      availability: 'Mart-Avgust'
    },
    {
      id: 3,
      name: 'Aziza Saidova',
      skill: 'Tekstil ishchisi',
      rate: '160,000 so\'m/kun',
      location: 'Farg\'ona vil.',
      rating: 4.7,
      distance: '80 km',
      verified: true,
      avatar: '🧵',
      availability: 'Iyun-Oktabr'
    }
  ]

  const quickJobs = [
    {
      id: 1,
      title: 'Paxta terib olish',
      employer: 'Agrotek Farm',
      rate: '180,000 so\'m/kun',
      duration: '3 oy',
      location: 'Surxondaryo vil.',
      posted: '5 daqiqa oldin',
      urgent: true,
      workers_needed: 25,
      season: 'Sentabr-Noyabr'
    },
    {
      id: 2,
      title: 'Meva yig\'ish ishi',
      employer: 'GreenHarvest',
      rate: '150,000 so\'m/kun',
      duration: '2 oy',
      location: 'Farg\'ona vil.',
      posted: '12 daqiqa oldin',
      urgent: false,
      workers_needed: 15,
      season: 'May-Iyul'
    },
    {
      id: 3,
      title: 'Turizm gidi',
      employer: 'Uzbekistan Tours',
      rate: '250,000 so\'m/kun',
      duration: '6 oy',
      location: 'Samarqand sh.',
      posted: '30 daqiqa oldin',
      urgent: true,
      workers_needed: 3,
      season: 'Mart-Avgust'
    }
  ]

  const handleToggleAvailability = () => {
    setIsAvailable(!isAvailable)
  }

  const handleQuickPost = (e) => {
    e.preventDefault()
    alert('Ish e\'loni yuborildi!')
  }

  return (
    <div className="mardikor-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="header-content">
            <h1 className="page-title">Mavsumiy Ishchilar Bazori</h1>
            <p className="page-description">
              Tezkor mavsumiy ish va ishchi topish platformasi - real vaqt rejimida
            </p>
          </div>
          
          <div className="availability-toggle">
            <label className="toggle-label">
              <input 
                type="checkbox"
                checked={isAvailable}
                onChange={handleToggleAvailability}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">
                {isAvailable ? 'Hozir mavjudman' : 'Ishga tayyorman'}
              </span>
            </label>
            {isAvailable && (
              <div className="duration-selector">
                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="form-select"
                >
                  <option value="2">2 soat</option>
                  <option value="4">4 soat</option>
                  <option value="8">8 soat</option>
                  <option value="full">To'liq kun</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="mardikor-layout">
          {/* Map Section */}
          <div className="map-section">
            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={48} />
                <h3>Xarita</h3>
                <p>Yaqin atrofdagi ishchi va ish o'rinlari</p>
                <div className="map-markers">
                  <div className="marker worker-marker">
                    <Users size={16} />
                    <span>12 ishchi</span>
                  </div>
                  <div className="marker job-marker">
                    <Plus size={16} />
                    <span>5 ish</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-filters">
              <button className="filter-btn active">
                <Users size={16} />
                Ishchilar
              </button>
              <button className="filter-btn">
                <Plus size={16} />
                Ishlar
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="mardikor-sidebar">
            {/* Quick Post */}
            <div className="quick-post-card">
              <h3>Tezkor e'lon berish</h3>
              <form onSubmit={handleQuickPost} className="quick-post-form">
                <input
                  type="text"
                  placeholder="Ish turi (masalan: Qurilish yordamchisi)"
                  className="form-input"
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Soatlik narx"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="form-input"
                    required
                  />
                  <select className="form-select" required>
                    <option value="">Kishilar soni</option>
                    <option value="1">1 kishi</option>
                    <option value="2">2 kishi</option>
                    <option value="3">3 kishi</option>
                    <option value="5">5+ kishi</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Joylashuv"
                  className="form-input"
                  required
                />
                <button type="submit" className="btn btn-primary w-full">
                  E'lon berish
                </button>
              </form>
            </div>

            {/* Safety Tips */}
            <div className="safety-card">
              <div className="safety-header">
                <Shield size={20} />
                <h3>Xavfsizlik maslahatlar</h3>
              </div>
              <ul className="safety-tips">
                <li>
                  <CheckCircle size={16} />
                  Tasdiqlangan foydalanuvchilar bilan ishlang
                </li>
                <li>
                  <CheckCircle size={16} />
                  To'lovni oldindan to'liq bermang
                </li>
                <li>
                  <CheckCircle size={16} />
                  Ish jarayonini hujjatlashtirib oling
                </li>
                <li>
                  <CheckCircle size={16} />
                  Shubhali vaziyatlarda admin bilan bog'laning
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Available Workers */}
        <section className="workers-section">
          <div className="section-header">
            <h2>Hozir mavjud ishchilar</h2>
            <p>Yaqin atrofdagi ishchilar bilan bog'laning</p>
          </div>

          <div className="workers-grid">
            {availableWorkers.map(worker => (
              <div key={worker.id} className="worker-card">
                <div className="worker-header">
                  <div className="worker-avatar">{worker.avatar}</div>
                  <div className="worker-info">
                    <h3 className="worker-name">
                      {worker.name}
                      {worker.verified && (
                        <CheckCircle size={16} className="verified-badge" />
                      )}
                    </h3>
                    <p className="worker-skill">{worker.skill}</p>
                  </div>
                  <div className="worker-status">
                    <span className="status-online">Online</span>
                  </div>
                </div>

                <div className="worker-details">
                  <div className="detail-item">
                    <DollarSign size={14} />
                    <span>{worker.rate}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={14} />
                    <span>{worker.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="distance">{worker.distance}</span>
                  </div>
                </div>

                <div className="worker-rating">
                  <span className="rating">⭐ {worker.rating}</span>
                </div>

                <div className="worker-actions">
                  <button className="btn btn-outline btn-sm">
                    Profil ko'rish
                  </button>
                  <button className="btn btn-primary btn-sm">
                    Bog'lanish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Jobs */}
        <section className="quick-jobs-section">
          <div className="section-header">
            <h2>Tezkor ishlar</h2>
            <p>Bugun boshlanishi kerak bo'lgan ishlar</p>
          </div>

          <div className="quick-jobs-grid">
            {quickJobs.map(job => (
              <div key={job.id} className={`quick-job-card ${job.urgent ? 'urgent' : ''}`}>
                {job.urgent && (
                  <div className="urgent-badge">Shoshilinch</div>
                )}
                
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-employer">{job.employer}</p>
                </div>

                <div className="job-details">
                  <div className="detail-row">
                    <DollarSign size={14} />
                    <span>{job.rate}</span>
                  </div>
                  <div className="detail-row">
                    <Clock size={14} />
                    <span>{job.duration}</span>
                  </div>
                  <div className="detail-row">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <div className="detail-row">
                    <Users size={14} />
                    <span>{job.workers_needed} kishi kerak</span>
                  </div>
                </div>

                <div className="job-footer">
                  <span className="job-posted">{job.posted}</span>
                  <button className="btn btn-primary btn-sm">
                    Qabul qilish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Mardikor
