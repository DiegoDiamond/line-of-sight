import React from 'react'
import styled from '@emotion/styled'
import MainLayout from '../components/MainLayout'

export default function finish() {
    const Image = styled.img`
        padding: 446px 756px 0;
    `
    const Title = styled.h2`
        font-size: 64px;
        line-height: 75px;
        text-align: center;
    `
    // баг image shifting/jumping
    return (
        <MainLayout header={'none'}>
            <Image src="./finish.png" alt="" />
            <Title>Отличная работа!</Title>
        </MainLayout>
    )
}
