import { adminPaymentListTableTHeads } from '@/constants/tableHeads'
import toLocalDate from '@/utils/toLocalDate'
import { toPersianDigits, toPersianDigitsWithComma } from '@/utils/toPersianDigits'
import Link from 'next/link'
import React from 'react'
import { FaEye } from 'react-icons/fa'

const PaymentsTable = ({payments}) => {
  return (
    <div className="overflow-auto shadow-xl rounded-lg mt-5">
              <table className="p-4">
                        <thead>
                            <tr>
                                {
                                        adminPaymentListTableTHeads.map(h => {
                                            return <th className='whitespace-nowrap table__th' key={h.id}>{h.label}</th>
                                        })
                                }
                            </tr>
                        </thead>
                        <tbody>
                                { payments &&
                                    payments.map((payment,index) =>{
                                    return  <tr key={payment._id} className=''>
                                                <td className="table__td ">{toPersianDigits(index+1)} </td>
                                                <td className="table__td truncate">{toPersianDigits(payment.invoiceNumber)}</td>
                                                <td className="table__td min-w-[300px]">{payment.description }</td>
                                                
                                                <td className="table__td ">
                                                    {
                                                        <span className='flex flex-col justify-between gap-y-2'>
                                                                <span>{payment.user.name}</span>
                                                                <span>{payment.user.email}</span>
                                                                <span>{payment.user.phoneNumber}</span>
                                                        </span>
                                                    }
                                                </td>
                                                
                                                <td className="table__td ">
                                                    <div className="h-full flex flex-col justify-between gap-y-2">
                                                        { payment.cart.productDetail.map(p=>{
                                                        return <span key={p._id} className='flex-1 badge badge--secondary'>
                                                                {p.title}
                                                        </span>
                                                      })
                                                    }
                                                    </div>
                                                </td>
                                                
                                                <td className="table__td text-center">{toPersianDigitsWithComma(payment.amount)}</td>
                                                <td className="table__td text-center">{toLocalDate(payment.createdAt)}</td>
                                                <td className={`table__td  text-center `}>
                                                        <span className={`${payment.status='COMPLETED'? 'badge badge--success' : 'badge badge--danger' }`}>{payment.status='COMPLETED' ? 'موفق': 'ناموفق'}</span>
                                                </td>
                                                <td className="table__td text-center">
                                                    <button >
                                                        <Link href={`/admin/payments/${payment._id}`} >
                                                            <FaEye className='text-primary-900 w-6 h-6' />
                                                        </Link>   
                                                    </button>
                                                </td>
                                            </tr>
                                    })
                                }  
                        </tbody>
                </table>
     </div>
  )
}

export default PaymentsTable