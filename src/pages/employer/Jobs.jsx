import { Link } from 'react-router-dom'

const EmployerJobs = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Ish O'rinlarim</h1>
        <p>E'lon qilgan ish o'rinlaringizni boshqaring</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default EmployerJobs
