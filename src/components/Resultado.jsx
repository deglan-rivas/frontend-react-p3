import styled from "@emotion/styled"

import imagenCriptos from '../img/imagen-criptos.png'

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`
const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Texto = styled.p`
  font-size: 18px;
  span {
      font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 24px;
  span {
      font-weight: 700;
  }
`

const Resultado = () => (
  <Contenedor>
    <Imagen 
      src={imagenCriptos} 
      alt="imagen cripto" 
    />
    <div>
      <Precio>El Precio es de: <span>Ga</span></Precio>
      <Texto>Precio más alto del día: <span>Ga</span></Texto>
      <Texto>Precio más bajo del día: <span>Ga</span></Texto>
      <Texto>Variación últimas 24 horas: <span>Ga</span></Texto>
      <Texto>Última Actualización: <span>Ga</span></Texto>
    </div>
  </Contenedor>
)

export default Resultado