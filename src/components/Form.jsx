import styled from '@emotion/styled'
import useSelectMoney from '../hooks/useSelectMoney'
import {money} from '../data/money'
import { useEffect, useState} from 'react'
import Error from './Error'

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
    margin-top: 30px;

    &:hover{
      background-color: #33FF9F;
      cursor: pointer;
    }
`
const Form = ({setCoins}) => {
  const [crypto, setCrypto]=useState([])
  const [error, setError]=useState(false)

  const [state, SelectMoney]=useSelectMoney('Select your Currency', money)
  const [currency, SelectCurrency]=useSelectMoney('Select your CryptoCurrency', crypto)

  useEffect(()=>{
    const responseAPI= async()=>{
      const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const response= await fetch(url)
      const results= await response.json()

      const arrayCryptos= results.Data.map(crypto=>{

        const objCrypto={
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        return objCrypto;
      })
      setCrypto(arrayCryptos)

    }
    responseAPI()

  },[])

  const handlerSubmit=(event)=>{
    event.preventDefault()
    if ([state, currency].includes('')){
      setError(true)
      return; 
    }
    setError(false)
    setCoins({
      state,
      currency
    })
  }

  return (
    <diV>
      {error && <Error>Complete all fields</Error>}
      <form onSubmit={handlerSubmit}>
        <SelectMoney/>
        <SelectCurrency/>

        <InputSubmit type='submit' value='cotizar'/>
        
      </form>
    </diV>
  )
}

export default Form
