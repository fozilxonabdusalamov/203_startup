import { Link, Navigate } from 'react-router-dom'

const Auth = () => {
  // Redirect to the new login page
  return <Navigate to="/login" replace />
}

export default Auth
