import { AuthResponseType } from "src/types/auth-response.types";
import http from "src/utils/http";

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponseType>("/register", body);