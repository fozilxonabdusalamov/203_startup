import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  User,
  Building,
  Bell,
  MessageSquare,
} from "lucide-react";
import "./Header.css";
import JobLinkLogo from "./JobLinkLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <JobLinkLogo className="logo-emoji" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/seasonal-jobs" className="nav-link">
              Mavsumiy Ishlar
            </Link>
            <Link to="/workers" className="nav-link">
              Ishchilar
            </Link>
            <Link to="/employers" className="nav-link">
              Ish beruvchilar
            </Link>
          </nav>

          {/* Auth & Profile */}
          <div className="header-actions">
            {/* Notifications */}
            <button className="icon-button">
              <Bell size={20} />
            </button>

            {/* Messages */}
            <button className="icon-button">
              <MessageSquare size={20} />
            </button>

            {/* Profile Dropdown */}
            <div className="profile-dropdown">
              <button className="profile-button" onClick={toggleProfile}>
                <User size={20} />
              </button>

              {isProfileOpen && (
                <div className="profile-menu">
                  <div className="profile-section">
                    <Link to="/u/dashboard" className="profile-item">
                      <User size={16} />
                      Ish Izlovchi
                    </Link>
                    <Link to="/e/dashboard" className="profile-item">
                      <Building size={16} />
                      Ish Beruvchi
                    </Link>
                  </div>
                  <div className="profile-section">
                    <Link to="/u/profile" className="profile-item">
                      Profilim
                    </Link>
                    <Link to="/u/applications" className="profile-item">
                      Arizalarim
                    </Link>
                    <Link to="/u/saved" className="profile-item">
                      Saqlangan
                    </Link>
                    <Link to="/u/settings" className="profile-item">
                      Sozlamalar
                    </Link>
                  </div>
                  <div className="profile-section">
                    <button className="profile-item text-red-600">
                      Chiqish
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <Link to="/auth/login" className="btn btn-outline btn-sm">
              Kirish
            </Link>
            <Link to="/auth/register" className="btn btn-outline btn-sm">
              Ro'yxatdan o'tish
            </Link>

            {/* Mobile menu button */}
            <button className="mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu open">
            <div className="container">
              <div className="mobile-search">
                <div className="search-input-group">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Ish qidiring..."
                    className="search-input"
                  />
                </div>
                <button className="search-button">Qidirish</button>
              </div>

              <nav className="mobile-nav">
                <Link to="/seasonal-jobs" className="mobile-nav-link">
                  Mavsumiy Ishlar
                </Link>
                <Link to="/workers" className="mobile-nav-link">
                  Ishchilar
                </Link>
                <Link to="/employers" className="mobile-nav-link">
                  Ish beruvchilar
                </Link>
                <Link to="/mardikor" className="mobile-nav-link">
                  Tezkor Bozor
                </Link>
                <Link to="/pricing" className="mobile-nav-link">
                  Narxlar
                </Link>
                <Link to="/help" className="mobile-nav-link">
                  Yordam
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
