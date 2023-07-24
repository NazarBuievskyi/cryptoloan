'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function SwapperCalculator(){
    const pathname = usePathname()

    return(
        <div className={'flex bg-gray-100 rounded-sm p-1 text-center font-semibold text-sm mb-2'}>
            <Link href={'/'} className={pathname === '/' ? 'py-1 w-full cursor-pointer rounded-sm bg-white ' : 'py-1 w-full cursor-pointer rounded-sm text-gray-500'}>Loans</Link>
            <Link href={'/savings'} className={pathname === '/savings' ? 'py-1 w-w-full cursor-pointer rounded-sm bg-white' : 'py-1 w-full cursor-pointer rounded-sm text-gray-500'}>Savings</Link>
        </div>
    )
}