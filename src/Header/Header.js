import Link, { NavLink } from "react-router-dom"

function Header(props) {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/"><img src={props.user.avatar} alt="" width="30" height="24" /> {props.user.nombre} </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" to="home">Home</NavLink>
            </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="usuarios">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>);
}
export default Header;