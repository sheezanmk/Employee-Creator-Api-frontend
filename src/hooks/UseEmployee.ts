import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../services/employee-services";
import type { EmployeeResponseDto } from "../types/employee";

export function useEmployee(id: string | undefined) {
  return useQuery<EmployeeResponseDto>({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById(id!),
    enabled: !!id,
  });
}