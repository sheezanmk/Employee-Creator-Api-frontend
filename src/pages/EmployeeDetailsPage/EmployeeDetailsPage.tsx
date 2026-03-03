import { Link, useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import { useEmployee } from "../../hooks/UseEmployee";
import styles from "./EmployeeDetailsPage.module.scss";
import Button from "../../components/Button/Button";
import type { ContractType, WorkType } from "../../types/employee";

const formatted = (value: ContractType | WorkType) =>
  value
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

const EmployeeDetailsPage = () => {

    const {id} = useParams();
    const { data, isLoading, error } = useEmployee(id);


  return (
   <PageLayout
      title="Employee details"
      actions={id ? <Button to={`/employees/${id}/edit`}>Edit</Button> : null}
    >
      <Link className={styles.backLink} to="/employees">← Back</Link>

       {isLoading && <p>Loading employee...</p>}

      {error && (
        <p style={{ color: "red" }}>Failed to load employee details</p>
      )}

 {data && (
  <div className={styles.card}>
    <div className={styles.grid}>
      <div className={styles.label}>Name</div>
      <div className={styles.value}>
        {data.firstName} {data.lastName}
      </div>

      <div className={styles.label}>Email</div>
      <div className={styles.value}>{data.email}</div>

      <div className={styles.label}>Mobile</div>
      <div className={styles.value}>{data.mobileNumber}</div>

      <div className={styles.label}>Address</div>
      <div className={styles.value}>{data.address}</div>

      <div className={styles.label}>Contract type</div>
      <div className={styles.value}>{formatted(data.contractType)}</div>

      <div className={styles.label}>Start date</div>
      <div className={styles.value}>{data.startDate}</div>

      <div className={styles.label}>Finish date</div>
      <div className={styles.value}>{data.finishDate ?? "N/A"}</div>

      <div className={styles.label}>Ongoing</div>
      <div className={styles.value}>{data.ongoing ? "Yes" : "No"}</div>

      <div className={styles.label}>Work type</div>
      <div className={styles.value}>{formatted(data.workType)}</div>

      <div className={styles.label}>Hours per week</div>
      <div className={styles.value}>{data.hoursPerWeek ?? "N/A"}</div>
    </div>
  </div>
)}
      
    </PageLayout>
  )
}

export default EmployeeDetailsPage