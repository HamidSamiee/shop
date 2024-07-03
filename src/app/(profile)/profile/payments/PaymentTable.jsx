
import React from 'react'
import { userPaymentsTheads } from '@/constants/tableHeads'
import toLocalDate from '@/utils/toLocalDate'
import { toPersianDigits, toPersianDigitsWithComma } from '@/utils/toPersianDigits'

const PaymentTable = ({payments}) => {
  return (
    <div className="overflow-auto shadow-xl rounded-lg">
              <table className="">
                        <thead>
                            <tr>
                                {
                                        userPaymentsTheads.map(h => {
                                            return <th className='whitespace-nowrap table__th' key={h.id}>{h.label}</th>
                                        })
                                }
                            </tr>
                        </thead>
                        <tbody>
                                { payments &&
                                    payments?.map((payment,index) =>{
                                    return <tr key={payment._id}>
                                                <td className="table__td">{toPersianDigits(index)}</td>
                                                <td className="table__td truncate">{toPersianDigits(payment.invoiceNumber)}</td>
                                                <td className="table__td">
                                                    <div className="flex flex-col gap-y-2 items-start">
                                                    {
                                                            payment.cart.productDetail.map(product =>{
                                                            return <span key={product._id} className='whitespace-nowrap px-1 py-0.5 rounded-lg bg-gray-400 text-white'>
                                                                    {product.title} 
                                                                </span>      
                                                            })  
                                                    } 
                                                    </div>
                                                
                                                </td>
                                                <td className="table__td whitespace-nowrap max-w-[280px] truncate">
                                                {
                                                    <div className="flex flex-col gap-y-2 items-start">
                                                    {
                                                            payment.cart.productDetail.map(product =>{
                                                            return <span key={product._id} className='whitespace-nowrap px-1 py-0.5'>
                                                                    {toPersianDigitsWithComma(product.offPrice)} تومان
                                                                </span>      
                                                            })  
                                                    } 
                                                    </div>
                                                }
                                                </td>
                                                <td className="table__td">{toPersianDigitsWithComma(payment.amount)}</td>
                                                <td className="table__td">{toLocalDate(payment.createdAt)}</td>
                                                <td className="table__td">
                                                    {
                                                        payment.status === 'COMPLETED'
                                                            ?
                                                            <span className='bg-green-500 rounded-xl px-1 py-0.5 text-white'>
                                                            موفق
                                                            </span>
                                                            :
                                                            <span className='bg-rose-500 rounded-xl px-1 py-0.5 text-white'>
                                                            ناموفق
                                                            </span>
                                                    }
                                                </td>
                                            </tr>
                                    })
                                }  
                        </tbody>
                </table>
          </div>
  )
}

export default PaymentTable