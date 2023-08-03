import styled from '@emotion/styled'
import useSelectMoney from '../hooks/useSelectMoney'

const InputSubmit= styled.input`
    background-color: #33FFD4;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-width: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;

    &:hover{
        background-color: #33FF9F;
        cursor: pointer;
    }
`
const Form = () => {
    const [SelectMoney]=useSelectMoney()
    SelectMoney()
  return (
    <div>
        <InputSubmit type='submit' value='cotizar'/>
      
    </div>
  )
}

export default Form
