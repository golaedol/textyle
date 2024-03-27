import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import Cst from "../components/cst"
import Root from "./Root"

const routes = [
  {path: "cst", component: <Cst />},
  {path: "cst", component: <Cst />},
  {path: "cst", component: <Cst />}
]

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root routes={routes.map(({path}) => path)} />}>
            {routes.map(({path, component}) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
