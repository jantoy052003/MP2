import Header from "../../components/Header";
import { Routes, Route } from 'react-router-dom'
import routes from "../../routes";

const Nav = () => {
  return (
    <>
      <Header />
      <Routes>
          {routes[1].children.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} exact />
          })}
      </Routes>
    </>
  )
}

export default Nav
