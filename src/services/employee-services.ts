import type {
    CreateEmployeeDto,
    EmployeeResponseDto,
  PatchEmployeeDto,
  UpdateEmployeeDto,
} from "../types/employee";

const BASE_URL = "http://localhost:8080/api/employee";

async function parseError(response: Response) {
    const text = await response.text();
    try {
        return JSON.parse(text);
    }
    catch {
        return text || "Request failed";
    }
}

export async function getEmployees(): Promise<EmployeeResponseDto[]> {
    const response = await fetch(BASE_URL);
    if(!response.ok) throw new Error(await parseError(response));
    return response.json();
}

export async function getEmployeeById(id: string | number): Promise<EmployeeResponseDto> {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error(await parseError(response));
    return response.json();

}

export async function createEmployee(data: CreateEmployeeDto): Promise<EmployeeResponseDto> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data),
    });

    if(!response.ok) throw new Error(await parseError(response));
    return response.json();
}

export async function updateEmployee(
  id: string | number,
  data: UpdateEmployeeDto
): Promise<EmployeeResponseDto> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(await parseError(response));
  return response.json();
}

export async function patchEmployee(
  id: string | number,
  data: PatchEmployeeDto
): Promise<EmployeeResponseDto> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(await parseError(response));
  return response.json();
}

export async function deleteEmployee(id: string | number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error(await parseError(response));
}



