import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Formulario from './components/Formulario'
import Spinner from './components/Spinner'
import Resultado from './components/Resultado'

import imagenCriptos from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [monedasEscogidas, setMonedasEscogidas] = useState({})
  const [resultado, setResultado] = useState({})
  const [isChecking, setIsChecking] = useState(false)

  useEffect( () => {
    if (Object.keys(monedasEscogidas).length) {

      const convertirMonedas = async () => {
        
        setResultado({})
        setIsChecking(true)
    
        const { monedasClasicas, monedasCriptos } = monedasEscogidas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedasCriptos}&tsyms=${monedasClasicas}`
        const respuesta = await fetch(url)
        const conversion = await respuesta.json()
    
        setResultado(conversion['DISPLAY'][monedasCriptos][monedasClasicas])
        setIsChecking(false)
    
      }
      

      convertirMonedas()
    }

  }, [monedasEscogidas])

  return (
    <Contenedor>
      <Imagen
        src={imagenCriptos}
        alt='imagen de criptos'
      />

      <div>
        <Heading>
          Cotiza Criptomonedas al Instante
        </Heading>

        <Formulario
          setMonedasEscogidas = {setMonedasEscogidas}
        />

        {isChecking && 
          <Spinner/>
        }

        {Object.keys(resultado).length !== 0 && 
          <Resultado
            resultado = {resultado}
          />
        }
      </div>
    </Contenedor>
  )
}

export default App
