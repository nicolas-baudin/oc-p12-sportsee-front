import { Outlet } from 'react-router'
import MenuTop from '../../components/MenuTop'
import MenuLeft from '../../components/MenuLeft'

const Landing = () => {
  return (
    <>
      <MenuTop />
      <MenuLeft />
      <Outlet />
    </>
  )
}

export default Landing;