import { use State } from 'react'
import TarjetaReceta from './components/TarjetaRecetas'

const recetas = [
  { id: 1, nombre: "Pasta Carbonara", tiempo: 30, porciones: 2 },
  { id: 2, nombre: "Ensalada César", tiempo: 15, porciones: 4 },
  { id: 3, nombre: "Tacos de Pollo", tiempo: 45, porciones: 3 },
]

function App() {
  const recetasFiltradas = recetas.filter((receta) =>
    receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
  
  return (
    <div>
      <h1>🍳 Mis Recetas</h1>
      <input 
        type = "text"
        placeholder = "Buscar receta..."
        value= {busqueda}
        onChange = {(e) => setBusqueda(e.target.value)}
        />
      
      {recetasFiltradas.map((receta) => (
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
