import { useNavigate } from "react-router-dom";
import { useEmployeeMutations } from "../../hooks/UseEmployeeMutations";
import PageLayout from "../../components/PageLayout/PageLayout";
import EmployeeForm from "../../components/CreateEmployeeForm/EmployeeForm";
import type { EmployeeFormValues } from "../../form/employeeFormSchema";

const NewEmployeePage = () => {

    const navigate = useNavigate();
    const { createMutation } = useEmployeeMutations();

     const handleCancel = () => {
    navigate("/employees");
  };

    const handleSubmit = async (values: EmployeeFormValues) => {
    const created = await createMutation.mutateAsync(values);
    navigate(`/employees/${created.id}`);
  };

return (
      <PageLayout title="Add employee">
      <EmployeeForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isSubmitting={createMutation.isPending}
      />
    </PageLayout>
  )
}

export default NewEmployeePage