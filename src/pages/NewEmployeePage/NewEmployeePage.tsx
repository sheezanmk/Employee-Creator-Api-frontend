import { useNavigate } from "react-router-dom";
import { useEmployeeMutations } from "../../hooks/UseEmployeeMutations";
import PageLayout from "../../components/PageLayout/PageLayout";
import EmployeeForm from "../../components/CreateEmployeeForm/EmployeeForm";
import type { EmployeeFormValues } from "../../form/employeeFormSchema";
import toast from "react-hot-toast";

const NewEmployeePage = () => {

    const navigate = useNavigate();
    const { createMutation } = useEmployeeMutations();

     const handleCancel = () => {
    navigate("/employees");
  };

const handleSubmit = async (values: EmployeeFormValues) => {
  try {
    const created = await createMutation.mutateAsync(values);

    toast.success("Employee created successfully");

    navigate(`/employees/${created.id}`);
  } catch (err) {
    toast.error("Failed to create employee");
  }
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