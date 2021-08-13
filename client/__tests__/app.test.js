import 'react-native'
import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'

// Se pondra a prueba la correcta creacion del componente App mediante un test rendering
describe('<App />', () => {

  const tree = renderer.create(<App />).toJSON()

  // Creacion de su primer componente hijo
  it('has 1 child', () => expect(tree.children.length).toBe(1))

  // Correcto renderizado del componente App
  it('renders correctly', () => expect(tree).toMatchSnapshot())
})
