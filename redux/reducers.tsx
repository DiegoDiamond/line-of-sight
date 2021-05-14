type optionsType = {
    label: string
    title: string
    numbers: Array<number>
    current: number
}
type stateTypeOptions = {
    options: Array<optionsType>
}

const defaultStateOptions: stateTypeOptions = {
    options: [
        {
            label: 'words',
            title: 'Сколько слов',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            current: 7,
        },
        {
            label: 'letters',
            title: 'Сколько букв в словах',
            numbers: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            current: 3,
        },
        {
            label: 'startRange',
            title: 'Стартовое расстояние',
            numbers: [5, 10, 15, 20, 25, 30, 35, 40],
            current: 4,
        },
        {
            label: 'addRange',
            title: 'Увеличение расстояния',
            numbers: [5, 10, 15, 20, 25, 30, 35, 40],
            current: 4,
        },
        {
            label: 'speed',
            title: 'Скорость',
            numbers: [],
            current: 2,
        },
    ],
}

const SET_OPTIONS = 'SET_OPTIONS'

export const optionsReducer = (state = defaultStateOptions, action) => {
    switch (action.type) {
        case SET_OPTIONS:
            const newOptions = state.options.filter((item) => item.label !== action.payload.label)
            const updateOption = state.options.find((item) => item.label === action.payload.label)
            return {
                ...state,
                options: [...newOptions, { ...updateOption, ...action.payload }],
            }
        default:
            return state
    }
}

export const setOptionsAction = (payload) => ({
    type: SET_OPTIONS,
    payload,
})
