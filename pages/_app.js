import React, { Component } from 'react'
import '../css/style.css'

const MyApp = ({component, pageProps}) => {
    return (
        <div>
            <h1>MyAPP</h1>
            <Component {...pageProps} />
        </div>
    ) 
}

export default MyApp