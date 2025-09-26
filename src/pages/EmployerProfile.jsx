import React from "react";
import "./EmployerProfile.css";

const EmployerProfile = () => {
  // Mock employer data
  const employer = {
    id: 1,
    name: "Agrotek Farm",
    industry: "Qishloq xo'jaligi",
    location: "Surxondaryo viloyati, Termiz tumani",
    established: "2010",
    employees: "50-100",
    website: "www.agrotek.uz",
    phone: "+998 90 123 45 67",
    email: "info@agrotek.uz",
    rating: 4.7,
    totalJobs: 156,
    activeJobs: 8,
    logo: "🌾",
    coverImage:
      "https://images.unsplash.com/photo-1566383434817-99d723b3b2a7?w=800",
    description: `Agrotek Farm - O'zbekistonning yetakchi qishloq xo'jaligi korxonalaridan biri. 2010 yildan beri faoliyat ko'rsatib kelamiz va mavsumiy ishchilar bilan muvaffaqiyatli hamkorlik qilamiz.

    Bizning asosiy faoliyat yo'nalishlarimiz:
    • Paxta yetishtirish va qayta ishlash
    • Meva-sabzavot mahsulotlari
    • Chorvachilik
    • Qishloq xo'jaligi texnikalari xizmati

    Har yili 200+ mavsumiy ishchi bilan ishlaymiz va ularga barcha zarur sharoitlarni yaratamiz.`,
    benefits: [
      "Raqobatbardosh maosh",
      "Bepul turar joy",
      "3 vaqt ovqat",
      "Transport xizmati",
      "Tibbiy sug'urta",
      "Bonus to'lovlar",
    ],
    jobs: [
      {
        id: 1,
        title: "Paxta teruvchi",
        type: "Mavsumiy ish",
        salary: "150,000 - 200,000 so'm/kun",
        duration: "3 oy (Sentabr-Noyabr)",
        posted: "2 kun oldin",
        applicants: 45,
      },
      {
        id: 2,
        title: "Traktor operatori",
        type: "Mavsumiy ish",
        salary: "250,000 - 350,000 so'm/kun",
        duration: "6 oy (Mart-Avgust)",
        posted: "1 hafta oldin",
        applicants: 23,
      },
      {
        id: 3,
        title: "Chorvachilik xodimi",
        type: "To'liq vaqt",
        salary: "4,000,000 - 5,500,000 so'm/oy",
        duration: "Doimiy",
        posted: "3 kun oldin",
        applicants: 12,
      },
    ],
    reviews: [
      {
        worker: "Sanjar Karimov",
        rating: 5,
        date: "2023 Noyabr",
        position: "Paxta teruvchi",
        comment:
          "Juda yaxshi kompaniya! Maoshni vaqtida to'laydi, ish sharoitlari yaxshi. Kelgusi yil yana ishlashni rejalashtirmoqdaman.",
      },
      {
        worker: "Dilnoza Saidova",
        rating: 5,
        date: "2023 Oktabr",
        position: "Meva yig'uvchi",
        comment:
          "Mehmondo'st rahbariyat, yaxshi kollektiv. Barcha va'dalarini bajardi. Tavsiya qilaman!",
      },
      {
        worker: "Aziz Rahimov",
        rating: 4,
        date: "2023 Sentabr",
        position: "Traktor operatori",
        comment:
          "Yaxshi ish beruvchi. Faqat turar joy biroz yaxshilansa yaxshi bo'lar edi.",
      },
    ],
  };

  return (
    <div className="employer-profile-page">
      {/* Cover Image */}
      <div className="employer-cover">
        <img src={employer.coverImage} alt={employer.name} />
        <div className="cover-overlay"></div>
      </div>

      <div className="container">
        {/* Employer Header */}
        <div className="employer-header">
          <div className="employer-logo">
            <span className="logo-emoji">{employer.logo}</span>
          </div>

          <div className="employer-info">
            <h1>{employer.name}</h1>
            <p className="industry">{employer.industry}</p>
            <p className="location">📍 {employer.location}</p>

            <div className="employer-stats">
              <div className="stat">
                <span className="stat-value">⭐ {employer.rating}</span>
                <span className="stat-label">Reyting</span>
              </div>
              <div className="stat">
                <span className="stat-value">💼 {employer.activeJobs}</span>
                <span className="stat-label">Faol e'lonlar</span>
              </div>
              <div className="stat">
                <span className="stat-value">👥 {employer.employees}</span>
                <span className="stat-label">Xodimlar</span>
              </div>
              <div className="stat">
                <span className="stat-value">📅 {employer.established}</span>
                <span className="stat-label">Tashkil etilgan</span>
              </div>
            </div>
          </div>

          <div className="employer-actions">
            <button className="btn-primary">Ariza berish</button>
            <button className="btn-secondary">Bog\'lanish</button>
            <button className="btn-ghost">Kuzatish</button>
          </div>
        </div>

        <div className="employer-content">
          <div className="main-content">
            {/* About */}
            <section className="employer-section">
              <h2>Kompaniya haqida</h2>
              <p className="description">{employer.description}</p>
            </section>

            {/* Benefits */}
            <section className="employer-section">
              <h2>Imtiyozlar va sharoitlar</h2>
              <div className="benefits-grid">
                {employer.benefits.map((benefit) => (
                  <div key={benefit} className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span className="benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Active Jobs */}
            <section className="employer-section">
              <h2>Faol ish e'lonlari ({employer.jobs.length})</h2>
              <div className="jobs-list">
                {employer.jobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-header">
                      <h3>{job.title}</h3>
                      <span className="job-type">{job.type}</span>
                    </div>

                    <div className="job-details">
                      <p className="salary">💰 {job.salary}</p>
                      <p className="duration">⏰ {job.duration}</p>
                    </div>

                    <div className="job-meta">
                      <span className="posted">🕒 {job.posted}</span>
                      <span className="applicants">
                        👥 {job.applicants} ta ariza
                      </span>
                    </div>

                    <button className="btn-apply">Ariza berish</button>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="employer-section">
              <h2>
                Ishchilarning fikr-mulohazalari ({employer.reviews.length})
              </h2>
              <div className="reviews-list">
                {employer.reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header">
                      <div>
                        <h4>{review.worker}</h4>
                        <p className="review-position">{review.position}</p>
                      </div>
                      <div className="review-meta">
                        <div className="review-rating">
                          {"⭐".repeat(review.rating)}
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="sidebar">
            {/* Contact Info */}
            <div className="contact-card">
              <h3>Bog'lanish ma'lumotlari</h3>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <a
                  href={`https://${employer.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {employer.website}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${employer.phone}`}>{employer.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href={`mailto:${employer.email}`}>{employer.email}</a>
              </div>
            </div>

            {/* Company Stats */}
            <div className="stats-card">
              <h3>Statistika</h3>
              <div className="stats-list">
                <div className="stats-item">
                  <span className="stats-number">{employer.totalJobs}</span>
                  <span className="stats-label">Jami e'lonlar</span>
                </div>
                <div className="stats-item">
                  <span className="stats-number">{employer.activeJobs}</span>
                  <span className="stats-label">Faol e'lonlar</span>
                </div>
                <div className="stats-item">
                  <span className="stats-number">{employer.rating}</span>
                  <span className="stats-label">O'rtacha reyting</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;
