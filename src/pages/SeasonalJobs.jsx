import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Calendar,
  Users,
  TrendingUp,
  Star,
  Heart,
  ExternalLink,
  ChevronDown,
  X,
  Award,
  Shield,
  Tractor,
  Hammer,
  ChefHat,
  Factory,
} from "lucide-react";
import JobLinkLogo from "../components/JobLinkLogo";
import "./SeasonalJobs.css";

const SeasonalJobs = () => {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    salary: "",
    duration: "",
    search: "",
  });

  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [savedJobs, setSavedJobs] = useState(new Set());

  // Professional seasonal jobs data
  const jobs = [
    {
      id: 1,
      title: "Paxta terib olish ishi",
      company: "Agrotek Farm",
      location: "Surxondaryo viloyati",
      category: "Qishloq xo'jaligi",
      salary: "150,000 - 200,000",
      duration: "3 oy (Sentabr - Noyabr)",
      posted: "2 kun oldin",
      applications: 45,
      urgent: true,
      featured: false,
      description:
        "Paxta terib olish mavsumi uchun tajribali ishchilar talab qilinadi. Ish soatlari: 07:00-18:00, dam olish kunlari bilan.",
      requirements: [
        "Jismoniy bardoshlik",
        "Oldingi tajriba afzal",
        "18+ yosh",
      ],
      benefits: [
        "Bepul turar joy",
        "Ovqat ta'minoti",
        "Transport xizmati",
        "Sug'urta",
      ],
      image:
        "https://images.unsplash.com/photo-1566383434817-99d723b3b2a7?w=800&h=600&fit=crop",
      icon: Tractor,
      rating: 4.5,
      companySize: "50-100",
      workType: "Mavsumiy",
    },
    {
      id: 2,
      title: "Qurilish yordamchisi",
      company: "BuildPro Construction",
      location: "Toshkent shahri",
      category: "Qurilish",
      salary: "180,000 - 250,000",
      duration: "6 oy (Mart - Avgust)",
      posted: "1 kun oldin",
      applications: 32,
      urgent: false,
      featured: true,
      description:
        "Katta qurilish loyihasi uchun yordamchi ishchilar talab qilinadi. Turar-joy binosi qurish.",
      requirements: [
        "Qurilish tajribasi",
        "Balandlikdan qo'rqmaslik",
        "Tibbiy ma'lumotnoma",
      ],
      benefits: [
        "Yuqori maosh",
        "Haftalik pul to'lash",
        "Himoya vositalari",
        "Bonus to'lovlar",
      ],
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      icon: Hammer,
      rating: 4.8,
      companySize: "100+",
      workType: "To'liq stavka",
    },
    {
      id: 3,
      title: "Meva-sabzavot yig'ish",
      company: "GreenHarvest",
      location: "Farg'ona viloyati",
      category: "Qishloq xo'jaligi",
      salary: "120,000 - 180,000",
      duration: "4 oy (May - Avgust)",
      posted: "3 kun oldin",
      applications: 67,
      urgent: false,
      featured: false,
      description:
        "Olma, o'rik, va boshqa mevalar yig'ish uchun ishchilar kerak. Toza havo va go'zal muhitda ish.",
      requirements: ["Erta turish", "Tez ishlash qobiliyati", "Jamoaviy ish"],
      benefits: [
        "Toza mahsulotlar",
        "Qishloq muhiti",
        "Sog'liq uchun foydali",
        "Yaxshi jamoa",
      ],
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      icon: Tractor,
      rating: 4.2,
      companySize: "20-50",
      workType: "Mavsumiy",
    },
    {
      id: 4,
      title: "Turizm gidi",
      company: "Uzbekistan Tours",
      location: "Samarqand shahri",
      category: "Turizm",
      salary: "200,000 - 300,000",
      duration: "8 oy (Mart - Oktabr)",
      posted: "1 hafta oldin",
      applications: 28,
      urgent: false,
      featured: true,
      description:
        "Turist guruhlarni boshqarish va shahar bo'ylab sayohat tashkil qilish. Ingliz tili bilimi shart.",
      requirements: [
        "Ingliz tili",
        "Samarqand tarixi bilimi",
        "Kommunikablik",
        "Litsenziya",
      ],
      benefits: [
        "Yuqori maosh",
        "Chet el sayyohlari",
        "Til amaliyoti",
        "Bonus tips",
      ],
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop",
      icon: Users,
      rating: 4.9,
      companySize: "10-20",
      workType: "Mavsumiy",
    },
    {
      id: 5,
      title: "Tekstil ishlab chiqarish",
      company: "UzTextile Factory",
      location: "Namangan viloyati",
      category: "Tekstil",
      salary: "160,000 - 220,000",
      duration: "5 oy (Iyun - Oktabr)",
      posted: "4 kun oldin",
      applications: 89,
      urgent: true,
      featured: false,
      description:
        "Yirik buyurtma uchun qo'shimcha ishchilar kerak. Tikuvchilik va sifat nazorati ishlarida.",
      requirements: [
        "Tikuvchilik tajribasi",
        "Diqqatlilik",
        "Tezlik",
        "Ko'z-qo'l muvofiqligi",
      ],
      benefits: [
        "Barqaror ish",
        "Ustaxona sharoiti",
        "O'qitish",
        "Karyera o'sishi",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      icon: Factory,
      rating: 4.3,
      companySize: "200+",
      workType: "To'liq stavka",
    },
    {
      id: 6,
      title: "Restoran xodimlari",
      company: "Milliy Taomlar",
      location: "Buxoro shahri",
      category: "Ovqat xizmati",
      salary: "140,000 - 190,000",
      duration: "6 oy (Aprel - Sentabr)",
      posted: "2 hafta oldin",
      applications: 156,
      urgent: false,
      featured: false,
      description:
        "Turist mavsumi uchun ofitsiantlar, oshpazlar va yordamchi xodimlar talab qilinadi.",
      requirements: [
        "Xizmat ko'rsatish tajribasi",
        "Toza ko'rinish",
        "Mehribonlik",
        "Til bilimi afzal",
      ],
      benefits: [
        "Tips puli",
        "Ovqat ta'minoti",
        "Yaxshi jamoa",
        "Turist aloqasi",
      ],
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      icon: ChefHat,
      rating: 4.1,
      companySize: "30-50",
      workType: "Mavsumiy",
    },
  ];

  const categories = [
    "Qishloq xo'jaligi",
    "Qurilish",
    "Turizm",
    "Tekstil",
    "Ovqat xizmati",
    "Transport",
  ];
  const locations = [
    "Toshkent",
    "Samarqand",
    "Buxoro",
    "Farg'ona",
    "Namangan",
    "Andijon",
    "Surxondaryo",
  ];
  const salaryRanges = ["100,000+", "150,000+", "200,000+", "250,000+"];
  const durations = ["1-3 oy", "3-6 oy", "6+ oy"];

  // Helpers
  const parseNumber = (str) => Number(String(str).replace(/[^\d]/g, "")) || 0;

  const parseSalaryMinMax = (salaryStr) => {
    // "150,000 - 200,000" -> {min:150000, max:200000}
    const [minStr, maxStr] = String(salaryStr)
      .split("-")
      .map((s) => s?.trim() ?? "");
    return {
      min: parseNumber(minStr),
      max: parseNumber(maxStr),
    };
  };

  const postedToDays = (postedStr) => {
    // "1 kun oldin", "2 hafta oldin", "3 oy oldin"
    if (!postedStr) return 9999;
    const n = parseInt(postedStr, 10) || 0;
    if (postedStr.includes("hafta")) return n * 7;
    if (postedStr.includes("oy")) return n * 30;
    if (postedStr.includes("kun")) return n;
    return 9999;
  };

  const durationToMonths = (durationStr) => {
    // "3 oy (...)" -> 3
    const n = parseInt(durationStr, 10);
    return Number.isFinite(n) ? n : 0;
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      location: "",
      salary: "",
      duration: "",
      search: "",
    });
  };

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) => {
      const next = new Set(prev);
      if (next.has(jobId)) next.delete(jobId);
      else next.add(jobId);
      return next;
    });
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Qishloq xo'jaligi":
        return Tractor;
      case "Qurilish":
        return Hammer;
      case "Turizm":
        return Users;
      case "Tekstil":
        return Factory;
      case "Ovqat xizmati":
        return ChefHat;
      default:
        return Briefcase;
    }
  };

  const handleImageError = (e) => {
    if (!e?.target) return;
    e.target.style.display = "none";
    const fallback = e.target?.nextSibling;
    if (fallback) fallback.style.display = "flex";
  };

  // Persist saved jobs
  useEffect(() => {
    try {
      const raw = localStorage.getItem("savedJobs");
      if (raw) setSavedJobs(new Set(JSON.parse(raw)));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("savedJobs", JSON.stringify([...savedJobs]));
    } catch {
      // ignore
    }
  }, [savedJobs]);

  // Filtering
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search
      if (filters.search) {
        const q = filters.search.toLowerCase().trim();
        const hay =
          `${job.title} ${job.company} ${job.category} ${job.location}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }

      // Category
      if (filters.category && job.category !== filters.category) return false;

      // Location (partial includes)
      if (
        filters.location &&
        !job.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Salary minimum
      if (filters.salary) {
        const minAsked = parseNumber(filters.salary);
        const { min: jobMin } = parseSalaryMinMax(job.salary);
        if (jobMin < minAsked) return false;
      }

      // Duration
      if (filters.duration) {
        const jobMonths = durationToMonths(job.duration);
        if (
          filters.duration === "1-3 oy" &&
          !(jobMonths >= 1 && jobMonths <= 3)
        )
          return false;
        if (
          filters.duration === "3-6 oy" &&
          !(jobMonths >= 3 && jobMonths <= 6)
        )
          return false;
        if (filters.duration === "6+ oy" && !(jobMonths >= 6)) return false;
      }

      return true;
    });
  }, [jobs, filters]);

  // Sorting
  const sortedJobs = useMemo(() => {
    const arr = [...filteredJobs];
    switch (sortBy) {
      case "salary":
        arr.sort((a, b) => {
          const aMax = parseSalaryMinMax(a.salary).max;
          const bMax = parseSalaryMinMax(b.salary).max;
          return bMax - aMax;
        });
        break;
      case "applications":
        arr.sort((a, b) => b.applications - a.applications);
        break;
      case "nearest":
        // Basic proximity: prioritize items that include the selected location, then by alphabet
        if (filters.location) {
          arr.sort((a, b) => {
            const aMatch = a.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())
              ? 1
              : 0;
            const bMatch = b.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())
              ? 1
              : 0;
            if (bMatch !== aMatch) return bMatch - aMatch;
            return a.location.localeCompare(b.location);
          });
        } else {
          arr.sort((a, b) => a.location.localeCompare(b.location));
        }
        break;
      case "newest":
      default:
        arr.sort((a, b) => postedToDays(a.posted) - postedToDays(b.posted));
        break;
    }
    // Featured first, then urgent
    arr.sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        Number(b.urgent) - Number(a.urgent)
    );
    return arr;
  }, [filteredJobs, sortBy, filters.location]);

  return (
    <div className="seasonal-jobs-page">
      <header
        className="jobs-header"
        role="banner"
        aria-label="Mavsumiy ishlar sarlavha"
      >
        <div className="header-background" />
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>Mavsumiy Ish O'rinlari</h1>
              <p>
                O'zbekiston bo'ylab eng yaxshi mavsumiy ish imkoniyatlarini
                toping
              </p>
            </div>
            <div className="header-stats" aria-label="Statistik ma'lumotlar">
              <div
                className="stat"
                role="group"
                aria-label="Ochiq ish o'rinlari"
              >
                <span className="stat-number">{jobs.length}</span>
                <span className="stat-label">Ochiq ish o'rinlari</span>
              </div>
              <div className="stat" role="group" aria-label="Kompaniyalar">
                <span className="stat-number">150+</span>
                <span className="stat-label">Kompaniyalar</span>
              </div>
              <div
                className="stat"
                role="group"
                aria-label="Ishga joylashganlar"
              >
                <span className="stat-number">2.5K+</span>
                <span className="stat-label">Ishga joylashgan</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search */}
      <section className="search-section" aria-label="Qidiruv va tez filtrlar">
        <div className="container">
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Ish nomi yoki kompaniya nomi..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                aria-label="Ish va kompaniya bo'yicha qidirish"
              />
            </div>

            <div
              className="quick-filters"
              role="group"
              aria-label="Tez filtrlar"
            >
              {[
                { label: "Qishloq xo'jaligi", Icon: Tractor },
                { label: "Qurilish", Icon: Hammer },
                { label: "Turizm", Icon: Users },
                { label: "Ovqat xizmati", Icon: ChefHat },
              ].map(({ label, Icon }) => {
                const active = filters.category === label;
                return (
                  <button
                    key={label}
                    className={`quick-filter ${active ? "active" : ""}`}
                    onClick={() =>
                      handleFilterChange("category", active ? "" : label)
                    }
                    aria-pressed={active}
                    type="button"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="jobs-content">
          {/* Sidebar Filters */}
          <aside className="jobs-filters" aria-label="Filtrlar paneli">
            <div className="filters-header">
              <h3>
                <Filter size={20} aria-hidden="true" />
                Filtrlar
              </h3>
              <button
                className="filter-clear"
                onClick={clearFilters}
                type="button"
              >
                <X size={16} aria-hidden="true" />
                Tozalash
              </button>
            </div>

            <div className="filter-group">
              <label htmlFor="filter-category">
                <Briefcase size={16} aria-hidden="true" />
                Soha
              </label>
              <select
                id="filter-category"
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="filter-select"
              >
                <option value="">Barcha sohalar</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="filter-location">
                <MapPin size={16} aria-hidden="true" />
                Hudud
              </label>
              <select
                id="filter-location"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="filter-select"
              >
                <option value="">Barcha hududlar</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="filter-salary">
                <DollarSign size={16} aria-hidden="true" />
                Maosh
              </label>
              <select
                id="filter-salary"
                value={filters.salary}
                onChange={(e) => handleFilterChange("salary", e.target.value)}
                className="filter-select"
              >
                <option value="">Har qanday maosh</option>
                {salaryRanges.map((range) => (
                  <option key={range} value={range}>
                    {range} so'm
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="filter-duration">
                <Clock size={16} aria-hidden="true" />
                Muddat
              </label>
              <select
                id="filter-duration"
                value={filters.duration}
                onChange={(e) => handleFilterChange("duration", e.target.value)}
                className="filter-select"
              >
                <option value="">Istalgan muddat</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-summary">
              <div className="filter-summary-item">
                <span className="label">Topildi:</span>
                <span className="value">{sortedJobs.length} ta ish</span>
              </div>
            </div>
          </aside>

          {/* Jobs List */}
          <main className="jobs-list">
            <div className="jobs-header-bar">
              <div className="jobs-count">
                <div>
                  <h2>
                    <span className="count-number">{sortedJobs.length}</span> ta
                    mavsumiy ish topildi
                  </h2>
                  <p className="count-subtitle">
                    Eng yaxshi mavsumiy ish imkoniyatlari
                  </p>
                </div>
              </div>

              <div className="view-controls">
                <div className="sort-options">
                  <label htmlFor="sort-select">Saralash:</label>
                  <select
                    id="sort-select"
                    className="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Yangi e'lonlar</option>
                    <option value="salary">Yuqori maosh</option>
                    <option value="applications">Ko'p ariza</option>
                    <option value="nearest">Yaqin joylar</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={`jobs-grid ${viewMode}`}>
              {sortedJobs.map((job) => {
                const CategoryIcon = getCategoryIcon(job.category);
                const isJobSaved = savedJobs.has(job.id);

                return (
                  <article
                    key={job.id}
                    className={`job-card ${job.featured ? "featured" : ""} ${
                      job.urgent ? "urgent" : ""
                    }`}
                    aria-labelledby={`job-title-${job.id}`}
                  >
                    <div className="job-image">
                      <img
                        src={job.image}
                        alt={job.title}
                        onError={handleImageError}
                        loading="lazy"
                      />
                      <div
                        className="job-image-fallback"
                        style={{ display: "none" }}
                        aria-hidden="true"
                      >
                        <JobLinkLogo className="fallback-logo" />
                      </div>
                    </div>

                    <div className="job-info">
                      <div className="job-header">
                        <div className="job-title-section">
                          <h3 className="job-title" id={`job-title-${job.id}`}>
                            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                          </h3>
                          <div className="company-info">
                            <span className="company">{job.company}</span>
                            <div className="company-meta">
                              <span className="company-size">
                                {job.companySize} xodim
                              </span>
                              <span className="separator" aria-hidden="true">
                                •
                              </span>
                              <div
                                className="rating"
                                aria-label={`Reyting: ${job.rating} yulduz`}
                              >
                                <Star
                                  size={12}
                                  fill="currentColor"
                                  aria-hidden="true"
                                />
                                {job.rating}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="job-meta">
                        <div className="location">
                          <MapPin size={14} aria-hidden="true" />
                          {job.location}
                        </div>
                        <div className="work-type">
                          <Briefcase size={14} aria-hidden="true" />
                          {job.workType}
                        </div>
                      </div>

                      <div className="job-details">
                        <div className="job-detail salary">
                          <div className="detail-content">
                            <span className="label">Maosh</span>
                            <span className="value">{job.salary} so'm</span>
                          </div>
                        </div>

                        <div className="job-detail duration">
                          <div className="detail-content">
                            <span className="label">Muddat</span>
                            <span className="value">{job.duration}</span>
                          </div>
                        </div>
                      </div>

                      <p className="job-description">{job.description}</p>

                      <div className="job-requirements">
                        <h4>
                          <Award size={14} aria-hidden="true" />
                          Talablar:
                        </h4>
                        <ul>
                          {job.requirements.slice(0, 3).map((req) => (
                            <li key={req}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="job-benefits">
                        <h4>
                          <Shield size={14} aria-hidden="true" />
                          Imtiyozlar:
                        </h4>
                        <div className="benefits-list">
                          {job.benefits.slice(0, 4).map((benefit) => (
                            <span key={benefit} className="benefit-tag">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="job-footer">
                        <div className="job-stats">
                          <div className="posted">
                            <Calendar size={12} aria-hidden="true" />
                            {job.posted}
                          </div>
                          <div className="applications">
                            <Users size={12} aria-hidden="true" />
                            {job.applications} ta ariza
                          </div>
                        </div>

                        <div className="job-actions">
                          <Link to={`/jobs/${job.id}`} className="btn-details">
                            <ExternalLink size={16} aria-hidden="true" />
                            Batafsil
                          </Link>
                          <button className="btn-apply" type="button">
                            Ariza berish
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {sortedJobs.length === 0 && (
              <div className="no-results" role="status" aria-live="polite">
                <div className="no-results-icon" aria-hidden="true">
                  <Search size={64} />
                </div>
                <h3>Hech qanday ish topilmadi</h3>
                <p>
                  Filter sozlamalarini o'zgartirib, qaytadan urinib ko'ring.
                </p>
                <button
                  className="reset-button"
                  onClick={clearFilters}
                  type="button"
                >
                  Filtrlarni tozalash
                </button>
              </div>
            )}

            {sortedJobs.length > 0 && sortedJobs.length >= 6 && (
              <div className="load-more-section">
                <button className="load-more-button" type="button">
                  Ko'proq ko'rish
                  <ChevronDown size={18} aria-hidden="true" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SeasonalJobs;
