
import { getPaymentData } from "@/services/paymentServices";
import { useQuery } from "@tanstack/react-query";


export default function useGetPayments() {
    return useQuery({
        queryFn: getPaymentData,
        queryKey: ['profile'],
        retry: false,
        refetchOnWindowFocus: true,
    });
}