import './index.scss'

export const Chip = (props: { text: string }) => {
    const {text} = props
    return <li className='chip'>{text}</li>
}
