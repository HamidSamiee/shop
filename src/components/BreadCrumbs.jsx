'use client'
import Link from 'next/link'
import React from 'react'

const BreadCrumbs = ({searchParams}) => {
  return (
    <div>
                <ol className="flex items-center gap-2">
                  <li>
                    <div className="!mr-0 flex items-center text-lg font-medium">
                      <Link href="/" className="opacity-60 transition-all duration-300 hover:text-blue-600"
                        ><svg className="mr-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" /></svg
                      ></Link>
                    </div>
                  </li>
                  <li className="inline-flex">
                    <div className="flex items-center gap-2 text-lg font-medium opacity-60">
                      <span>/ </span>
                      <Link href="/products" className="transition-all duration-300 hover:text-blue-600"> محصولات </Link>
                    </div>
                  </li>
                  {
                    searchParams.category == 'book'| searchParams.category =='mobile'|searchParams.category == 'laptop' ? 
                    <li className="inline-flex">
                                        <div className="flex items-center gap-2 text-lg font-medium opacity-60">
                                          <span>/ </span>
                                          <span href="" className="transition-all duration-300"> 
                                              {searchParams.category == 'book' ? 'کتاب' : searchParams.category == 'mobile' ? 'موبایل' : searchParams.category == 'laptop' ? 'لپ تاپ' : null}
                                          </span>
                                        </div>
                    </li>
                    : null
                  }
                </ol>
            </div>
  )
}

export default BreadCrumbs