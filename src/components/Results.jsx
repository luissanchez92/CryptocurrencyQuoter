import styled from '@emotion/styled'

const Results = ({response}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE}=response

    const Container= styled.div`
        color: #FFF;
        font-family: 'Lato', sans-serif;
        display:flex;
        align-items: center;

    `
    const Text=styled.p`
        font-size: 20px;
        font-family: 'Lato', sans-serif;
    `
    const TextPrice=styled.p`
        font-size: 28px;
        span{
            font-weight: 700;
        }
    `
    const Image=styled.img`
        display: block;
        width: 110px;
    `
  return (
    <Container>
        <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='imageCrypto'/>
        <div>
            <TextPrice>Price: <span>{PRICE}</span></TextPrice>
            <Text>Highest price of the day: <span>{HIGHDAY}</span></Text>
            <Text>Lower price of the day: <span>{LOWDAY}</span></Text>
            <Text>Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Update: <span>{LASTUPDATE}</span></Text>
        </div>

    
    </Container>
  )
}

export default Results
