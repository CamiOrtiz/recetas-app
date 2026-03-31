import TarjetaReceta from './components/TarjetaRecetas'

const recetas = [
  { id: 1, nombre: "Pasta Carbonara", tiempo: 30, porciones: 2 },
  { id: 2, nombre: "Ensalada César", tiempo: 15, porciones: 4 },
  { id: 3, nombre: "Tacos de Pollo", tiempo: 45, porciones: 3 },
]

function App() {
  return (
    <div>
      <h1>🍳 Mis Recetas</h1>
      {recetas.map((receta) => (
        <TarjetaReceta
          key={receta.id}
          nombre={receta.nombre}
          tiempo={receta.tiempo}
          porciones={receta.porciones}
        />
      ))}
    </div>
  )
}

export default App