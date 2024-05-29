import { getAllCategories, addCategory } from "@/services/categoriesServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetCategories() {
    return useQuery({
        queryFn: getAllCategories,
        queryKey: ['get-categories'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export const useAddCategory = () => {
    return useMutation({ mutationFn: addCategory });
};