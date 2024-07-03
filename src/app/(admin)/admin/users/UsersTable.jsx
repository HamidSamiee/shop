import { usersListsTheads } from '@/constants/tableHeads'
import toLocalDate from '@/utils/toLocalDate'
import { toPersianDigits } from '@/utils/toPersianDigits'
import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const UsersTable = ({users}) => {
  return (
    <div className=" overflow-auto shadow-xl rounded-lg w-full">
              <table className="">
                        <thead>
                            <tr>
                                {
                                        usersListsTheads.map(h => {
                                            return <th className='whitespace-nowrap table__th' key={h.id}>{h.label}</th>
                                        })
                                }
                            </tr>
                        </thead>
                        <tbody>
                                { users &&
                                    users.map((user,index) =>{
                                    return <tr key={user._id}>
                                                <td className="table__td">{toPersianDigits(index)}</td>
                                                <td className="table__td truncate">{user.name}</td>
                                                <td className="table__td">{user.email }</td>
                                                <td className="table__td2">
                                                    <div className=" flex items-center gap-x-">
                                                            {user.phoneNumber}<span>{user.isVerifiedPhoneNumber && <FaCheckCircle className='text-green-500 w-6 h-6 ' />}</span>
                                                    </div>   
                                                </td>
                                                <td className="table__td whitespace-nowrap">
                                                {
                                                    <div className="flex flex-col gap-y-2 items-start">
                                                    {
                                                            user?.Products.map((product,index) =>{
                                                            return <span key={index} className='whitespace-nowrap px-1 py-0.5 badge badge--secondary'>
                                                                    {product.title} 
                                                                </span>      
                                                            })  
                                                    } 
                                                    </div>
                                                }
                                                </td>
                                                <td className="table__td">{toLocalDate(user.createdAt)}</td>
                                                <td className="table__td font-medium whitespace-nowrap">
                                                    <Link href={`/admin/users/${user._id}`} >مشاهده جزییات</Link>
                                                </td>
                                            </tr>
                                    })
                                }  
                        </tbody>
                </table>
          </div>
  )
}

export default UsersTable