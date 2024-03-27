import {useState} from "react"
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"

const Root = ({routes}: {routes: string[]}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{position: "relative"}}>
      <nav style={{position: "fixed", top: 0, left: 0}}>
        <div onClick={() => setIsOpen((prev) => !prev)}>hamburger icon</div>

        <ul style={{display: isOpen ? "block" : "none", width: "100vw", height: "100vh", background: "white"}}>
          {routes.map((route) => (
            <li key={route}>
              <Link to={route}>
                <div>
                  <button>{route}</button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root
