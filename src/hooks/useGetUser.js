import { getUserData } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";


export default function useGetUser() {
    return useQuery({
        queryFn: getUserData,
        queryKey: ['profile'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}