import React, { useState } from 'react';
import './SeasonalJobs.css';

const SeasonalJobs = () => {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    salary: '',
    duration: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Paxta terib olish ishi',
      company: 'Agrotek Farm',
      location: 'Surxondaryo viloyati',
      category: 'Qishloq xo\'jaligi',
      salary: '150,000 - 200,000',
      duration: '3 oy (Sentabr - Noyabr)',
      posted: '2 kun oldin',
      applications: 45,
      description: 'Paxta terib olish mavsumi uchun tajribali ishchilar talab qilinadi. Ish soatlari: 07:00-18:00, dam olish kunlari bilan.',
      requirements: ['Jismoniy bardoshlik', 'Oldingi tajriba afzal', '18+ yosh'],
      benefits: ['Bepul turar joy', 'Ovqat ta\'minoti', 'Transport xizmati', 'Sug\'urta'],
      image: 'https://images.unsplash.com/photo-1566383434817-99d723b3b2a7?w=300'
    },
    {
      id: 2,
      title: 'Qurilish yordamchisi',
      company: 'BuildPro Construction',
      location: 'Toshkent shahri',
      category: 'Qurilish',
      salary: '180,000 - 250,000',
      duration: '6 oy (Mart - Avgust)',
      posted: '1 kun oldin',
      applications: 32,
      description: 'Katta qurilish loyihasi uchun yordamchi ishchilar talab qilinadi. Turar-joy binosi qurish.',
      requirements: ['Qurilish tajribasi', 'Balandlikdan qo\'rqmaslik', 'Tibbiy ma\'lumotnoma'],
      benefits: ['Yuqori maosh', 'Haftalik pul to\'lash', 'Himoya vositalari', 'Bonus to\'lovlar'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300'
    },
    {
      id: 3,
      title: 'Meva-sabzavot yig\'ish',
      company: 'GreenHarvest',
      location: 'Farg\'ona viloyati',
      category: 'Qishloq xo\'jaligi',
      salary: '120,000 - 180,000',
      duration: '4 oy (May - Avgust)',
      posted: '3 kun oldin',
      applications: 67,
      description: 'Olma, o\'rik, va boshqa mevalar yig\'ish uchun ishchilar kerak. Toza havo va go\'zal muhitda ish.',
      requirements: ['Erta turish', 'Tez ishlash qobiliyati', 'Jamoaviy ish'],
      benefits: ['Toza mahsulotlar', 'Qishloq muhiti', 'Sog\'liq uchun foydali', 'Yaxshi jamoa'],
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300'
    },
    {
      id: 4,
      title: 'Turizm gidi',
      company: 'Uzbekistan Tours',
      location: 'Samarqand shahri',
      category: 'Turizm',
      salary: '200,000 - 300,000',
      duration: '8 oy (Mart - Oktabr)',
      posted: '1 hafta oldin',
      applications: 28,
      description: 'Turist guruhlarni boshqarish va shahar bo\'ylab sayohat tashkil qilish. Ingliz tili bilimi shart.',
      requirements: ['Ingliz tili', 'Samarqand tarixi bilimi', 'Kommunikablik', 'Litsenziya'],
      benefits: ['Yuqori maosh', 'Chet el sayyohlari', 'Til amaliyoti', 'Bonus tips'],
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300'
    },
    {
      id: 5,
      title: 'Tekstil ishlab chiqarish',
      company: 'UzTextile Factory',
      location: 'Namangan viloyati',
      category: 'Tekstil',
      salary: '160,000 - 220,000',
      duration: '5 oy (Iyun - Oktabr)',
      posted: '4 kun oldin',
      applications: 89,
      description: 'Yirik buyurtma uchun qo\'shimcha ishchilar kerak. Tikuvchilik va sifat nazorati ishlarida.',
      requirements: ['Tikuvchilik tajribasi', 'Diqqatlilik', 'Tezlik', 'Ko\'z-qo\'l muvofiqligi'],
      benefits: ['Barqaror ish', 'Ustaxona sharoiti', 'O\'qitish', 'Karyera o\'sishi'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300'
    },
    {
      id: 6,
      title: 'Restoran xodimlari',
      company: 'Milliy Taomlar',
      location: 'Buxoro shahri',
      category: 'Ovqat xizmati',
      salary: '140,000 - 190,000',
      duration: '6 oy (Aprel - Sentabr)',
      posted: '2 hafta oldin',
      applications: 156,
      description: 'Turist mavsumi uchun ofitsiantlar, oshpazlar va yordamchi xodimlar talab qilinadi.',
      requirements: ['Xizmat ko\'rsatish tajribasi', 'Toza ko\'rinish', 'Mehribonlik', 'Til bilimi afzal'],
      benefits: ['Tips puli', 'Ovqat ta\'minoti', 'Yaxshi jamoa', 'Turist aloqasi'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300'
    }
  ];

  const categories = ['Qishloq xo\'jaligi', 'Qurilish', 'Turizm', 'Tekstil', 'Ovqat xizmati', 'Transport'];
  const locations = ['Toshkent', 'Samarqand', 'Buxoro', 'Farg\'ona', 'Namangan', 'Andijon', 'Surxondaryo'];
  const salaryRanges = ['100,000+', '150,000+', '200,000+', '250,000+'];
  const durations = ['1-3 oy', '3-6 oy', '6+ oy'];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="seasonal-jobs-page">
      <div className="jobs-header">
        <div className="container">
          <h1>Mavsumiy Ish O'rinlari</h1>
          <p>O'zbekiston bo'ylab eng yaxshi mavsumiy ish imkoniyatlarini toping</p>
        </div>
      </div>

      <div className="container">
        <div className="jobs-content">
          <aside className="jobs-filters">
            <h3>Filtrlar</h3>
            
            <div className="filter-group">
              <label>Soha</label>
              <select 
                value={filters.category} 
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">Barcha sohalar</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
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
              <label>Maosh</label>
              <select 
                value={filters.salary} 
                onChange={(e) => handleFilterChange('salary', e.target.value)}
              >
                <option value="">Har qanday maosh</option>
                {salaryRanges.map(range => (
                  <option key={range} value={range}>{range} so'm</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Muddat</label>
              <select 
                value={filters.duration} 
                onChange={(e) => handleFilterChange('duration', e.target.value)}
              >
                <option value="">Istalgan muddat</option>
                {durations.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            <button className="filter-clear">Filtrlarni tozalash</button>
          </aside>

          <main className="jobs-list">
            <div className="jobs-count">
              <span>{jobs.length} ta mavsumiy ish topildi</span>
              <div className="sort-options">
                <select>
                  <option>Yangi e'lonlar</option>
                  <option>Yuqori maosh</option>
                  <option>Ko'p ariza</option>
                </select>
              </div>
            </div>

            <div className="jobs-grid">
              {jobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-image">
                    <img src={job.image} alt={job.title} />
                    <div className="job-category">{job.category}</div>
                  </div>
                  
                  <div className="job-info">
                    <div className="job-header">
                      <h3>{job.title}</h3>
                      <div className="job-meta">
                        <span className="company">{job.company}</span>
                        <span className="location">📍 {job.location}</span>
                      </div>
                    </div>

                    <div className="job-details">
                      <div className="job-detail">
                        <span className="label">💰 Maosh:</span>
                        <span className="value">{job.salary} so'm</span>
                      </div>
                      <div className="job-detail">
                        <span className="label">⏰ Muddat:</span>
                        <span className="value">{job.duration}</span>
                      </div>
                    </div>

                    <p className="job-description">{job.description}</p>

                    <div className="job-requirements">
                      <h4>Talablar:</h4>
                      <ul>
                        {job.requirements.slice(0, 3).map(req => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="job-benefits">
                      <h4>Imtiyozlar:</h4>
                      <div className="benefits-list">
                        {job.benefits.slice(0, 4).map(benefit => (
                          <span key={benefit} className="benefit-tag">{benefit}</span>
                        ))}
                      </div>
                    </div>

                    <div className="job-stats">
                      <span className="posted">🕒 {job.posted}</span>
                      <span className="applications">👥 {job.applications} ta ariza</span>
                    </div>

                    <div className="job-actions">
                      <button className="btn-apply">Ariza berish</button>
                      <button className="btn-save">Saqlash</button>
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

export default SeasonalJobs;
