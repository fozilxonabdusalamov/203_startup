import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WorkerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const [profile, setProfile] = useState({
    name: 'Sanjar Karimov',
    email: 'sanjar.karimov@example.com',
    phone: '+998 90 123 45 67',
    location: 'Toshkent viloyati, Qibray tumani',
    birthDate: '1985-03-15',
    experience: '5+ yil',
    specialization: 'Qishloq xo\'jaligi',
    description: 'Qishloq xo\'jaligida 5 yildan ortiq tajribaga ega mavsumiy ishchi. Barcha turdagi dala ishlarini yuqori sifat bilan bajaraman.',
    skills: ['Paxta terib olish', 'Meva yig\'ish', 'Traktor boshqarish'],
    languages: ['O\'zbek', 'Rus'],
    availability: 'Darhol boshlash mumkin',
    hourlyRate: '25000',
    dailyRate: '180000'
  });

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Profil</h1>
          <p>Sizning shaxsiy ma'lumotlaringiz va ko'nikmalaringiz</p>
        </div>
        
        <div className="profile-content">
          <div className="profile-section">
            <h2>Asosiy ma'lumotlar</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Ism familiya</label>
                <input type="text" value={profile.name} readOnly={!isEditing} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={profile.email} readOnly={!isEditing} />
              </div>
              <div className="form-group">
                <label>Telefon</label>
                <input type="tel" value={profile.phone} readOnly={!isEditing} />
              </div>
              <div className="form-group">
                <label>Joylashuv</label>
                <input type="text" value={profile.location} readOnly={!isEditing} />
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Professional ma'lumotlar</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Ixtisoslik</label>
                <select disabled={!isEditing} value={profile.specialization}>
                  <option>Qishloq xo'jaligi</option>
                  <option>Qurilish</option>
                  <option>Turizm</option>
                  <option>Tekstil</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tajriba</label>
                <select disabled={!isEditing} value={profile.experience}>
                  <option>1+ yil</option>
                  <option>3+ yil</option>
                  <option>5+ yil</option>
                  <option>10+ yil</option>
                </select>
              </div>
              <div className="form-group">
                <label>Soatlik narx (so'm)</label>
                <input type="number" value={profile.hourlyRate} readOnly={!isEditing} />
              </div>
              <div className="form-group">
                <label>Kunlik narx (so'm)</label>
                <input type="number" value={profile.dailyRate} readOnly={!isEditing} />
              </div>
            </div>
          </div>

          <div className="actions">
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="btn btn-primary">
                Tahrirlash
              </button>
            ) : (
              <div className="edit-actions">
                <button onClick={() => setIsEditing(false)} className="btn btn-primary">
                  Saqlash
                </button>
                <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                  Bekor qilish
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
