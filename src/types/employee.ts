export type ContractType = "PERMANENT" | "CONTRACT";
export type WorkType = "FULL_TIME" | "PART_TIME";

export type EmployeeResponseDto = {
    id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  address: string;

  contractType: ContractType;
  startDate: string; 
  finishDate?: string; 
  ongoing: boolean;

  workType: WorkType;
  hoursPerWeek?: number;
}

export type CreateEmployeeDto = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  address: string;

  contractType: ContractType;
  startDate: string;
  finishDate?: string;
  ongoing: boolean;

  workType: WorkType;
  hoursPerWeek?: number;
};

export type UpdateEmployeeDto = CreateEmployeeDto;

export type PatchEmployeeDto = Partial<CreateEmployeeDto>;