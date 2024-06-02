import { getAllCategories, addCategory, deleteCategory, updateCategory, getCategoryById } from "@/services/categoriesServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetCategories() {
    return useQuery({
        queryFn: getAllCategories,
        queryKey: ['get-categories'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export function useGetCategory(id) {
    return useQuery({
        queryFn: () => getCategoryById(id),
        queryKey: ['get-category', id],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export const useAddCategory = () => {
    return useMutation({ mutationFn: addCategory });
};

export const useDeleteCategory = () => {
    return useMutation({ mutationFn: deleteCategory });
};

export const useUpdateCategory = () => {
    return useMutation({ mutationFn: updateCategory });
};