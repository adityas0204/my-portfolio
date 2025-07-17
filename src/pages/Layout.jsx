import { NavLink, Outlet } from "react-router"

const Layout = () => {
  return (
    <div> 
      <nav style={{ display: "flex", gap: "1rem", justifyContent: 'center' }}> 
        <NavLink to='/' end>Holy</NavLink>
        <NavLink to='/shit2' end>Shit2</NavLink>
        <NavLink to='/shit3' end>Shit3</NavLink>
        <NavLink to='/notes' end>Notes</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout