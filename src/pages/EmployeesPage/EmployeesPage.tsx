import PageLayout from "../../components/PageLayout/PageLayout";
import Button from "../../components/Button/Button";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { useEmployees } from "../../hooks/UseEmployees";
import { useEmployeeMutations } from "../../hooks/UseEmployeeMutations";

const EmployeesPage = () => {

const { data, isLoading, error } = useEmployees();
const { deleteMutation } = useEmployeeMutations();

const handleRemove = (id: number) => {
  const ok = window.confirm("Are you sure you want to remove this employee?");
  if (!ok) return;

  deleteMutation.mutate(id);
};

  return (
    <PageLayout
    title="Employees’ list"
      subtitle="Use View to see employee details or Edit to update employee information."
      actions={<Button to="/employees/new">Add Employee</Button>}
      >

        {isLoading && <p>Loading employees...</p>}

      {error && <p style={{ color: "red" }}>Failed to load employees</p>}

      {data &&
        data.map((emp) => (
      <EmployeeCard
       key={emp.id}
      id={emp.id}
      firstName={emp.firstName}
      lastName={emp.lastName}
      contractType={emp.contractType}
      email={emp.email}
      onRemove={handleRemove}
      isRemoving={deleteMutation.isPending}
/>
      ))}



      </PageLayout>

  );
}

export default EmployeesPage