import { Heart } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/vue'

// Tree-shakeable: import path data from svg barrel + render with Vue component
const App = {
  components: { AbsIcon },
  template: `
    <div>
      <AbsIcon :path="Heart" :size="32" color="#e74c3c" />
      <AbsIcon :path="Heart" :size="24" spin />
      <AbsIcon :path="Heart" :size="48" pulse bounce />
    </div>
  `,
  setup() {
    return { Heart }
  },
}
