import styled from '@emotion/styled'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setOptionsAction } from '../../redux/reducers'

type propType = {
    tag: string
}
export default function OptionBlock({ tag }: propType) {
    const Option = styled.div`
        color: #371548;
        height: 220px;
        width: 708px;
        padding: 32px 95px 16px;
        cursor: default;
        background: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 48.25px;
    `
    const TitleGroup = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    `
    const Title = styled.span`
        font-size: 48.25px;
        line-height: 56.5px;
    `
    const Input = styled.input`
        background: #ffffff;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 20px;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        width: 126.5px;
    `
    const GroupButtons = styled.div`
        margin-top: 16px;
        display: flex;
        justify-content: center;
    `
    const Button = styled.div`
        display: inline-block;
        position: relative;
        width: 92px;
        height: 92px;
        background: #fff;
        z-index: 10;
        margin: 0 10px;
        cursor: pointer;
    `
    const BackgroundButton = styled.div`
        position: absolute;
        z-index: 11;
        width: 90%;
        height: 90%;
        top: 5%;
        left: 5%;
        background: #000;
    `
    const Image = styled.img`
        z-index: 12;
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
    `
    const dispatch = useAppDispatch()
    const options = useAppSelector(({ options }) => options.options)
    const { current: input, label, title } = options.find((item) => item.label === tag)

    const onChangeInput = (arg) => {
        if ((input === 1 && arg < 0) || (input === 5 && arg > 0)) return // защита от дурака, время от 1 до 5 секунд
        if (input > 0) dispatch(setOptionsAction({ label: tag, current: input + arg }))
    }
    const onChangeInputHandle = (event) => {
        if (event.target.value > 5) return // ручной ввод в input
        if (event.target.value < 1 && event.target.value) return
        dispatch(setOptionsAction({ label, current: event.target.value }))
    }

    return (
        <div>
            <Option>
                <TitleGroup>
                    <Title>{title}</Title>
                    <Input type="text" value={input} onChange={onChangeInputHandle} />
                    <Title>сек.</Title>
                </TitleGroup>
                <GroupButtons>
                    <Button onClick={() => onChangeInput(-0.5)}>
                        <Image src="./minus.svg" alt="" />
                        <BackgroundButton />
                    </Button>
                    <Button onClick={() => onChangeInput(0.5)}>
                        <Image src="./plus.svg" alt="" />
                        <BackgroundButton />
                    </Button>
                </GroupButtons>
            </Option>
        </div>
    )
}
