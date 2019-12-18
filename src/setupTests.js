// eslint-disable-next-line
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import translationService from './services/translation'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
//global.toJson = toJson

translationService.init('ru-RU')

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
