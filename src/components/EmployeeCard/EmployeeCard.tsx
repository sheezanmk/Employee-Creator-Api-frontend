import type { ContractType } from "../../types/employee";
import Button from "../Button/Button";
import styles from "./EmployeeCard.module.scss";



type EmployeeCardProps = {
  id: number;
  firstName: string;
  lastName: string;
  contractType: ContractType;
  email: string;
  onRemove: (id: number) => void;
 isRemoving?: boolean;
};

const EmployeeCard = ({id, firstName, lastName, contractType, email, onRemove, isRemoving}: EmployeeCardProps) => {

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
        <Button to={`/employees/${id}`}>View</Button>
        <Button to={`/employees/${id}/edit`}>Edit</Button>
        <Button onClick={() => onRemove(id)}>Remove</Button>
      </div>
    </div>
  );
};

export default EmployeeCard