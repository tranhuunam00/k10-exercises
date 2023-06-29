import React, { useRef, useState } from 'react'

import styles from './styles.module.scss'
import IMAGE_DROPDOWN from './assetsDropdown/image'
const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
]

const MultiSelectDropdown = ({listFilter = []}) => {
    const dropdownRef = useRef()
    const [selectedOptions, setSelectedOptions] = useState([])
    const [dropdownOptions, setDropdownOptions] = useState(listFilter)

    const handleDropdownChange = (e) => {
        const selectedOption = e.target.value
        console.log(selectedOption)
        setSelectedOptions([...selectedOptions, selectedOption])
        setDropdownOptions(
            dropdownOptions.filter((option) => option !== selectedOption)
        )
    }
    const handleRemoveOption = (option) => {
        setSelectedOptions(
            selectedOptions.filter(
                (selectedOption) => selectedOption !== option
            )
        )
        setDropdownOptions([...dropdownOptions, option])
    }
    const handleAddOption = (option) => {
        setSelectedOptions([...selectedOptions, option])
        setDropdownOptions(
            dropdownOptions.filter(
                (dropdownOption) => dropdownOption !== option
            )
        )
    }

    const myFunction = () => {
        dropdownRef.current.classList.toggle(styles.show)
    }
    // window.onclick = function (event) {
    //     if (!event.target.matches('.dropbtn')) {
    //         var dropdowns = document.getElementsByClassName('dropdown-content')
    //         var i
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i]
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show')
    //             }
    //         }
    //     }
    // }
    const filterFunction = () => {
        var input, filter, ul, li, a, i, div, txtValue
        input = document.getElementById('myInput')
        filter = input.value.toUpperCase()
        div = document.getElementById('myDropdown')
        a = div.getElementsByTagName('a')
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = ''
            } else {
                a[i].style.display = 'none'
            }
        }
    }
    return (
        <>
            <div>
                <h2>Clickable Dropdown</h2>
                <p>Click on the button to open the dropdown menu.</p>
                <button onClick={() => console.log(selectedOptions)}>
                    choose
                </button>
                <hr />
                <div className={styles.dropdown}>
                    <div className={styles.showDropdown}>
                        <div
                            style={{ display: 'flex' }}
                            className={styles.scrollMenu}
                        >
                            {selectedOptions.map((option) => (
                                <div className={styles.buttonOption}>
                                    <span className={styles.dropbtn}>
                                        {option}
                                    </span>
                                    <img
                                        onClick={() =>
                                            handleRemoveOption(option)
                                        }
                                        width="10"
                                        height="10"
                                        src={IMAGE_DROPDOWN.close}
                                        alt="xbox-x"
                                        className={styles.clearOption}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.searchBox} onClick={myFunction}>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder="Search.."
                                id="myInput"
                                onKeyUp={filterFunction}
                            />
                            <img
                                src={IMAGE_DROPDOWN.downAllow2}
                                alt=""
                                width="20"
                                height="20"
                            />
                        </div>
                    </div>

                    <div
                        id="myDropdown"
                        className={styles.dropdownContent}
                        ref={dropdownRef}
                    >
                        {dropdownOptions.map((option) => (
                            <a
                                key={option}
                                onClick={() => handleAddOption(option)}
                            >
                                {option}
                            </a>
                        ))}

                        {/* <select onChange={handleDropdownChange}>
                            <option value="">-- Select an option --</option>

                            {dropdownOptions.map((option) => (
                                <>
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                </>
                            ))}
                        </select> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiSelectDropdown
