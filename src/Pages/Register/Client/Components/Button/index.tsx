import {
    ButtonContainer
} from './style'

interface ButtonTitleProps{
    title: string;
}

export default function ButtonComponent({title}: ButtonTitleProps){
    return(
        <ButtonContainer>{title}</ButtonContainer>
    )
}