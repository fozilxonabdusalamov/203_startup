import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  ExternalLink,
} from "lucide-react";
import "./Jobs.css";

const Jobs = () => {
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [salaryFilter, setSalaryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("list");
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState(new Set([2, 6]));

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock seasonal work data
  useEffect(() => {
    setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: "Paxta terib olish ishi",
          company: "Agrotek Farm",
          companyLogo: "🌾",
          location: "Surxondaryo viloyati",
          salary: "150,000 - 200,000 so'm",
          type: "Mavsumiy ish",
          category: "Qishloq xo'jaligi",
          experience: "Har qanday",
          duration: "3 oy (Sentabr-Noyabr)",
          tags: ["Jismoniy ish", "Dala ishi", "Paxta terib olish"],
          posted: "2 kun oldin",
          description:
            "Paxta terib olish mavsumi uchun ishchilar kerak. Turar joy va ovqat bilan ta'minlanadi...",
          featured: true,
          saved: false,
          distance: "45 km",
        },
        {
          id: 2,
          title: "Meva yig'ish ishi",
          company: "GreenHarvest",
          companyLogo: "🍎",
          location: "Farg'ona",
          salary: "120,000 - 180,000 so'm",
          type: "Mavsumiy ish",
          category: "Qishloq xo'jaligi",
          experience: "Har qanday",
          duration: "4 oy (May-Avgust)",
          tags: ["Olma yig'ish", "O'rik yig'ish", "Toza havo"],
          posted: "1 kun oldin",
          description:
            "Meva bog'larida olma, o'rik va boshqa mevalar yig'ish uchun ishchilar talab qilinadi...",
          featured: false,
          saved: true,
          distance: "80 km",
        },
        {
          id: 3,
          title: "Qurilish yordamchisi",
          company: "BuildPro",
          companyLogo: "�️",
          location: "Toshkent",
          salary: "180,000 - 250,000 so'm",
          type: "Mavsumiy ish",
          category: "Qurilish",
          experience: "1+ yil",
          duration: "6 oy (Mart-Avgust)",
          tags: ["Qurilish", "Jismoniy ish", "Turar joy bino"],
          posted: "3 kun oldin",
          description:
            "Katta qurilish loyihasi uchun yordamchi ishchilar kerak...",
          featured: false,
          saved: false,
          distance: "12 km",
        },
        {
          id: 4,
          title: "Turizm gidi",
          company: "Uzbekistan Tours",
          companyLogo: "🏛️",
          location: "Samarqand",
          salary: "200,000 - 300,000 so'm",
          type: "Mavsumiy ish",
          category: "Turizm",
          experience: "2+ yil",
          duration: "8 oy (Mart-Oktabr)",
          tags: ["Ingliz tili", "Gidlik", "Tarix", "Kommunikablik"],
          posted: "1 hafta oldin",
          description:
            "Turist guruhlarni boshqarish va shahar bo'ylab sayohat tashkil qilish...",
          featured: false,
          saved: false,
          distance: "250 km",
        },
        {
          id: 5,
          title: "Tekstil ishlab chiqarish",
          company: "UzTextile",
          companyLogo: "🧵",
          location: "Namangan",
          salary: "160,000 - 220,000 so'm",
          type: "Mavsumiy ish",
          category: "Tekstil",
          experience: "1+ yil",
          duration: "5 oy (Iyun-Oktabr)",
          tags: ["Tikuvchilik", "Sifat nazorati", "Tezlik"],
          posted: "4 kun oldin",
          description: "Yirik buyurtma uchun qo'shimcha ishchilar kerak...",
          featured: true,
          saved: false,
          distance: "180 km",
        },
        {
          id: 6,
          title: "Restoran xodimi",
          company: "Milliy Taomlar",
          companyLogo: "🍽️",
          location: "Buxoro",
          salary: "140,000 - 190,000 so'm",
          type: "Mavsumiy ish",
          category: "Ovqat xizmati",
          experience: "Har qanday",
          duration: "6 oy (Aprel-Sentabr)",
          tags: ["Ofitsiantlik", "Xizmat ko'rsatish", "Tips"],
          posted: "2 hafta oldin",
          description: "Turist mavsumi uchun restoran xodimlari kerak...",
          featured: false,
          saved: true,
          distance: "320 km",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Utility functions
  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => {
      const newSaved = new Set(prev);
      if (newSaved.has(jobId)) {
        newSaved.delete(jobId);
      } else {
        newSaved.add(jobId);
      }
      return newSaved;
    });
  };

  // Filter and sort jobs
  const getFilteredJobs = () => {
    let filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = !locationFilter || 
                             job.location.toLowerCase().includes(locationFilter.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || 
                             job.category === categoryFilter;
      
      const matchesType = typeFilter === 'all' || 
                         job.type === typeFilter;
      
      const matchesExperience = experienceFilter === 'all' || 
                               job.experience === experienceFilter;

      return matchesSearch && matchesLocation && matchesCategory && matchesType && matchesExperience;
    });

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.posted) - new Date(a.posted));
        break;
      case 'salary-high':
        filtered.sort((a, b) => {
          const aMax = parseInt(a.salary.match(/\d+/g)?.[1] || '0');
          const bMax = parseInt(b.salary.match(/\d+/g)?.[1] || '0');
          return bMax - aMax;
        });
        break;
      case 'distance':
        filtered.sort((a, b) => parseInt(a.distance) - parseInt(b.distance));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredJobs = getFilteredJobs();

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
    );
  }

  return (
    <div className="jobs-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>Mavsumiy Ish O'rinlari</h1>
              <p>O'zbekiston bo'ylab eng yaxshi mavsumiy ish imkoniyatlarini toping</p>
            </div>
            <div className="header-stats">
              <div className="stat">
                <span className="stat-number">{jobs.length}</span>
                <span className="stat-label">Ish O'rinlari</span>
              </div>
              <div className="stat">
                <span className="stat-number">{filteredJobs.length}</span>
                <span className="stat-label">Natijalar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Search and Filters Section */}
        <div className="search-filters-section">
          {/* Main Search Bar */}
          <div className="main-search">
            <div className="search-input-group">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Ish nomi, kompaniya yoki kalit so'zlar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="location-input-group">
              <MapPin className="location-icon" />
              <input
                type="text"
                placeholder="Shahar yoki viloyat"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="location-input"
              />
            </div>
            <button
              className="search-button"
              onClick={() => {/* Search logic already handled by state */}}
            >
              <Search size={20} />
              Qidirish
            </button>
          </div>

          {/* Quick Filters */}
          <div className="quick-filters">
            <button
              className={`filter-chip ${categoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('all')}
            >
              Barcha kategoriyalar
            </button>
            <button
              className={`filter-chip ${categoryFilter === 'Qishloq xo\'jaligi' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('Qishloq xo\'jaligi')}
            >
              🌾 Qishloq xo'jaligi
            </button>
            <button
              className={`filter-chip ${categoryFilter === 'Qurilish' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('Qurilish')}
            >
              🏗️ Qurilish
            </button>
            <button
              className={`filter-chip ${categoryFilter === 'Turizm' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('Turizm')}
            >
              🏛️ Turizm
            </button>
            <button
              className={`filter-chip ${categoryFilter === 'Tekstil' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('Tekstil')}
            >
              🧵 Tekstil
            </button>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="filters-toolbar">
            <button 
              className="advanced-filters-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              Qo'shimcha filtrlar
              <ChevronDown className={`chevron ${showFilters ? 'rotated' : ''}`} />
            </button>
            
            <div className="view-controls">
              <div className="sort-control">
                <label>Saralash:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="newest">Eng yangi</option>
                  <option value="salary-high">Maosh bo'yicha</option>
                  <option value="distance">Masofa bo'yicha</option>
                </select>
              </div>
              
              <div className="view-mode-toggle">
                <button
                  className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
                <button
                  className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Map size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="advanced-filters">
              <div className="filter-group">
                <label>Ish turi:</label>
                <select 
                  value={typeFilter} 
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">Barcha turlar</option>
                  <option value="Mavsumiy ish">Mavsumiy ish</option>
                  <option value="To'liq vaqtli">To'liq vaqtli</option>
                  <option value="Qisman vaqtli">Qisman vaqtli</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>Tajriba:</label>
                <select 
                  value={experienceFilter} 
                  onChange={(e) => setExperienceFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">Har qanday</option>
                  <option value="Har qanday">Tajribasiz</option>
                  <option value="1+ yil">1+ yil</option>
                  <option value="2+ yil">2+ yil</option>
                  <option value="3+ yil">3+ yil</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>Maosh oralig'i:</label>
                <select 
                  value={salaryFilter} 
                  onChange={(e) => setSalaryFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">Har qanday</option>
                  <option value="100-150">100k - 150k</option>
                  <option value="150-200">150k - 200k</option>
                  <option value="200-300">200k - 300k</option>
                  <option value="300+">300k+</option>
                </select>
              </div>
              
              <button 
                className="clear-filters-button"
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('');
                  setCategoryFilter('all');
                  setSalaryFilter('all');
                  setTypeFilter('all');
                  setExperienceFilter('all');
                }}
              >
                <X size={16} />
                Filtrlarni tozalash
              </button>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="results-section">
          <div className="results-header">
            <h2>
              {filteredJobs.length} ta ish topildi
              {searchTerm && (
                <>
                  {" "}<span className="search-term">"{searchTerm}"</span> uchun
                </>
              )}
            </h2>
          </div>

          {/* Jobs Grid/List */}
          <div className={`jobs-container ${viewMode}`}>
            {filteredJobs.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>Hech narsa topilmadi</h3>
                <p>Filter sozlamalarini o'zgartirib ko'ring yoki boshqa kalit so'zlar bilan qidiring</p>
                <button 
                  className="reset-button"
                  onClick={() => {
                    setSearchTerm('');
                    setCategoryFilter('all');
                    setLocationFilter('');
                  }}
                >
                  Barcha ish o'rinlarini ko'rish
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div key={job.id} className={`job-card ${job.featured ? 'featured' : ''}`}>
                  {job.featured && <div className="featured-badge">Tavsiya etilgan</div>}
                  
                  <div className="job-card-header">
                    <div className="company-info">
                      <div className="company-logo">{job.companyLogo}</div>
                      <div className="job-meta">
                        <h3 className="job-title">
                          <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                        </h3>
                        <p className="company-name">
                          <Link to={`/companies/${job.company}`}>{job.company}</Link>
                        </p>
                      </div>
                    </div>
                    
                    <button
                      className={`save-button ${savedJobs.has(job.id) ? 'saved' : ''}`}
                      onClick={() => toggleSaveJob(job.id)}
                    >
                      <Heart size={20} fill={savedJobs.has(job.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <div className="job-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="detail-item">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={16} />
                      <span>{job.duration}</span>
                    </div>
                    <div className="detail-item">
                      <Briefcase size={16} />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <div className="job-tags">
                    {job.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="job-tag">{tag}</span>
                    ))}
                    {job.tags.length > 3 && (
                      <span className="more-tags">+{job.tags.length - 3} ko'proq</span>
                    )}
                  </div>

                  <p className="job-description">{job.description}</p>

                  <div className="job-card-footer">
                    <div className="job-posted">
                      <span>{job.posted}</span>
                      {job.distance && (
                        <>
                          <span className="separator">•</span>
                          <span>{job.distance}</span>
                        </>
                      )}
                    </div>
                    
                    <div className="job-actions">
                      <Link to={`/jobs/${job.id}`} className="view-details-button">
                        Batafsil
                        <ExternalLink size={14} />
                      </Link>
                      <Link to={`/apply/${job.id}`} className="apply-button">
                        Ariza berish
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Load More Button */}
          {filteredJobs.length > 0 && filteredJobs.length >= 10 && (
            <div className="load-more-section">
              <button className="load-more-button">
                Ko'proq yuklash
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
