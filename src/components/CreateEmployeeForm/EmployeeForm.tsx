import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { EmployeeFormValues } from "../../form/employeeFormSchema";
import { employeeFormSchema } from "../../form/employeeFormSchema";
import styles from "./EmployeeForm.module.scss";
import Button from "../Button/Button";

type EmployeeFormProps = {
  defaultValues?: Partial<EmployeeFormValues>;
  onSubmit: (values: EmployeeFormValues) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
};

export default function EmployeeForm({
  defaultValues,
  onSubmit,
  onCancel,
  isSubmitting,
}: EmployeeFormProps) {
  
    const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema) as any,
    defaultValues: {
      contractType: "PERMANENT",
      ongoing: true,
      workType: "FULL_TIME",
      ...defaultValues,
    },
  });

  // If defaultValues arrive async (edit page), reset the form once data is loaded
  useEffect(() => {
    if (defaultValues) reset({ ...defaultValues } as EmployeeFormValues);
  }, [defaultValues, reset]);

  const ongoing = watch("ongoing");

  // If ongoing is true, clear finishDate to avoid confusion
  useEffect(() => {
    if (ongoing) setValue("finishDate", "");
  }, [ongoing, setValue]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Personal information */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal information</h2>

        <div className={styles.field}>
          <label>First name</label>
          <input {...register("firstName")} />
          {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
        </div>

        <div className={styles.field}>
          <label>Last name</label>
          <input {...register("lastName")} />
          {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Contact details */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact details</h2>

        <div className={styles.field}>
          <label>Email address</label>
          <input {...register("email")} />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        <div className={styles.field}>
          <label>Mobile number</label>
          <input placeholder="+61412345678" {...register("mobileNumber")} />
          {errors.mobileNumber && (
            <p className={styles.error}>{errors.mobileNumber.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <label>Residential address</label>
          <input {...register("address")} />
          {errors.address && <p className={styles.error}>{errors.address.message}</p>}
        </div>
      </div>

      {/* Employee status */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Employee status</h2>

        <div className={styles.field}>
          <label>Contract type</label>
          <select {...register("contractType")}>
            <option value="PERMANENT">Permanent</option>
            <option value="CONTRACT">Contract</option>
          </select>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Start date</label>
            <input type="date" {...register("startDate")} />
            {errors.startDate && <p className={styles.error}>{errors.startDate.message}</p>}
          </div>

          <div className={styles.field}>
            <label>Finish date</label>
            <input type="date" disabled={ongoing} {...register("finishDate")} />
            {errors.finishDate && <p className={styles.error}>{errors.finishDate.message}</p>}
          </div>
        </div>

        <div className={styles.checkboxRow}>
          <input type="checkbox" {...register("ongoing")} />
          <span>Ongoing</span>
        </div>

        <div className={styles.field}>
          <label>Work type</label>
          <select {...register("workType")}>
            <option value="FULL_TIME">Full-time</option>
            <option value="PART_TIME">Part-time</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Hours per week</label>
          <input type="number" min={1} max={60} {...register("hoursPerWeek", { valueAsNumber: true })} />
          {errors.hoursPerWeek && (
            <p className={styles.error}>{errors.hoursPerWeek.message}</p>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <Button type="submit">{isSubmitting ? "Saving..." : "Save"}</Button>
        <button type="button" className={styles.cancel} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}