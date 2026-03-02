import PageLayout from "../../components/PageLayout/PageLayout";
import Button from "../../components/Button/Button";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
const EmployeesPage = () => {
const mockEmployees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    contractType: "Permanent",
    email: "john.doe@email.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    contractType: "Contract",
    email: "jane.smith@email.com",
  },
];

  return (
    <PageLayout
    title="Employees’ list"
      subtitle="Please click on ‘Edit’ to find more details of each employee."
      actions={<Button to="/employees/new">Add employee</Button>}
      >

        {mockEmployees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          id={emp.id}
          firstName={emp.firstName}
          lastName={emp.lastName}
          contractType={emp.contractType}
          email={emp.email}
        />
      ))}



      </PageLayout>

  );
}

export default EmployeesPage