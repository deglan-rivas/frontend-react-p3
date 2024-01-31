import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { poolMonedas } from '../data/monedas.js'
import useSelectMonedas from '../hooks/useSelectMonedas'

import Error from './Error.jsx'

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
  &:hover {
      background-color: #7A7DFE;
      cursor: pointer;
  }
`

const Formulario = ({setMonedasEscogidas}) => {
  const [poolCriptos, setPoolCriptos] = useState([])
  const [error, setError] = useState('')

  const [monedasClasicas, SelectMonedasClasicas] =  useSelectMonedas( 'Elige tu Moneda', poolMonedas)
  const [monedasCriptos, SelectMonedasCriptos] =  useSelectMonedas( 'Elige tu Cripto', poolCriptos)

  useEffect( () => {
    const getCriptosFromAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const poolCriptosFormated = resultado.Data.map( cripto => ({
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName
      }))
      setPoolCriptos(poolCriptosFormated)
    }

    getCriptosFromAPI()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([monedasClasicas, monedasCriptos].includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')
    setMonedasEscogidas({
      monedasClasicas,
      monedasCriptos
    })
  }

  return (
    <form 
      onSubmit={handleSubmit}
    >
      {error && 
        <Error>
          {error}
        </Error>
      }

      
      <SelectMonedasClasicas/>
      <SelectMonedasCriptos/>

      <InputSubmit
        type='submit'
        value='Cotizar'
      />
    </form>


  )
}

export default Formulario