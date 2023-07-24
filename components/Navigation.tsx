'use client'

import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className={'fixed bg-white w-full max-w-7xl m-auto inset-x-0 top-0 px-3 2xl:px-0'}>
            <div className={'flex justify-between items-center h-14 '}>
                <div>
                    <h1 className={'font-bold text-lg'}><Link href={'/'}>Borrowmat</Link></h1>
                </div>
                <div>
                    <ul className={'flex font-medium text-md'}>
                        <li className={'px-2'}><Link className={pathname === '/' ? 'text-zinc-900 ' : 'text-zinc-400 hover:text-zinc-600'} href={'/'}>Loans</Link></li>
                        <li className={'px-2'}><Link className={pathname === '/savings' ? 'text-zinc-900 ' : 'text-zinc-400 hover:text-zinc-600'} href={'/savings'}>Savings</Link></li>
                        <li className={'px-2'}><Link className={pathname === '/partners' ? 'text-zinc-900 ' : 'text-zinc-400 hover:text-zinc-600'} href={'/partners'}>For partners</Link></li>
                        <li className={'px-2'}><Link className={pathname === '/about' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'} href={'/about'}>About Us</Link></li>
                        <li className={'pl-2 text-zinc-400 hover:text-zinc-600'}>How it works</li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}