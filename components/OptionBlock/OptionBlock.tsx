import styled from '@emotion/styled'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setOptionsAction } from '../../redux/reducers'
import styles from './OptionBlock.module.scss'

export default function OptionBlock({ tag }) {
    // Option и Slider(input) не удается стилизовать styled-components, происходит баг и ползунок перестает двигаться, пришлось оставить SCSS module
    const Title = styled.span`
        font-size: 48.25px;
        line-height: 56.5px;
    `
    const Number = styled.span`
        font-size: 38.5px;
        line-height: 45px;
        color: #000;
    `

    const dispatch = useAppDispatch()
    const options = useAppSelector(({ options }) => options.options)
    const findObj = options.find((item) => item.label === tag)

    const { title, label, numbers, current } = findObj

    const Numbers = styled.div`
        align-self: normal;
        display: grid;
        grid-template-columns: repeat(${numbers.length}, 1fr);
        justify-items: center;
    `
    const onChangeInput = (event) => {
        dispatch(setOptionsAction({ label, current: event.target.value - 1 }))
    }

    return (
        <div>
            <div className={styles.option}>
                <Title>{title}</Title>
                <Numbers>
                    {numbers.map((item) => {
                        return <Number>{item}</Number>
                    })}
                </Numbers>
                <input
                    className={styles.option__slider}
                    type="range"
                    min="1"
                    max={numbers.length}
                    value={current + 1}
                    onChange={(event) => onChangeInput(event)}
                ></input>
            </div>
        </div>
    )
}
