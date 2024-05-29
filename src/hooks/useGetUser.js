import { getUserData, getAllUsersData } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";


export default function useGetUser() {
    return useQuery({
        queryFn: getUserData,
        queryKey: ['profile'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export function useGetUsers() {
    return useQuery({
        queryFn: getAllUsersData,
        queryKey: ['get-users'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}