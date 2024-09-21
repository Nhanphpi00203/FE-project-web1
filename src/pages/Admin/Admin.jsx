import './Admin.css'
import MainDash from '../../components/Admin/MainDash/MainDash'
import RightSide from '../../components/Admin/RigtSide/RightSide'
import Sidebar from '../../components/Admin/Sidebar'
const Admin = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  )
}
export default Admin
