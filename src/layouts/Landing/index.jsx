import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Menu from '../../components/Menu'

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Menu />
        <Outlet />
      </main>
    </>
  )
}

export default Landing;