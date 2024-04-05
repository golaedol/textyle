import {useState} from "react"
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"

const Root = ({routes}: {routes: string[]}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{position: "relative"}}>
      <nav style={{position: "fixed", top: 0, left: 0}}>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5H20V8H4V5Z" fill="#1C2E45" fill-opacity="0.6" />
            <path d="M4 10H20V13H4V10Z" fill="#1C2E45" fill-opacity="0.6" />
            <path d="M4 15H20V18H4V15Z" fill="#1C2E45" fill-opacity="0.6" />
          </svg>
        </div>

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
