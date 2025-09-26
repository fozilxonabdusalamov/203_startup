import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Employers.css';

const Employers = () => {
  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    size: '',
    rating: ''
  });

  const employers = [
    {
      id: 1,
      name: 'Agrotek Farm',
      industry: 'Qishloq xo\'jaligi',
      location: 'Surxondaryo viloyati',
      employees: '50-100',
      rating: 4.8,
      totalJobs: 156,
      activeJobs: 8,
      established: '2010',
      logo: '🌾',
      image: 'https://images.unsplash.com/photo-1566383434817-99d723b3b2a7?w=400',
      description: 'Yetakchi paxta va meva-sabzavot ishlab chiqaruvchi. Mavsumiy ishchilar uchun eng yaxshi sharoitlarni taqdim etamiz.',
      jobs: ['Paxta teruvchi', 'Meva yig\'uvchi', 'Traktor operatori']
    },
    {
      id: 2,
      name: 'GreenHarvest',
      industry: 'Qishloq xo\'jaligi',
      location: 'Farg\'ona viloyati',
      employees: '20-50',
      rating: 4.6,
      totalJobs: 89,
      activeJobs: 5,
      established: '2015',
      logo: '🍎',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400',
      description: 'Organik meva-sabzavot ishlab chiqarish bilan shug\'ullanuvchi kompaniya. Ekologik toza mahsulotlar.',
      jobs: ['Olma yig\'uvchi', 'Bog\'bon', 'Qadoqlash ishchisi']
    },
    {
      id: 3,
      name: 'BuildPro Construction',
      industry: 'Qurilish',
      location: 'Toshkent shahri',
      employees: '100-200',
      rating: 4.7,
      totalJobs: 234,
      activeJobs: 12,
      established: '2008',
      logo: '🏗️',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
      description: 'Katta qurilish loyihalarini amalga oshiruvchi kompaniya. Mavsumiy qurilish ishlarida tajribali.',
      jobs: ['Qurilish yordamchisi', 'G\'isht teruvchi', 'Betonchi']
    },
    {
      id: 4,
      name: 'Uzbekistan Tours',
      industry: 'Turizm',
      location: 'Samarqand shahri',
      employees: '30-50',
      rating: 4.9,
      totalJobs: 67,
      activeJobs: 6,
      established: '2012',
      logo: '🏛️',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400',
      description: 'O\'zbekistonning tarixiy shaharlarida turizm xizmatlarini ko\'rsatuvchi kompaniya.',
      jobs: ['Turizm gidi', 'Tarjimon', 'Transport xizmati']
    },
    {
      id: 5,
      name: 'UzTextile Factory',
      industry: 'Tekstil',
      location: 'Namangan viloyati',
      employees: '200-500',
      rating: 4.5,
      totalJobs: 345,
      activeJobs: 15,
      established: '2005',
      logo: '🧵',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      description: 'Katta tekstil ishlab chiqarish korxonasi. Mavsumiy buyurtmalarda ko\'plab ishchilar bilan ishlaymiz.',
      jobs: ['Tikuvchi', 'Sifat nazorati', 'Mashina operatori']
    },
    {
      id: 6,
      name: 'Milliy Taomlar',
      industry: 'Ovqat xizmati',
      location: 'Buxoro shahri',
      employees: '50-100',
      rating: 4.4,
      totalJobs: 123,
      activeJobs: 9,
      established: '2018',
      logo: '🍽️',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      description: 'Milliy taomlar tayyorlash va restoran xizmatlarini ko\'rsatuvchi kompaniya.',
      jobs: ['Oshpaz', 'Ofitsiant', 'Yordamchi xodim']
    }
  ];

  const industries = ['Qishloq xo\'jaligi', 'Qurilish', 'Turizm', 'Tekstil', 'Ovqat xizmati', 'Transport'];
  const locations = ['Toshkent', 'Samarqand', 'Buxoro', 'Farg\'ona', 'Namangan', 'Andijon', 'Surxondaryo'];
  const companySizes = ['1-20', '20-50', '50-100', '100-200', '200+'];
  const ratings = ['4.5+', '4.0+', '3.5+', '3.0+'];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="employers-page">
      <div className="employers-header">
        <div className="container">
          <h1>Ish Beruvchilar</h1>
          <p>O'zbekistonning eng yaxshi mavsumiy ish beruvchi kompaniyalari</p>
        </div>
      </div>

      <div className="container">
        <div className="employers-content">
          <aside className="employers-filters">
            <h3>Filtrlar</h3>
            
            <div className="filter-group">
              <label>Soha</label>
              <select 
                value={filters.industry} 
                onChange={(e) => handleFilterChange('industry', e.target.value)}
              >
                <option value="">Barcha sohalar</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Hudud</label>
              <select 
                value={filters.location} 
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">Barcha hududlar</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Kompaniya hajmi</label>
              <select 
                value={filters.size} 
                onChange={(e) => handleFilterChange('size', e.target.value)}
              >
                <option value="">Har qanday hajm</option>
                {companySizes.map(size => (
                  <option key={size} value={size}>{size} xodim</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Reyting</label>
              <select 
                value={filters.rating} 
                onChange={(e) => handleFilterChange('rating', e.target.value)}
              >
                <option value="">Har qanday reyting</option>
                {ratings.map(rating => (
                  <option key={rating} value={rating}>{rating} ⭐</option>
                ))}
              </select>
            </div>

            <button className="filter-clear">Filtrlarni tozalash</button>
          </aside>

          <main className="employers-list">
            <div className="employers-count">
              <span>{employers.length} ta ish beruvchi topildi</span>
              <div className="sort-options">
                <select>
                  <option>Eng yaxshi reyting</option>
                  <option>Ko'p e'lonlar</option>
                  <option>Yangi kompaniyalar</option>
                </select>
              </div>
            </div>

            <div className="employers-grid">
              {employers.map(employer => (
                <div key={employer.id} className="employer-card">
                  <div className="employer-image">
                    <img src={employer.image} alt={employer.name} />
                    <div className="employer-logo">
                      <span>{employer.logo}</span>
                    </div>
                  </div>
                  
                  <div className="employer-info">
                    <div className="employer-header">
                      <h3>
                        <Link to={`/employer/${employer.id}`}>{employer.name}</Link>
                      </h3>
                      <div className="employer-meta">
                        <span className="industry">{employer.industry}</span>
                        <span className="location">📍 {employer.location}</span>
                      </div>
                    </div>

                    <div className="employer-stats">
                      <div className="stat">
                        <span className="stat-value">⭐ {employer.rating}</span>
                        <span className="stat-label">Reyting</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{employer.activeJobs}</span>
                        <span className="stat-label">Faol e'lon</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{employer.employees}</span>
                        <span className="stat-label">Xodim</span>
                      </div>
                    </div>

                    <p className="employer-description">{employer.description}</p>

                    <div className="employer-jobs">
                      <h4>Asosiy ish yo'nalishlari:</h4>
                      <div className="jobs-tags">
                        {employer.jobs.slice(0, 3).map(job => (
                          <span key={job} className="job-tag">{job}</span>
                        ))}
                      </div>
                    </div>

                    <div className="employer-actions">
                      <Link to={`/employer/${employer.id}`} className="btn-view">
                        Ko'rish
                      </Link>
                      <button className="btn-follow">Kuzatish</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Employers;
