import styled from '@emotion/styled'

import { monedas } from '../data/monedas.js'
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

const Formulario = () => {
  const [monedasClasicas, SelectMonedasClasicas] =  useSelectMonedas( 'Elige tu Moneda', monedas)
  const [monedasCriptos, SelectMonedasCriptos] =  useSelectMonedas( 'Elige tu Cripto', monedas)

  const handleSubmit = () => ("")

  return (
    <form 
      onChange={handleSubmit}
    >
      <Error>
        Todos los campos son obligatorios
      </Error>
      
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