import Button from "../Button/Button";
import styles from "./EmployeeCard.module.scss";


type EmployeeCardProps = {
  id: number;
  firstName: string;
  lastName: string;
  contractType: string;
  email: string;
};

const EmployeeCard = ({id, firstName, lastName, contractType, email}: EmployeeCardProps) => {

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p>
          <strong>Name:</strong> {firstName} {lastName}
        </p>
        <p>
          <strong>Contract Type:</strong> {contractType}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <div className={styles.actions}>
        <Button to={`/employees/${id}/edit`}>Edit</Button>
        <Button onClick={() => console.log("Remove", id)}>Remove</Button>
      </div>
    </div>
  );
};

export default EmployeeCard