import { Link } from 'react-router-dom'

const Blog = () => (
  <div className="page">
    <div className="container">
      <div className="page-header">
        <h1>Blog</h1>
        <p>Karyera va ish dunyosi haqida maqolalar</p>
      </div>
      <div className="coming-soon">
        <h2>Tez orada...</h2>
        <p>Ushbu sahifa hali ishlab chiqilmoqda</p>
        <Link to="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  </div>
)

export default Blog
