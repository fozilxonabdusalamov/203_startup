import { Link } from 'react-router-dom'

const UserSaved = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Saqlangan Ishlar</h1>
        <p>Saqlab qo'ygan ish o'rinlari</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default UserSaved
