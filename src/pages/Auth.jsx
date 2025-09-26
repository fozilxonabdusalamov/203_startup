import { Link } from 'react-router-dom'

const Auth = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Kirish / Ro'yxatdan o'tish</h1>
        <p>Akkauntingizga kiring yoki yangi akkaunt yarating</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default Auth
