import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WorkerApplications = () => {
  const [applications] = useState([
    {
      id: 1,
      jobTitle: 'Paxta terib olish ishi',
      company: 'Agrotek Farm',
      appliedDate: '2025-09-20',
      status: 'pending',
      salary: '180,000 so\'m/kun',
      location: 'Surxondaryo viloyati',
      duration: '3 oy'
    },
    {
      id: 2,
      jobTitle: 'Meva yig\'ish ishi',
      company: 'GreenHarvest',
      appliedDate: '2025-09-18',
      status: 'accepted',
      salary: '150,000 so\'m/kun',
      location: 'Farg\'ona viloyati',
      duration: '2 oy'
    },
    {
      id: 3,
      jobTitle: 'Turizm gidi',
      company: 'Uzbekistan Tours',
      appliedDate: '2025-09-15',
      status: 'rejected',
      salary: '250,000 so\'m/kun',
      location: 'Samarqand shahri',
      duration: '6 oy'
    }
  ]);

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Kutilmoqda';
      case 'accepted': return 'Qabul qilindi';
      case 'rejected': return 'Rad etildi';
      default: return status;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'accepted': return 'success';
      case 'rejected': return 'danger';
      default: return '';
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Mening arizalarim</h1>
          <p>Yuborgan arizalaringiz va ularning holati</p>
        </div>

        <div className="applications-list">
          {applications.map(application => (
            <div key={application.id} className="application-card">
              <div className="application-header">
                <h3>{application.jobTitle}</h3>
                <span className={`status-badge ${getStatusClass(application.status)}`}>
                  {getStatusText(application.status)}
                </span>
              </div>
              
              <div className="application-info">
                <p className="company">{application.company}</p>
                <div className="application-details">
                  <span>💰 {application.salary}</span>
                  <span>📍 {application.location}</span>
                  <span>⏰ {application.duration}</span>
                </div>
                <p className="applied-date">
                  Yuborilgan sana: {new Date(application.appliedDate).toLocaleDateString('uz-UZ')}
                </p>
              </div>

              <div className="application-actions">
                <Link to={`/job/${application.id}`} className="btn btn-outline">
                  Ko'rish
                </Link>
                {application.status === 'pending' && (
                  <button className="btn btn-danger">Bekor qilish</button>
                )}
              </div>
            </div>
          ))}
        </div>

        {applications.length === 0 && (
          <div className="empty-state">
            <h3>Hali arizalar yo'q</h3>
            <p>Mavsumiy ishlar uchun ariza berishni boshlang</p>
            <Link to="/seasonal-jobs" className="btn btn-primary">
              Ish izlash
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerApplications;
