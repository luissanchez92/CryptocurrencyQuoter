import styled from '@emotion/styled'
import ImageCryptocurrencies from './img/imagen-criptos.png'
import Form from './components/form'
import Results from './components/Results'
import Spinner from './components/Spinner'
import { useState, useEffect } from 'react'


const Heading= styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align:center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 200px;
    height: 6px;
    background-color: #33A2FF;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const Container= styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image= styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {
  const [coins, setCoins]=useState({})
  const [response, setResponse]=useState({})
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    if (Object.keys(coins).length>0){
      const quote= async()=>{
        setLoading(true)
        const {state, currency}=coins
        const url= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency}&tsyms=${state}`

        const responseAPI= await fetch(url)
        const results= await responseAPI.json()
        
        console.log(results.DISPLAY[currency][state])
        setResponse(results.DISPLAY[currency][state])
        setLoading(false)

      }
      quote()
    }

  },[coins])
  return (
    <Container>
      <Image src={ImageCryptocurrencies} alt='image of cryptocurrencies'/>
      <div>
        <Heading>Quote the value of cryptocurrencies</Heading>
        <Form setCoins={setCoins}/>
        {loading && <Spinner/>}
        {response.PRICE && <Results response={response}/>}
      </div>
      

    </Container>
  
  )
}

export default App
