import { Link } from 'react-router-dom'

const EmployerJobDetail = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Ish O'rni Batafsil</h1>
        <p>Ish o'rni va arizalar</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default EmployerJobDetail
