import styled from '@emotion/styled'

const Error = ({children}) => {

    const Text= styled.div`
    background-color: #FF0000;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;


    `
  return (
    <Text>
        {children}
      
    </Text>
  )
}

export default Error
