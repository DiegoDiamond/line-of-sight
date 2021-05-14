import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

type propsType = {
    header: string
}
export default function Header({ header = 'block' }: propsType) {
    const Header = styled.header`
        position: relative;
    `
    const Title = styled.h1`
        position: absolute;
        top: 116px;
        width: 100%;
        text-align: center;
        font-size: 64px;
        line-height: 75px;
        color: #2b3172;
        display: ${header};
        cursor: default;
    `
    const Image = styled.img`
        position: absolute;
        top: 86px;
        right: 54.5px;
        cursor: pointer;
    `
    return (
        <Header>
            <Title>Тренажер «Поле зрения»</Title>
            <Link href="/">
                <Image src="/logo.png" alt="Sirius Futures logo" />
            </Link>
        </Header>
    )
}
