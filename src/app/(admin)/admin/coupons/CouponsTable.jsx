'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { couponListTableTHeads } from '@/constants/tableHeads';
import Link from 'next/link';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toPersianDigits, toPersianDigitsWithComma } from '@/utils/toPersianDigits';
import toLocalDate from '@/utils/toLocalDate';
import { useDeleteCoupon } from '@/hooks/useCoupon';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function CouponsTable({ coupons }) {
  
  const queryClient = useQueryClient(); 
  const { mutateAsync} = useDeleteCoupon();

  const removeCouponHandler =async(id) => {
    try {
      const { message } = await mutateAsync(id);
      queryClient.invalidateQueries(['get-coupons'])
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
    return (
     <TableContainer component={Paper}  >
        <Table sx={{ minWidth: 700 }} aria-label="CouponsTable">
            <TableHead>
            <TableRow>
                {
                            couponListTableTHeads.map(h => <StyledTableCell key={h.id} align="center" className='font-sans whitespace-nowrap'>{h.label }</StyledTableCell>)
                }
            </TableRow>
            </TableHead>
            <TableBody>
            {coupons && coupons.map((coupon,index) => (
                <StyledTableRow key={coupon._id} >
                        <StyledTableCell component="th" scope="row" className='font-sans'>{toPersianDigits(index+1)}</StyledTableCell>
                        <StyledTableCell align="center" className='font-sans whitespace-nowrap'>{toPersianDigits(coupon.code)}</StyledTableCell>
                        <StyledTableCell align="center"><span className='font-sans badge badge--secondary'>{coupon.type}</span></StyledTableCell>
                        <StyledTableCell align="center" className='font-sans'>{toPersianDigitsWithComma(coupon.amount)}</StyledTableCell>
                        <StyledTableCell align="center" className='flex flex-col gap-y-2'>{coupon.productIds.map(p=><span key={p._id} className="font-sans badge badge--secondary">{p.title}</span>)}</StyledTableCell>
                        <StyledTableCell align="center" className='font-sans'>{toPersianDigits(coupon.usageCount)}</StyledTableCell>
                        <StyledTableCell align="center" className='font-sans'>{toPersianDigits(coupon.usageLimit)}</StyledTableCell>
                        <StyledTableCell align="center" className='font-sans'>{toLocalDate(coupon.expireDate)}</StyledTableCell>
                        <StyledTableCell align="center" className='font-sans'>
                        <div className='flex gap-x-2 items-center h-full'>
                                    <button onClick={()=>removeCouponHandler(coupon._id)}>
                                        <FaTrashAlt className='text-rose-600 w-6 h-6' />
                                    </button>
                                    <button >
                                        <Link href={`/admin/coupons/edit/${coupon._id}`} > 
                                                <FaEdit className='text-secondary-600 w-6 h-6' />  
                                        </Link>
                                    </button>
                        </div>
                        </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
                </TableContainer>
    
  );
}
