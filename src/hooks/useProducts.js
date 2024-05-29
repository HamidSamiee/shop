import { getAllProducts, addProdcut, removeProdcut, getProductById, updateProduct } from "@/services/productsServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetProducts() {
    return useQuery({
        queryFn: getAllProducts,
        queryKey: ['get-products'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export function useGetProduct(id) {
    return useQuery({
        queryFn: () => getProductById(id),
        queryKey: ['get-product', id],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export const useAddProduct = () => {
    return useMutation({ mutationFn: addProdcut });
};

export const useRemoveProduct = () => {
    return useMutation({ mutationFn: removeProdcut });
};

export const useUpdateProduct = () => {
    return useMutation({ mutationFn: updateProduct });
};