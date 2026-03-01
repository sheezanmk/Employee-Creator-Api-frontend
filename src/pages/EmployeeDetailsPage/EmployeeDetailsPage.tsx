import { Link, useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
const EmployeeDetailsPage = () => {

    const {id} = useParams();

  return (
   <PageLayout
      title="Employee details"
      actions={<Link to={`/employees/${id}/edit`}>Edit</Link>}
    >
      <Link to="/employees">← Back</Link>
      <p>Employee id: {id}</p>
    </PageLayout>
  )
}

export default EmployeeDetailsPage