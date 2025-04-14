
import SwitchLanguage from '@/components/common/switch-language'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AuthNav() {
    return (
        <nav className='flex items-center justify-center sm:justify-end space-x-6 sm:space-x-12 pt-7 pl-14 pr-14 sm:pt-20 sm:pr-20'>
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
