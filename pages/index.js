import React from 'react'
import Link from 'next/link'
import { OptionBlock, OptionSpeed } from '../components/'
import MainLayout from '../components/MainLayout'
import styled from '@emotion/styled'

export default function Home() {
    const Options = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        justify-items: center;
        padding: 370px 259px;
        grid-gap: 38px 42px;
    `
    const StartButton = styled.div`
        background: #fdd207;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 81px;
        padding: 26px 115px;
        font-size: 49px;
        line-height: 57px;
        color: #371548;
        cursor: pointer;
    `
    return (
        <MainLayout>
            <Options>
                <OptionBlock tag={'words'} />
                <OptionBlock tag={'letters'} />
                <OptionBlock tag={'startRange'} />
                <OptionBlock tag={'addRange'} />
                <OptionSpeed tag={'speed'} />
                <Link href="/game">
                    <StartButton>СТАРТ</StartButton>
                </Link>
            </Options>
        </MainLayout>
    )
}
