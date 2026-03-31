function TarjetaReceta(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>⏱ {props.tiempo} minutos</p>
      <p>🍽 {props.porciones} porciones </p>
    </div>
  )
}

export default TarjetaReceta