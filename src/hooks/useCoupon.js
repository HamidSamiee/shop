import { addCoupen, deleteCoupen, getAllCoupon, getCouponById, updateCoupen } from "@/services/couponServices";
import { useMutation, useQuery } from "@tanstack/react-query";



export function useGetCoupons() {
    return useQuery({
        queryFn: getAllCoupon,
        queryKey: ['get-coupons'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export function useGetCouponById(id) {
    return useQuery({
        queryFn: () => getCouponById(id),
        queryKey: ['get-coupon', id],
        retry: false,
        refetchOnWindowFocus: true,
    });
}

export function useAddCoupon() {
    return useMutation({
        mutationFn: addCoupen
    })
}

export function useUpdateCoupon() {
    return useMutation({
        mutationFn: updateCoupen
    })
}

export function useDeleteCoupon() {
    return useMutation({
        mutationFn: deleteCoupen
    })
}
