import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { store } from '../redux/store'
import { Header } from './'

export default function MainLayout({ children, header }) {
    return (
        <Provider store={store}>
            <Head>
                <title>Sirius Future - Тренажер «Поле зрения»</title>
                <meta name="description" content='Sirius Future - Тренажер "Поле зрения"' />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header header={header} />
            {children}
        </Provider>
    )
}
