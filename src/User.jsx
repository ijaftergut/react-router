
import {Link, useParams} from 'react-router-dom'


const User = ({users})=>{
  const params = useParams()
  const id = params.id*1
  const user = users.find( user => user.id === id)
  if(!user){
    return null
  }
  
  return (
    <div>
      <h1> Detail for Artist: {user.name}</h1>
      <h3>Username:{user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h4>Address: {user.address.street}, {user.address.city}</h4>
      <Link to="/users" >Back to all Users</Link>
    </div>
  )
}
export default User
