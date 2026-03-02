import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../services/employee-services";
import type { EmployeeResponseDto } from "../types/employee";

export function useEmployees() {
  return useQuery<EmployeeResponseDto[]>({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
}