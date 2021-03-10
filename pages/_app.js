import React from 'react'
import '../css/style.css'
import Header from '../components/Header'

const MyApp = ({Component, pageProps}) => {
    return (
        <div>
            <Header/>
            <div className='container mx-auto'>
            <Component {...pageProps} />
            </div>
        </div>
    ) 
}

export default MyApp