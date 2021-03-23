import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () =>  {
    return (

        <div>
            <PageTitle title='Contato'/>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div> 
    )
}

export default Contato