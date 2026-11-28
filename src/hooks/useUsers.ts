import { useMutation } from "@tanstack/react-query";
import { usersServices } from "../services/users.service";

export function useCreateUser() {
    const mutation = useMutation({
        mutationFn: usersServices.userRegister,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })

    return { mutation }
}