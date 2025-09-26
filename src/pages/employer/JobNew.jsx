import { Link } from 'react-router-dom'

const EmployerJobNew = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Yangi Ish E'lon Qilish</h1>
        <p>Yangi ish o'rni uchun e'lon yarating</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default EmployerJobNew
