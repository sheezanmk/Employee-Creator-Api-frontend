import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import EmployeeForm from "../../components/CreateEmployeeForm/EmployeeForm";
import type { EmployeeFormValues } from "../../form/employeeFormSchema";
import { useEmployee } from "../../hooks/UseEmployee";
import { useEmployeeMutations } from "../../hooks/UseEmployeeMutations";
import toast from "react-hot-toast";

const EditEmployeePage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

const { data, isLoading, error } = useEmployee(id);
  const { updateMutation } = useEmployeeMutations();

  const handleCancel = () => {
    if (id) navigate(`/employees/${id}`);
    else navigate("/employees");
  };

const handleSubmit = async (values: EmployeeFormValues) => {
  if (!id) return;

  try {
    await updateMutation.mutateAsync({
      id: Number(id),
      data: values,
    });

    toast.success("Employee updated successfully");
    navigate(`/employees/${id}`);
  } catch (err) {
    toast.error("Failed to update employee");
  }
};

 return (
    <PageLayout title="Edit employee">
      {isLoading && <p>Loading employee...</p>}
      {error && <p style={{ color: "red" }}>Failed to load employee</p>}

      {data && (
        <EmployeeForm
          defaultValues={data}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={updateMutation.isPending}
        />
      )}
    </PageLayout>
  );
}

export default EditEmployeePage