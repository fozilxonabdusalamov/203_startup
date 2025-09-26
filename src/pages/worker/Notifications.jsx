import React, { useState } from 'react';

const WorkerNotifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: 'job_accepted',
      title: 'Arizangiz qabul qilindi!',
      message: 'Agrotek Farm sizning paxta terib olish ishi uchun arizangizni qabul qildi.',
      timestamp: '2025-09-24 15:30',
      read: false,
      urgent: true
    },
    {
      id: 2,
      type: 'message',
      title: 'Yangi xabar',
      message: 'BuildPro Construction sizga xabar yubordi.',
      timestamp: '2025-09-24 10:15',
      read: false,
      urgent: false
    },
    {
      id: 3,
      type: 'job_reminder',
      title: 'Ish eslatmasi',
      message: 'Ertaga GreenHarvest da ish boshlanadi.',
      timestamp: '2025-09-23 20:00',
      read: true,
      urgent: false
    },
    {
      id: 4,
      type: 'payment',
      title: 'To\'lov qabul qilindi',
      message: 'Oxirgi ish uchun to\'lov 1,800,000 so\'m qabul qilindi.',
      timestamp: '2025-09-22 14:45',
      read: true,
      urgent: false
    },
    {
      id: 5,
      type: 'job_completed',
      title: 'Ish yakunlandi',
      message: 'UzTextile Factory da ishingiz muvaffaqiyatli yakunlandi.',
      timestamp: '2025-09-21 18:30',
      read: true,
      urgent: false
    }
  ]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'job_accepted': return '✅';
      case 'message': return '💬';
      case 'job_reminder': return '⏰';
      case 'payment': return '💰';
      case 'job_completed': return '🎉';
      default: return '📢';
    }
  };

  const markAsRead = (id) => {
    console.log('Mark notification as read:', id);
  };

  const deleteNotification = (id) => {
    console.log('Delete notification:', id);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Bildirishnomalar</h1>
          <p>Sizning faoliyatingiz haqidagi yangiliklar</p>
        </div>

        <div className="notifications-actions">
          <button className="btn btn-outline">
            Barchasini o'qilgan qilib belgilash
          </button>
          <button className="btn btn-danger">
            Barchasini tozalash
          </button>
        </div>

        <div className="notifications-list">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${notification.read ? 'read' : 'unread'} ${notification.urgent ? 'urgent' : ''}`}
            >
              <div className="notification-icon">
                {getNotificationIcon(notification.type)}
              </div>
              
              <div className="notification-content">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <span className="notification-time">
                  {new Date(notification.timestamp).toLocaleString('uz-UZ')}
                </span>
              </div>

              <div className="notification-actions">
                {!notification.read && (
                  <button 
                    className="action-btn read-btn"
                    onClick={() => markAsRead(notification.id)}
                    title="O'qilgan deb belgilash"
                  >
                    👁️
                  </button>
                )}
                <button 
                  className="action-btn delete-btn"
                  onClick={() => deleteNotification(notification.id)}
                  title="O'chirish"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="empty-state">
            <h3>Bildirishnomalar yo'q</h3>
            <p>Yangi bildirishnomalar bu yerda ko'rinadi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerNotifications;
