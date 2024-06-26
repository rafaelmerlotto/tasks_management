import { AppProps } from 'next/dist/shared/lib/router/router'
import React from 'react'
 
export default function App({ Component, pageProps }:AppProps) {
   return <Component {...pageProps} />
}