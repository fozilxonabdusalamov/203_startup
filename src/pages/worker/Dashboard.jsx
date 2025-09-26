import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const WorkerDashboard = () => {
  const [stats] = useState({
    totalJobs: 12,
    completedJobs: 8,
    activeApplications: 3,
    totalEarnings: '15,600,000',
    currentSeason: 'Kuz mavsumi 2025',
    rating: 4.7
  });

  const recentActivities = [
    {
      id: 1,
      type: 'application',
      title: 'Paxta terib olish ishi uchun ariza berdiniz',
      company: 'Agrotek Farm',
      date: '2 kun oldin',
      status: 'pending'
    },
    {
      id: 2,
      type: 'job_completed',
      title: 'Meva yig\'ish ishi muvaffaqiyatli yakunlandi',
      company: 'GreenHarvest',
      date: '1 hafta oldin',
      status: 'completed'
    },
    {
      id: 3,
      type: 'message',
      title: 'UzTextile Factory sizga xabar yubordi',
      company: 'UzTextile Factory',
      date: '3 kun oldin',
      status: 'new'
    }
  ];

  const upcomingJobs = [
    {
      id: 1,
      title: 'Paxta terib olish',
      company: 'Agrotek Farm',
      startDate: '15 Oktabr',
      duration: '2 oy',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Qurilish yordamchisi',
      company: 'BuildPro',
      startDate: '1 Noyabr',
      duration: '3 oy',
      status: 'pending'
    }
  ];

  return (
    <div className="worker-dashboard">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Xush kelibsiz, Sanjar!</h1>
            <p>Sizning mavsumiy ish faoliyatingiz umumiy ko'rinishi</p>
          </div>
          <div className="season-indicator">
            <span className="season-badge">{stats.currentSeason}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div className="stat-info">
              <h3>{stats.totalJobs}</h3>
              <p>Jami ishlar</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h3>{stats.completedJobs}</h3>
              <p>Yakunlangan</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-info">
              <h3>{stats.activeApplications}</h3>
              <p>Faol arizalar</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <h3>{stats.totalEarnings} so'm</h3>
              <p>Jami daromad</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <h3>{stats.rating}</h3>
              <p>Reyting</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          {/* Recent Activities */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>So'nggi faoliyat</h2>
              <Link to="/w/applications" className="view-all">Barchasini ko'rish</Link>
            </div>
            
            <div className="activities-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className={`activity-item ${activity.status}`}>
                  <div className="activity-icon">
                    {activity.type === 'application' && '📝'}
                    {activity.type === 'job_completed' && '✅'}
                    {activity.type === 'message' && '💬'}
                  </div>
                  <div className="activity-content">
                    <h4>{activity.title}</h4>
                    <p>{activity.company}</p>
                    <span className="activity-date">{activity.date}</span>
                  </div>
                  <div className={`activity-status ${activity.status}`}>
                    {activity.status === 'pending' && 'Kutilmoqda'}
                    {activity.status === 'completed' && 'Yakunlandi'}
                    {activity.status === 'new' && 'Yangi'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Jobs */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Kelgusi ishlar</h2>
              <Link to="/seasonal-jobs" className="view-all">Yangi ishlar topish</Link>
            </div>
            
            <div className="upcoming-jobs">
              {upcomingJobs.map(job => (
                <div key={job.id} className="job-item">
                  <div className="job-info">
                    <h4>{job.title}</h4>
                    <p>{job.company}</p>
                    <div className="job-details">
                      <span>📅 {job.startDate}</span>
                      <span>⏰ {job.duration}</span>
                    </div>
                  </div>
                  <div className={`job-status ${job.status}`}>
                    {job.status === 'confirmed' && 'Tasdiqlangan'}
                    {job.status === 'pending' && 'Kutilmoqda'}
                  </div>
                </div>
              ))}
              
              {upcomingJobs.length === 0 && (
                <div className="empty-state">
                  <p>Hozircha kelgusi ishlaringiz yo'q</p>
                  <Link to="/seasonal-jobs" className="btn-primary">
                    Ish izlash
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Tezkor amallar</h2>
            </div>
            
            <div className="quick-actions">
              <Link to="/seasonal-jobs" className="action-card">
                <h4>Ish izlash</h4>
                <p>Yangi mavsumiy ishlarni toping</p>
              </Link>
              
              <Link to="/w/profile" className="action-card">
                <div className="action-icon">👤</div>
                <h4>Profilni yangilash</h4>
                <p>Ko'nikmalar va tajribani qo'shing</p>
              </Link>
              
              <Link to="/w/messages" className="action-card">
                <div className="action-icon">💬</div>
                <h4>Xabarlar</h4>
                <p>Ish beruvchilar bilan bog'laning</p>
              </Link>
              
              <Link to="/w/applications" className="action-card">
                <div className="action-icon">📋</div>
                <h4>Arizalarim</h4>
                <p>Yuborgan arizalarni kuzating</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
