import React, { useState } from 'react';

const WorkerSettings = () => {
  const [settings, setSettings] = useState({
    // Profile settings
    profileVisibility: 'public',
    showContactInfo: true,
    showRating: true,
    
    // Notification settings
    emailNotifications: true,
    smsNotifications: false,
    jobAlerts: true,
    messageAlerts: true,
    paymentAlerts: true,
    
    // Privacy settings
    showLocation: true,
    showExperience: true,
    allowDirectContact: true,
    
    // Work preferences
    preferredWorkType: 'seasonal',
    minDailyRate: '150000',
    maxWorkDistance: '100',
    availableDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    console.log('Saving settings:', settings);
    alert('Sozlamalar saqlandi!');
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Sozlamalar</h1>
          <p>Hisobingiz va bildirishnomalar sozlamalari</p>
        </div>

        <div className="settings-content">
          {/* Profile Settings */}
          <div className="settings-section">
            <h2>Profil sozlamalari</h2>
            
            <div className="setting-item">
              <label>Profil ko'rinishi</label>
              <select 
                value={settings.profileVisibility}
                onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
              >
                <option value="public">Hammaga ochiq</option>
                <option value="employers">Faqat ish beruvchilarga</option>
                <option value="private">Yashirin</option>
              </select>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.showContactInfo}
                  onChange={(e) => handleSettingChange('showContactInfo', e.target.checked)}
                />
                <span>Bog'lanish ma'lumotlarini ko'rsatish</span>
              </label>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.showRating}
                  onChange={(e) => handleSettingChange('showRating', e.target.checked)}
                />
                <span>Reytingni ko'rsatish</span>
              </label>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="settings-section">
            <h2>Bildirishnoma sozlamalari</h2>
            
            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                />
                <span>Email bildirishnomalar</span>
              </label>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.smsNotifications}
                  onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                />
                <span>SMS bildirishnomalar</span>
              </label>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.jobAlerts}
                  onChange={(e) => handleSettingChange('jobAlerts', e.target.checked)}
                />
                <span>Yangi ish e'lonlari haqida xabar berish</span>
              </label>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.messageAlerts}
                  onChange={(e) => handleSettingChange('messageAlerts', e.target.checked)}
                />
                <span>Yangi xabarlar haqida bildirishnoma</span>
              </label>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.paymentAlerts}
                  onChange={(e) => handleSettingChange('paymentAlerts', e.target.checked)}
                />
                <span>To'lovlar haqida xabar berish</span>
              </label>
            </div>
          </div>

          {/* Work Preferences */}
          <div className="settings-section">
            <h2>Ish afzalliklari</h2>
            
            <div className="setting-item">
              <label>Afzal ko'rilgan ish turi</label>
              <select 
                value={settings.preferredWorkType}
                onChange={(e) => handleSettingChange('preferredWorkType', e.target.value)}
              >
                <option value="seasonal">Mavsumiy ish</option>
                <option value="permanent">Doimiy ish</option>
                <option value="temporary">Vaqtinchalik ish</option>
                <option value="any">Har qanday</option>
              </select>
            </div>

            <div className="setting-item">
              <label>Minimal kunlik narx (so'm)</label>
              <input
                type="number"
                value={settings.minDailyRate}
                onChange={(e) => handleSettingChange('minDailyRate', e.target.value)}
                min="0"
              />
            </div>

            <div className="setting-item">
              <label>Maksimal ish masofasi (km)</label>
              <input
                type="number"
                value={settings.maxWorkDistance}
                onChange={(e) => handleSettingChange('maxWorkDistance', e.target.value)}
                min="0"
              />
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="settings-section">
            <h2>Maxfiylik sozlamalari</h2>
            
            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.showLocation}
                  onChange={(e) => handleSettingChange('showLocation', e.target.checked)}
                />
                <span>Joylashuvni ko'rsatish</span>
              </label>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.showExperience}
                  onChange={(e) => handleSettingChange('showExperience', e.target.checked)}
                />
                <span>Tajribani ko'rsatish</span>
              </label>
            </div>

            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.allowDirectContact}
                  onChange={(e) => handleSettingChange('allowDirectContact', e.target.checked)}
                />
                <span>To'g'ridan-to'g'ri bog'lanishga ruxsat berish</span>
              </label>
            </div>
          </div>

          {/* Account Actions */}
          <div className="settings-section">
            <h2>Hisob amallar</h2>
            
            <div className="account-actions">
              <button className="btn btn-outline">
                Parolni o'zgartirish
              </button>
              <button className="btn btn-outline">
                Ma'lumotlarni eksport qilish
              </button>
              <button className="btn btn-danger">
                Hisobni o'chirish
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="settings-actions">
            <button onClick={saveSettings} className="btn btn-primary">
              Sozlamalarni saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerSettings;
