import './App.css'

import MultiSelectDropdown from './components/dropdown/testDropdownCustom'

const options = ['Hau', 'Khuong', 'Vinh', 'Hai', 'Chien', 'Vi', 'Nguyen Cong Hau']
function App() {
    return (
        <div className="App">
            <MultiSelectDropdown listFilter={options} label={'Dropdown View'} />
        </div>
    )
}

export default App
