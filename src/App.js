import logo from './logo.svg'
import './App.css'
import DropdownCustom from './components/dropdown/Dropdown'
import MultiSelectDropdown from './components/dropdown/testDropdownCustom'

const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
]
function App() {
    return (
        <div className="App">
            <MultiSelectDropdown listFilter={options} />
        </div>
    )
}

export default App
