import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign,
  Map,
  List,
  ChevronDown,
  X,
  Heart,
  ExternalLink
} from 'lucide-react'
import './Jobs.css'

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [viewMode, setViewMode] = useState('list') // 'list' or 'map'
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('newest')
  
  // Filter states
  const [filters, setFilters] = useState({
    jobType: [],
    salaryRange: '',
    experience: '',
    category: '',
    duration: ''
  })

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock seasonal work data
  useEffect(() => {
    setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: 'Paxta terib olish ishi',
          company: 'Agrotek Farm',
          companyLogo: '🌾',
          location: 'Surxondaryo viloyati',
          salary: '150,000 - 200,000 so\'m',
          type: 'Mavsumiy ish',
          category: 'Qishloq xo\'jaligi',
          experience: 'Har qanday',
          duration: '3 oy (Sentabr-Noyabr)',
          tags: ['Jismoniy ish', 'Dala ishi', 'Paxta terib olish'],
          posted: '2 kun oldin',
          description: 'Paxta terib olish mavsumi uchun ishchilar kerak. Turar joy va ovqat bilan ta\'minlanadi...',
          featured: true,
          saved: false,
          distance: '45 km'
        },
        {
          id: 2,
          title: 'Meva yig\'ish ishi',
          company: 'GreenHarvest',
          companyLogo: '🍎',
          location: 'Farg\'ona',
          salary: '120,000 - 180,000 so\'m',
          type: 'Mavsumiy ish',
          category: 'Qishloq xo\'jaligi',
          experience: 'Har qanday',
          duration: '4 oy (May-Avgust)',
          tags: ['Olma yig\'ish', 'O\'rik yig\'ish', 'Toza havo'],
          posted: '1 kun oldin',
          description: 'Meva bog\'larida olma, o\'rik va boshqa mevalar yig\'ish uchun ishchilar talab qilinadi...',
          featured: false,
          saved: true,
          distance: '80 km'
        },
        {
          id: 3,
          title: 'Qurilish yordamchisi',
          company: 'BuildPro',
          companyLogo: '�️',
          location: 'Toshkent',
          salary: '180,000 - 250,000 so\'m',
          type: 'Mavsumiy ish',
          category: 'Qurilish',
          experience: '1+ yil',
          duration: '6 oy (Mart-Avgust)',
          tags: ['Qurilish', 'Jismoniy ish', 'Turar joy bino'],
          posted: '3 kun oldin',
          description: 'Katta qurilish loyihasi uchun yordamchi ishchilar kerak...',
          featured: false,
          saved: false,
          distance: '12 km'
        },
        {
          id: 4,
          title: 'Turizm gidi',
          company: 'Uzbekistan Tours',
          companyLogo: '🏛️',
          location: 'Samarqand',
          salary: '200,000 - 300,000 so\'m',
          type: 'Mavsumiy ish',
          category: 'Turizm',
          experience: '2+ yil',
          duration: '8 oy (Mart-Oktabr)',
          tags: ['Ingliz tili', 'Gidlik', 'Tarix', 'Kommunikablik'],
          posted: '1 hafta oldin',
          description: 'Turist guruhlarni boshqarish va shahar bo\'ylab sayohat tashkil qilish...',
          featured: false,
          saved: false,
          distance: '250 km'
        },
        {
          id: 5,
          title: 'Tekstil ishlab chiqarish',
          company: 'UzTextile',
          companyLogo: '🧵',
          location: 'Namangan',
          salary: '160,000 - 220,000 so\'m',
          type: 'Mavsumiy ish',
          category: 'Tekstil',
          experience: '1+ yil',
          duration: '5 oy (Iyun-Oktabr)',
          tags: ['Tikuvchilik', 'Sifat nazorati', 'Tezlik'],
          posted: '4 kun oldin',
          description: 'Yirik buyurtma uchun qo\'shimcha ishchilar kerak...',
          featured: true,
          saved: false,
          distance: '180 km'
        },
        {
          id: 6,
          title: 'Restoran xodimi',
          company: 'Milliy Taomlar',
          companyLogo: '🍽️',
          location: 'Buxoro',
          salary: '140,000 - 190,000 so\'m',
          type: 'Mavsumiy ish',
          category: 'Ovqat xizmati',
          experience: 'Har qanday',
          duration: '6 oy (Aprel-Sentabr)',
          tags: ['Ofitsiantlik', 'Xizmat ko\'rsatish', 'Tips'],
          posted: '2 hafta oldin',
          description: 'Turist mavsumi uchun restoran xodimlari kerak...',
          featured: false,
          saved: true,
          distance: '320 km'
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const jobTypes = [
    'Mavsumiy ish',
    'To\'liq vaqt',
    'Qisman vaqt', 
    'Freelance',
    'Stajirovka'
  ]

  const categories = [
    'Qishloq xo\'jaligi',
    'Qurilish',
    'Turizm',
    'Tekstil',
    'Ovqat xizmati',
    'Transport',
    'Savdo',
    'Xizmat ko\'rsatish'
  ]

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleJobTypeChange = (type) => {
    setFilters(prev => ({
      ...prev,
      jobType: prev.jobType.includes(type)
        ? prev.jobType.filter(t => t !== type)
        : [...prev.jobType, type]
    }))
  }

  const toggleSaveJob = (jobId) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, saved: !job.saved } : job
    ))
  }

  const filteredJobs = jobs.filter(job => {
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !job.company.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    
    if (location && !job.location.toLowerCase().includes(location.toLowerCase())) {
      return false
    }
    
    if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
      return false
    }
    
    if (filters.category && job.category !== filters.category) {
      return false
    }
    
    if (filters.remote && !job.remote) {
      return false
    }
    
    return true
  })

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.posted) - new Date(a.posted)
      case 'salary':
        return parseInt(b.salary.split('-')[1].replace(/[^0-9]/g, '')) - 
               parseInt(a.salary.split('-')[1].replace(/[^0-9]/g, ''))
      case 'distance':
        return parseInt(a.distance) - parseInt(b.distance)
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <div className="jobs-page">
        <div className="container">
          <div className="loading-skeleton">
            <div className="skeleton-header"></div>
            <div className="skeleton-filters"></div>
            <div className="skeleton-results">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-job-card"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="jobs-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="header-content">
            <h1 className="page-title">Mavsumiy Ish O'rinlari</h1>
            <p className="page-description">
              {sortedJobs.length} ta mavsumiy ish o'rni topildi
            </p>
          </div>
          
          <div className="header-actions">
            <div className="view-toggle">
              <button 
                className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
                Ro'yxat
              </button>
              <button 
                className={`view-button ${viewMode === 'map' ? 'active' : ''}`}
                onClick={() => setViewMode('map')}
              >
                <Map size={20} />
                Xarita
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="search-section">
          <div className="search-bar">
            <div className="search-field">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Mavsumiy kasb, fermer xo'jaligi yoki ish turi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="location-field">
              <MapPin className="location-icon" size={20} />
              <input
                type="text"
                placeholder="Joylashuv"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="location-input"
              />
            </div>
            <button 
              className="filter-button"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
              Filtrlar
            </button>
          </div>

          <div className="results-bar">
            <div className="results-info">
              <span className="result-count">{sortedJobs.length} ish o'rni</span>
              {searchQuery && (
                <span className="search-term">"{searchQuery}" bo'yicha</span>
              )}
            </div>
            
            <div className="sort-dropdown">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="newest">Eng yangi</option>
                <option value="salary">Maosh bo'yicha</option>
                <option value="distance">Masofa bo'yicha</option>
              </select>
            </div>
          </div>
        </div>

        <div className="jobs-layout">
          {/* Filters Sidebar */}
          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filters-header">
              <h3>Filtrlar</h3>
              <button 
                className="close-filters"
                onClick={() => setShowFilters(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="filter-group">
              <h4>Ish turi</h4>
              {jobTypes.map(type => (
                <label key={type} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={filters.jobType.includes(type)}
                    onChange={() => handleJobTypeChange(type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h4>Kategoriya</h4>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="filter-select"
              >
                <option value="">Barcha kategoriyalar</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <h4>Maosh oralig'i</h4>
              <select
                value={filters.salaryRange}
                onChange={(e) => handleFilterChange('salaryRange', e.target.value)}
                className="filter-select"
              >
                <option value="">Barcha maoshlar</option>
                <option value="0-5000000">5 mln so'mgacha</option>
                <option value="5000000-10000000">5-10 mln so'm</option>
                <option value="10000000-15000000">10-15 mln so'm</option>
                <option value="15000000-25000000">15-25 mln so'm</option>
                <option value="25000000+">25 mln so'mdan yuqori</option>
              </select>
            </div>

            <div className="filter-group">
              <h4>Tajriba</h4>
              <select
                value={filters.experience}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
                className="filter-select"
              >
                <option value="">Barcha darajalar</option>
                <option value="0-1">Yangi boshlovchi</option>
                <option value="1-3">1-3 yil</option>
                <option value="3-5">3-5 yil</option>
                <option value="5+">5+ yil</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.remote}
                  onChange={(e) => handleFilterChange('remote', e.target.checked)}
                />
                <span>Masofaviy ish</span>
              </label>
            </div>
          </aside>

          {/* Jobs List */}
          <main className="jobs-main">
            <div className="jobs-grid">
              {sortedJobs.map(job => (
                <div key={job.id} className={`job-card ${job.featured ? 'featured' : ''}`}>
                  <div className="job-header">
                    <div className="company-info">
                      <div className="company-logo">{job.companyLogo}</div>
                      <div className="job-meta">
                        <Link to={`/jobs/${job.id}`} className="job-title">
                          {job.title}
                        </Link>
                        <Link to={`/company/${job.company}`} className="company-name">
                          {job.company}
                        </Link>
                      </div>
                    </div>
                    
                    <button 
                      className={`save-button ${job.saved ? 'saved' : ''}`}
                      onClick={() => toggleSaveJob(job.id)}
                    >
                      <Heart size={18} />
                    </button>
                  </div>

                  <div className="job-details">
                    <div className="job-location">
                      <MapPin size={14} />
                      {job.location}
                      {job.distance && <span className="distance">• {job.distance}</span>}
                    </div>
                    
                    <div className="job-info">
                      <span className="job-type">
                        <Briefcase size={14} />
                        {job.type}
                      </span>
                      <span className="job-experience">
                        <Clock size={14} />
                        {job.experience}
                      </span>
                      {job.remote && (
                        <span className="remote-badge">Masofaviy</span>
                      )}
                    </div>
                    
                    <div className="job-salary">
                      <DollarSign size={14} />
                      {job.salary}
                    </div>
                  </div>

                  <p className="job-description">{job.description}</p>

                  <div className="job-tags">
                    {job.tags.map((tag, index) => (
                      <span key={index} className="job-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="job-footer">
                    <span className="job-posted">{job.posted}</span>
                    <div className="job-actions">
                      <Link to={`/jobs/${job.id}`} className="btn btn-outline btn-sm">
                        Batafsil
                        <ExternalLink size={14} />
                      </Link>
                      <Link to={`/jobs/${job.id}/apply`} className="btn btn-primary btn-sm">
                        Ariza berish
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedJobs.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3>Hech narsa topilmadi</h3>
                <p>Qidiruv shartlarini o'zgartirib ko'ring</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchQuery('')
                    setLocation('')
                    setFilters({
                      jobType: [],
                      salaryRange: '',
                      experience: '',
                      category: '',
                      remote: false
                    })
                  }}
                >
                  Filtrlarni tozalash
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Jobs
