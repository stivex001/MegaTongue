export interface UserRegistrationData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  status?: boolean
  message?: string;
  // Add other properties as needed
}

export interface SweetAlertProps {
  title?: string;
  text?: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
}
