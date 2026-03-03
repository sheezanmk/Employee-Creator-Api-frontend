import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createEmployee,
  deleteEmployee,
  updateEmployee,
  patchEmployee
} from "../services/employee-services";
import type { UpdateEmployeeDto, PatchEmployeeDto } from "../types/employee";

export function useEmployeeMutations() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateEmployeeDto }) =>
      updateEmployee(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      queryClient.invalidateQueries({ queryKey: ["employee", variables.id] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const patchMutation = useMutation({
  mutationFn: ({ id, data }: { id: number; data: PatchEmployeeDto }) =>
    patchEmployee(id, data),
  onSuccess: (_, variables) => {
    queryClient.invalidateQueries({ queryKey: ["employees"] });
    queryClient.invalidateQueries({ queryKey: ["employee", variables.id] });
  },
});

  return {
    createMutation,
    updateMutation,
    patchMutation,
    deleteMutation,
  };
}