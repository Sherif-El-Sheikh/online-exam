
import SwitchLanguage from '@/components/common/switch-language'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AuthNav() {
    return (
        <nav className='flex items-center max-[375px]:justify-center justify-end space-x-4 md:space-x-5 lg:space-x-12 pt-7 pl-8 md:pl-9 lg:pl-12 pr-8 md:pt-20 md:pr-9 lg:pr-12'>
            {/* Select Lang */}
            <SwitchLanguage/>

            {/* Button Signin*/}
            <Button variant="signin">
                <Link href="/auth/login">Sign in</Link>
            </Button>

            {/* Button Register*/}
            <Button variant="register">
                <Link href="/auth/register">Register</Link>
            </Button>
        </nav>
    )
}
