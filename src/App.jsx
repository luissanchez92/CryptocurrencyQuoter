import styled from '@emotion/styled'
import ImageCryptocurrencies from './img/imagen-criptos.png'
import Form from './components/form'

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
  return (
    <Container>
      <Image src={ImageCryptocurrencies} alt='image of cryptocurrencies'/>
      <div>
        <Heading>Cotiza el valor de las criptomonedas</Heading>
        <Form/>
      </div>
      

    </Container>
  
  )
}

export default App
