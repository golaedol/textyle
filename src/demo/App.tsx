import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import Root from "./Root"
import Fold from "../components/fold"

const routes = [{path: "fold", component: <Fold />}]

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
