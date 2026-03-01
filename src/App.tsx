import { Navigate, Route, Routes } from "react-router-dom"
import NewEmployeePage from "./pages/NewEmployeePage/NewEmployeePage"
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage/EmployeeDetailsPage"
import EditEmployeePage from "./pages/EditEmployeePage/EditEmployeePage"
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage"

function App() {
  

  return (
  <>
  <Routes>
    <Route path="/" element={<Navigate to="/employees" replace />} />
    <Route path="/employees" element={<EmployeesPage />} />
    <Route path="/employees/new" element={<NewEmployeePage />} />
    <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
    <Route path="/employees/:id/edit" element={<EditEmployeePage />} />
    <Route path="*" element={<p>Not found</p>} />
</Routes>
  </>
  )
}

export default App
