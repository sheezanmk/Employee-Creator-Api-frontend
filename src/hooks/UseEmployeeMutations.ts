import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "../services/employee-services";

export function useEmployeeMutations() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
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

  return {
    createMutation,
    updateMutation,
    deleteMutation,
  };
}