import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Saved.css';

const WorkerSaved = () => {
  const [savedJobs] = useState([
    {
      id: 1,
      title: 'Paxta terib olish ishi',
      company: 'Agrotek Farm',
      location: 'Surxondaryo viloyati',
      salary: '150,000 - 200,000 so\'m/kun',
      duration: '3 oy (Sentabr-Noyabr)',
      savedDate: '2025-09-22',
      urgent: true
    },
    {
      id: 2,
      title: 'Qurilish yordamchisi',
      company: 'BuildPro Construction',
      location: 'Toshkent shahri',
      salary: '180,000 - 250,000 so\'m/kun',
      duration: '6 oy (Mart-Avgust)',
      savedDate: '2025-09-20',
      urgent: false
    },
    {
      id: 3,
      title: 'Tekstil ishlab chiqarish',
      company: 'UzTextile Factory',
      location: 'Namangan viloyati',
      salary: '160,000 - 220,000 so\'m/kun',
      duration: '5 oy (Iyun-Oktabr)',
      savedDate: '2025-09-18',
      urgent: false
    }
  ]);

  const handleUnsave = (jobId) => {
    // Remove job from saved list
    console.log('Removing job from saved:', jobId);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Saqlangan ishlar</h1>
          <p>Sizni qiziqtirgan ishlar ro'yxati</p>
        </div>

        <div className="saved-jobs-list">
          {savedJobs.map(job => (
            <div key={job.id} className="saved-job-card">
              <div className="job-header">
                <div>
                  <h3>
                    <Link to={`/job/${job.id}`}>{job.title}</Link>
                    {job.urgent && <span className="urgent-badge">Shoshilinch</span>}
                  </h3>
                  <p className="company">{job.company}</p>
                </div>
                <button 
                  className="unsave-btn"
                  onClick={() => handleUnsave(job.id)}
                  title="Saqlanganlardanпочистит"
                >
                  ❤️
                </button>
              </div>

              <div className="job-details">
                <div className="detail-item">
                  <span className="label">📍 Joylashuv:</span>
                  <span className="value">{job.location}</span>
                </div>
                <div className="detail-item">
                  <span className="label">💰 Maosh:</span>
                  <span className="value">{job.salary}</span>
                </div>
                <div className="detail-item">
                  <span className="label">⏰ Muddati:</span>
                  <span className="value">{job.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="label">💾 Saqlangan:</span>
                  <span className="value">
                    {new Date(job.savedDate).toLocaleDateString('uz-UZ')}
                  </span>
                </div>
              </div>

              <div className="job-actions">
                <Link to={`/job/${job.id}`} className="btn btn-primary">
                  Ko'rish
                </Link>
                <button className="btn btn-outline">
                  Ariza berish
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleUnsave(job.id)}
                >
                  Olib tashlash
                </button>
              </div>
            </div>
          ))}
        </div>

        {savedJobs.length === 0 && (
          <div className="empty-state">
            <h3>Saqlangan ishlar yo'q</h3>
            <p>Yoqgan ishlaringizni keyinroq ko'rish uchun saqlang</p>
            <Link to="/seasonal-jobs" className="btn btn-primary">
              Ish izlash
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerSaved;
