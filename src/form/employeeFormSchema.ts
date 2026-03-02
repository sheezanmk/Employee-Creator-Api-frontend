import { z } from "zod";

export const employeeFormSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(50),
    lastName: z.string().min(1, "Last name is required").max(50),
    email: z.string().min(1, "Email is required").max(120).email("Invalid email"),
    mobileNumber: z
      .string()
      .min(1, "Mobile number is required")
      .regex(/^\+61\d{9}$/, "Must match +61 followed by 9 digits"),
       address: z.string().min(1, "Address is required").max(255),
       contractType: z.enum(["PERMANENT", "CONTRACT"]),
    startDate: z.string().min(1, "Start date is required"),
    finishDate: z.string().optional(),
    ongoing: z.boolean(),
    workType: z.enum(["FULL_TIME", "PART_TIME"]),
  hoursPerWeek: z.coerce
  .number()
  .int("Must be a whole number")
  .min(1, "Minimum is 1")
  .max(60, "Maximum is 60"),
})
.superRefine ((data, ctx) => {
    // If ongoing is true, finishDate should not be required
    // If ongoing is false, finishDate should exist (for CONTRACT generally)
    if (!data.ongoing && !data.finishDate) {
      ctx.addIssue({
        code: "custom",
        message: "Finish date is required when not ongoing",
        path: ["finishDate"],
      });
    }
    
    if (!data.hoursPerWeek) {
      ctx.addIssue({
        code: "custom",
        message: "Hours per week is required",
        path: ["hoursPerWeek"],
      });
    }
  });

  export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;

