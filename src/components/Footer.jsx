import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react'
import JobLinkLogo from './JobLinkLogo'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <JobLinkLogo className="w-32 h-10 mb-4" />
            <p className="footer-description">
              O'zbekistondagi eng yirik ish izlash platformasi. 
              Minglab ish o'rinlari va professional imkoniyatlar.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Job Seekers */}
          <div className="footer-section">
            <h4 className="footer-title">Ish Izlovchilar</h4>
            <ul className="footer-links">
              <li><Link to="/jobs">Ish o'rinlari</Link></li>
              <li><Link to="/u/profile">Profil yaratish</Link></li>
              <li><Link to="/u/dashboard">Dashboard</Link></li>
              <li><Link to="/u/applications">Arizalar</Link></li>
              <li><Link to="/u/saved">Saqlangan ishlar</Link></li>
              <li><Link to="/help">Yordam</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div className="footer-section">
            <h4 className="footer-title">Ish Beruvchilar</h4>
            <ul className="footer-links">
              <li><Link to="/e/jobs/new">Ish e'lon qilish</Link></li>
              <li><Link to="/e/dashboard">Employer Dashboard</Link></li>
              <li><Link to="/e/candidates">CV qidirish</Link></li>
              <li><Link to="/pricing">Narxlar</Link></li>
              <li><Link to="/e/analytics">Statistika</Link></li>
              <li><Link to="/help">Qo'llab-quvvatlash</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="footer-title">Kompaniya</h4>
            <ul className="footer-links">
              <li><Link to="/companies">Kompaniyalar</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/mardikor">Mardikor Bazori</Link></li>
              <li><Link to="/help">Yordam markazi</Link></li>
              <li><Link to="/legal/terms">Foydalanish shartlari</Link></li>
              <li><Link to="/legal/privacy">Maxfiylik siyosati</Link></li>
            </ul>
          </div>

          {/* Language & Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Aloqa</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+998901234567">+998 (90) 123-45-67</a>
              </li>
              <li>
                <a href="mailto:info@joblink.uz">info@joblink.uz</a>
              </li>
              <li>Toshkent, O'zbekiston</li>
            </ul>
            
           
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 JobLink. Barcha huquqlar himoyalangan.</p>
          <div className="footer-bottom-links">
            <Link to="/legal/terms">Shartlar</Link>
            <Link to="/legal/privacy">Maxfiylik</Link>
            <Link to="/legal/cookies">Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
