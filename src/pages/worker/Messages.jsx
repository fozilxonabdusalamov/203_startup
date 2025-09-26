import React, { useState } from 'react';

const WorkerMessages = () => {
  const [conversations] = useState([
    {
      id: 1,
      employer: 'Agrotek Farm',
      lastMessage: 'Sizning arizangiz ko\'rib chiqilmoqda. Tez orada javob beramiz.',
      timestamp: '2025-09-24 14:30',
      unread: true,
      avatar: '🌾'
    },
    {
      id: 2,
      employer: 'BuildPro Construction',
      lastMessage: 'Ish boshlash sanasi haqida gaplashishimiz kerak.',
      timestamp: '2025-09-23 09:15',
      unread: false,
      avatar: '🏗️'
    },
    {
      id: 3,
      employer: 'GreenHarvest',
      lastMessage: 'Rahmat! Sizning ishingiz juda yaxshi baholandi.',
      timestamp: '2025-09-22 16:45',
      unread: false,
      avatar: '🍎'
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState(null);

  const messages = {
    1: [
      {
        id: 1,
        sender: 'employer',
        text: 'Assalomu alaykum, sizning paxta terib olish ishi uchun arizangizni oldik.',
        timestamp: '2025-09-24 14:15'
      },
      {
        id: 2,
        sender: 'employer',
        text: 'Sizning arizangiz ko\'rib chiqilmoqda. Tez orada javob beramiz.',
        timestamp: '2025-09-24 14:30'
      }
    ],
    2: [
      {
        id: 1,
        sender: 'employer',
        text: 'Salom! Sizni ishga qabul qildik.',
        timestamp: '2025-09-23 09:10'
      },
      {
        id: 2,
        sender: 'worker',
        text: 'Rahmat! Qachon boshlashim mumkin?',
        timestamp: '2025-09-23 09:12'
      },
      {
        id: 3,
        sender: 'employer',
        text: 'Ish boshlash sanasi haqida gaplashishimiz kerak.',
        timestamp: '2025-09-23 09:15'
      }
    ]
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Xabarlar</h1>
          <p>Ish beruvchilar bilan muloqot</p>
        </div>

        <div className="messages-container">
          <div className="conversations-list">
            {conversations.map(conv => (
              <div 
                key={conv.id} 
                className={`conversation-item ${conv.unread ? 'unread' : ''} ${selectedConversation === conv.id ? 'active' : ''}`}
                onClick={() => setSelectedConversation(conv.id)}
              >
                <div className="conversation-avatar">
                  {conv.avatar}
                </div>
                <div className="conversation-info">
                  <h4>{conv.employer}</h4>
                  <p className="last-message">{conv.lastMessage}</p>
                  <span className="timestamp">
                    {new Date(conv.timestamp).toLocaleString('uz-UZ')}
                  </span>
                </div>
                {conv.unread && <div className="unread-indicator"></div>}
              </div>
            ))}
          </div>

          <div className="chat-area">
            {selectedConversation ? (
              <>
                <div className="chat-header">
                  <h3>{conversations.find(c => c.id === selectedConversation)?.employer}</h3>
                </div>
                <div className="messages-list">
                  {(messages[selectedConversation] || []).map(message => (
                    <div 
                      key={message.id} 
                      className={`message ${message.sender === 'worker' ? 'own' : 'other'}`}
                    >
                      <div className="message-content">
                        <p>{message.text}</p>
                        <span className="message-time">
                          {new Date(message.timestamp).toLocaleTimeString('uz-UZ', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="message-input">
                  <input 
                    type="text" 
                    placeholder="Xabar yozing..."
                    className="message-text-input"
                  />
                  <button className="send-btn">Yuborish</button>
                </div>
              </>
            ) : (
              <div className="no-conversation">
                <p>Suhbat tanlang yoki yangi xabar yozing</p>
              </div>
            )}
          </div>
        </div>

        {conversations.length === 0 && (
          <div className="empty-state">
            <h3>Hali xabarlar yo'q</h3>
            <p>Ish beruvchilar bilan bog'langandan keyin xabarlar bu yerda ko'rinadi</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerMessages;
