import React, { useState } from 'react';
import './Workers.css';

const Workers = () => {
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
    availability: ''
  });

  const workers = [
    {
      id: 1,
      name: 'Sanjar Karimov',
      location: 'Toshkent',
      experience: '5+ yil tajriba',
      speciality: 'Qishloq xo\'jaligi',
      availability: 'Darhol boshlash mumkin',
      rating: 4.8,
      completedJobs: 45,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      skills: ['Paxta terib olish', 'Meva yig\'ish', 'Traktor boshqarish'],
      description: 'Qishloq xo\'jaligida keng tajribaga ega mavsumiy ishchi. Barcha turdagi dala ishlarini yuqori sifat bilan bajaraman.'
    },
    {
      id: 2,
      name: 'Dilshod Rustamov',
      location: 'Samarqand',
      experience: '3+ yil tajriba',
      speciality: 'Qurilish',
      availability: 'Keyingi hafta',
      rating: 4.6,
      completedJobs: 32,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      skills: ['G\'isht terish', 'Betonchi', 'Usta yordamchisi'],
      description: 'Qurilish sohasida tajribali ishchi. Mavsumiy qurilish loyihalarida ishtirok etishga tayyor.'
    },
    {
      id: 3,
      name: 'Aziza Saidova',
      location: 'Farg\'ona',
      experience: '4+ yil tajriba',
      speciality: 'Tekstil',
      availability: 'Darhol boshlash mumkin',
      rating: 4.9,
      completedJobs: 67,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      skills: ['Tikuvchilik', 'Sifat nazorati', 'Mashina operatori'],
      description: 'Tekstil sanoatida tajribali mutaxassis. Mavsumiy buyurtmalar ustida ishlashga tayyor.'
    },
    {
      id: 4,
      name: 'Rustam Nazarov',
      location: 'Andijon',
      experience: '6+ yil tajriba',
      speciality: 'Turizm',
      availability: 'Mart oyidan',
      rating: 4.7,
      completedJobs: 89,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150',
      skills: ['Gid', 'Tarjimon', 'Haydovchi'],
      description: 'Turizm sohasida ko\'p yillik tajriba. Mavsumiy turist guruhlar bilan ishlashga ixtisoslashgan.'
    },
    {
      id: 5,
      name: 'Malika Yo\'ldosheva',
      location: 'Namangan',
      experience: '2+ yil tajriba',
      speciality: 'Ovqat tayyorlash',
      availability: 'Darhol boshlash mumkin',
      rating: 4.5,
      completedJobs: 23,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=150',
      skills: ['Milliy taomlar', 'Oshpaz yordamchisi', 'Catering'],
      description: 'Ovqat tayyorlash sohasida tajriba. Mavsumiy tadbirlar va kafe-restoranlarda ishlashga tayyor.'
    },
    {
      id: 6,
      name: 'Bobur Komilov',
      location: 'Jizzax',
      experience: '7+ yil tajriba',
      speciality: 'Transport',
      availability: 'Keyingi oy',
      rating: 4.8,
      completedJobs: 156,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
      skills: ['Yuk tashish', 'Logistika', 'B, C kategoriya'],
      description: 'Transport sohasida keng tajriba. Mavsumiy yuk tashish va logistika xizmatlarini ko\'rsataman.'
    }
  ];

  const jobTypes = ['Qishloq xo\'jaligi', 'Qurilish', 'Tekstil', 'Turizm', 'Ovqat tayyorlash', 'Transport'];
  const locations = ['Toshkent', 'Samarqand', 'Farg\'ona', 'Andijon', 'Namangan', 'Jizzax', 'Buxoro'];
  const experienceLevels = ['1+ yil', '2+ yil', '3+ yil', '4+ yil', '5+ yil'];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="workers-page">
      <div className="workers-header">
        <div className="container">
          <h1>Mavsumiy Ishchilar</h1>
          <p>Eng yaxshi mavsumiy ishchilar bilan tanishing va ularni o'z loyihalaringizga taklif qiling</p>
        </div>
      </div>

      <div className="container">
        <div className="workers-content">
          <aside className="workers-filters">
            <h3>Filtrlar</h3>
            
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
              <label>Soha</label>
              <select 
                value={filters.jobType} 
                onChange={(e) => handleFilterChange('jobType', e.target.value)}
              >
                <option value="">Barcha sohalar</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Tajriba</label>
              <select 
                value={filters.experience} 
                onChange={(e) => handleFilterChange('experience', e.target.value)}
              >
                <option value="">Har qanday tajriba</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Mavjudlik</label>
              <select 
                value={filters.availability} 
                onChange={(e) => handleFilterChange('availability', e.target.value)}
              >
                <option value="">Istalgan vaqt</option>
                <option value="Darhol boshlash mumkin">Darhol boshlash mumkin</option>
                <option value="Keyingi hafta">Keyingi hafta</option>
                <option value="Keyingi oy">Keyingi oy</option>
              </select>
            </div>

            <button className="filter-clear">Filtrlarni tozalash</button>
          </aside>

          <main className="workers-list">
            <div className="workers-count">
              <span>{workers.length} ta mavsumiy ishchi topildi</span>
            </div>

            <div className="workers-grid">
              {workers.map(worker => (
                <div key={worker.id} className="worker-card">
                  <div className="worker-avatar">
                    <img src={worker.image} alt={worker.name} />
                    <div className="worker-status available"></div>
                  </div>
                  
                  <div className="worker-info">
                    <h3>{worker.name}</h3>
                    <p className="worker-location">📍 {worker.location}</p>
                    <p className="worker-speciality">{worker.speciality}</p>
                    <p className="worker-experience">{worker.experience}</p>
                    
                    <div className="worker-stats">
                      <span className="rating">
                        ⭐ {worker.rating}
                      </span>
                      <span className="completed-jobs">
                        ✅ {worker.completedJobs} ta ish
                      </span>
                    </div>

                    <div className="worker-skills">
                      {worker.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>

                    <p className="worker-description">{worker.description}</p>
                    
                    <div className="worker-availability">
                      <span className="availability-status">
                        🕒 {worker.availability}
                      </span>
                    </div>

                    <div className="worker-actions">
                      <button className="btn-contact">Bog'lanish</button>
                      <button className="btn-invite">Taklif qilish</button>
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

export default Workers;
