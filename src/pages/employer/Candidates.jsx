import { Link } from 'react-router-dom'

const EmployerCandidates = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>CV Qidirish</h1>
        <p>Kandidatlar bazasida qidirish</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default EmployerCandidates
