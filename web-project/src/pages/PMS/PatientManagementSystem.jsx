import './PatientManagementSystem.css'
import { Outlet } from 'react-router-dom'

function PatientManagementSystem() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default PatientManagementSystem
