import {Outlet} from "react-router-dom"

const Root = ({routes}: {routes: string[]}) => {
  return (
    <div style={{position: "relative"}}>
      <aside style={{position: "absolute", top: 0, left: 0}}>
        {routes.map((route) => (
          <a>
            <div>
              <button>{route}</button>
            </div>
          </a>
        ))}
      </aside>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root
