import { Heart } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/react'

// Tree-shakeable: import path data from svg barrel + render with React component
function App() {
  return (
    <div>
      <AbsIcon path={Heart} size={32} color="#e74c3c" />
      <AbsIcon path={Heart} size={24} spin />
      <AbsIcon path={Heart} size={48} pulse bounce />
    </div>
  )
}
