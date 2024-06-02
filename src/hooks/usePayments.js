
import { getAllPayments } from "@/services/paymentServices";
import { useQuery } from "@tanstack/react-query";


export const useGetPayments = () =>
    useQuery({ queryKey: ["payments"], queryFn: getAllPayments, retry: false });
