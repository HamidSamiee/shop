import { decrementFromCart } from "@/services/cartServices"
import { useMutation } from "@tanstack/react-query"

export const useRemoveFromCart = () => {
    return useMutation({
        mutationFn: decrementFromCart
    })
}
