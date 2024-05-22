import { addToCart } from "@/services/cartServices"
import { useMutation } from "@tanstack/react-query"

export const useAddToCart = () => {
    return useMutation({
        mutationFn: addToCart
    })
}