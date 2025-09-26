// Create all remaining page placeholders
import { Link } from 'react-router-dom'

const Pricing = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Narxlar</h1>
        <p>Bizning xizmatlarimiz narxlari</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default Pricing
