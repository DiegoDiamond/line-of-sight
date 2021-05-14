import React from 'react'
import styled from '@emotion/styled'
import { dictionary } from '../../redux/store'
import { useAppSelector } from '../../redux/hooks'
import { useRouter } from 'next/router'

export default function GameContent() {
    const Word = styled.span`
        font-size: 60px;
        line-height: 70px;
        font-weight: 900;
    `
    const router = useRouter()
    const options = useAppSelector(({ options }) => options.options)
    const findCurrent = (tag) => {
        const findObj = options.find((item) => item.label === tag)
        if (tag === 'speed') return findObj.current
        return findObj.numbers[findObj.current]
    }
    const words = findCurrent('words')
    const letters = findCurrent('letters')
    const startRange = findCurrent('startRange')
    const addRange = findCurrent('addRange')
    const speed = findCurrent('speed')

    function createGameArray() {
        const filterDict = dictionary.filter((item) => item.length === letters) // фильтруем по словарю по длине слова
        const randomIdx = (max) => {
            return Math.floor(Math.random() * max)
        }
        const newArray = [...Array(words).keys()].map((item) => {
            return filterDict[randomIdx(filterDict.length)]
        }) // рандомно отбираем N слов в игровой массив
        return newArray
    }

    const [gameArray, setGameArray] = React.useState(() => createGameArray()) // создаем один раз игровой массив, затем уменьшаем его по мере прохождения игры

    const Separator = styled.img`
        margin: 0 ${startRange + addRange * (words - gameArray.length) + 166}px; /* 166px - default по верстке */
    `
    React.useEffect(() => {
        async function asyncRepeat(f, n) {
            while (n-- > 0) await f()
        }
        asyncRepeat(delay, words).then(() => {
            router.push('/finish')
        }) // После первого рендеринга запускаем асинхронный цикл на N повторов
    }, [])

    const delay = (ms = speed * 1000) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setGameArray((prev) => {
                    if (prev.length > 1) return prev.slice(1)
                    return prev
                })
                resolve()
            }, ms)
        })
    }
    const separating = (word) => {
        console.log(word)
        return [word.slice(0, word.length / 2), word.slice(word.length / 2)]
    }

    return (
        <div>
            <Word>{separating(gameArray[0])[0]}</Word>
            <Separator src="./separator.png" alt="" />
            <Word>{separating(gameArray[0])[1]}</Word>
        </div>
    )
}
