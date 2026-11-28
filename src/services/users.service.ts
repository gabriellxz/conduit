import { http } from "../lib/http"
import type { User } from "../types/user";

export const usersServices = {
    userRegister: async (data: User) => {
        const response = await http.post<{ user: User }>("/users", { user: data })
        return response;
    }
}