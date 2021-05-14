import React from 'react'
import styled from '@emotion/styled'
import MainLayout from '../components/MainLayout'
import GameContent from '../components/GameContent/GameContent'

export default function game() {
    const Content = styled.div`
        padding-top: 695px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    return (
        <MainLayout header={'none'}>
            <Content>
                <GameContent />
            </Content>
        </MainLayout>
    )
}
