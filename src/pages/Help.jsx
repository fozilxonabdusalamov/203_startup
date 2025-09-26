import { Link } from 'react-router-dom'

const Help = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Yordam Markazi</h1>
        <p>Ko'p so'raladigan savollar va yordam</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default Help
