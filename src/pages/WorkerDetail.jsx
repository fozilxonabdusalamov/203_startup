import React from "react";
import "./WorkerDetail.css";

const WorkerDetail = () => {
  // Mock data - in real app this would come from API
  const worker = {
    id: 1,
    name: "Sanjar Karimov",
    location: "Toshkent viloyati, Qibray tumani",
    speciality: "Qishloq xo'jaligi",
    experience: "5+ yil tajriba",
    availability: "Darhol boshlash mumkin",
    rating: 4.8,
    completedJobs: 45,
    hourlyRate: "25,000 so'm/soat",
    dailyRate: "180,000 so'm/kun",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    skills: [
      "Paxta terib olish",
      "Meva yig'ish",
      "Traktor boshqarish",
      "Poliz ekin",
      "Paxtani tozalash",
      "Suv quyish",
    ],
    languages: ["O'zbek", "Rus", "Qozoq"],
    description: `Qishloq xo'jaligida 5 yildan ortiq tajribaga ega mavsumiy ishchi. Barcha turdagi dala ishlarini yuqori sifat bilan bajaraman. 
    
    Paxta terib olish, meva-sabzavot yig'ish, traktor boshqarish va boshqa qishloq xo'jaligi ishlarida keng tajribaga egaman. Ish vaqtini to'g'ri taqsimlash va jamoaviy ishlashni yaxshi bilaman.
    
    Ishlagan fermer xo'jaliklari va qishloq xo'jaligi korxonalaridan ijobiy tavsiya xatlarim mavjud.`,
    workHistory: [
      {
        title: "Paxta teruvchi",
        company: "Agrotek Farm",
        period: "2023 Sentabr - Noyabr",
        description:
          "Kuniga o'rtacha 200 kg paxta terib oldim. Sifat ko'rsatkichlari bo'yicha eng yaxshi ishchilar qatoriga kirdim.",
      },
      {
        title: "Meva yig'uvchi",
        company: "GreenHarvest",
        period: "2023 May - Avgust",
        description:
          "Olma, nok, o'rik va boshqa mevalarni yig'ish ishlarida qatnashdim. Mahsulotlarni ehtiyotkorlik bilan yig'ib, saqlash talablariga rioya qildim.",
      },
      {
        title: "Traktor operatori",
        company: "Qishloq Farovonligi",
        period: "2022 Mart - Oktabr",
        description:
          "Yerlarni haydash, ekish va o'rim-yig'im ishlarida traktor boshqardim. Texnika bilan ishlashda xavfsizlik qoidalariga amal qildim.",
      },
    ],
    reviews: [
      {
        client: "Aziz Rahimov",
        company: "Agrotek Farm",
        rating: 5,
        date: "2023 Noyabr",
        comment:
          "Juda yaxshi ishchi! Vaqtida keladi, ishni sifatli bajaradi. Keyingi mavsumda ham bilan ishlashni rejalashtirmoqdamiz.",
      },
      {
        client: "Malika Karimova",
        company: "GreenHarvest",
        rating: 5,
        date: "2023 Avgust",
        comment:
          "Mevalarni juda ehtiyotkorlik bilan yig'di. Hech qanday zarar yetkazmadi. Tavsiya qilaman!",
      },
      {
        client: "Dilshod Toshmatov",
        company: "Fermer Xo'jaligi",
        rating: 4,
        date: "2023 Iyun",
        comment:
          "Yaxshi ishchi, lekin boshqa tillarda gaplasha olsa yaxshi bo'lar edi. Umuman olganda mamnunman.",
      },
    ],
    certificates: [
      "Traktor haydovchisi guvohnomasi",
      "Qishloq xo'jaligi xavfsizligi sertifikati",
      "Birinchi yordam ko'rsatish kursi",
    ],
  };

  return (
    <div className="worker-detail-page">
      <div className="container">
        {/* Worker Header */}
        <div className="worker-header">
          <div className="worker-avatar">
            <img src={worker.image} alt={worker.name} />
            <div className="worker-status available"></div>
          </div>

          <div className="worker-info">
            <h1>{worker.name}</h1>
            <p className="location">📍 {worker.location}</p>
            <p className="speciality">{worker.speciality}</p>
            <p className="experience">{worker.experience}</p>

            <div className="worker-stats">
              <div className="stat">
                <span className="stat-value">⭐ {worker.rating}</span>
                <span className="stat-label">Reyting</span>
              </div>
              <div className="stat">
                <span className="stat-value">✅ {worker.completedJobs}</span>
                <span className="stat-label">Bajarilgan ish</span>
              </div>
              <div className="stat">
                <span className="stat-value">🕒 {worker.availability}</span>
                <span className="stat-label">Mavjudlik</span>
              </div>
            </div>

            <div className="rates">
              <div className="rate">
                <span className="rate-value">{worker.hourlyRate}</span>
                <span className="rate-label">soatiga</span>
              </div>
              <div className="rate">
                <span className="rate-value">{worker.dailyRate}</span>
                <span className="rate-label">kuniga</span>
              </div>
            </div>
          </div>

          <div className="worker-actions">
            <button className="btn-primary">Ish taklif qilish</button>
            <button className="btn-secondary">Xabar yuborish</button>
            <button className="btn-ghost">Saqlash</button>
          </div>
        </div>

        <div className="worker-content">
          {/* About */}
          <section className="worker-section">
            <h2>Haqida</h2>
            <p className="description">{worker.description}</p>
          </section>

          {/* Skills */}
          <section className="worker-section">
            <h2>Ko'nikmalar</h2>
            <div className="skills-grid">
              {worker.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="worker-section">
            <h2>Tillar</h2>
            <div className="languages">
              {worker.languages.map((language) => (
                <span key={language} className="language-tag">
                  {language}
                </span>
              ))}
            </div>
          </section>

          {/* Work History */}
          <section className="worker-section">
            <h2>Ish tajribasi</h2>
            <div className="work-history">
              {worker.workHistory.map((job, index) => (
                <div key={index} className="work-item">
                  <div className="work-header">
                    <h3>{job.title}</h3>
                    <span className="work-period">{job.period}</span>
                  </div>
                  <p className="work-company">{job.company}</p>
                  <p className="work-description">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="worker-section">
            <h2>Sertifikatlar</h2>
            <ul className="certificates">
              {worker.certificates.map((cert) => (
                <li key={cert} className="certificate-item">
                  📜 {cert}
                </li>
              ))}
            </ul>
          </section>

          {/* Reviews */}
          <section className="worker-section">
            <h2>Sharhlar ({worker.reviews.length})</h2>
            <div className="reviews">
              {worker.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-header">
                    <div>
                      <h4>{review.client}</h4>
                      <p className="review-company">{review.company}</p>
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
      </div>
    </div>
  );
};

export default WorkerDetail;
