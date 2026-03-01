import PageLayout from "../../components/PageLayout/PageLayout";
import Button from "../../components/Button/Button";
const EmployeesPage = () => {
  return (
    <PageLayout
    title="Employees’ list"
      subtitle="Please click on ‘Edit’ to find more details of each employee."
      actions={<Button to="/employees/new">Add employee</Button>}
      >
        <p>Employee list will go here</p>

      </PageLayout>

  );
}

export default EmployeesPage