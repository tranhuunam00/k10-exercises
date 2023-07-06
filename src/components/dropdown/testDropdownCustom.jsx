import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'
import IMAGE_DROPDOWN from './assetsDropdown/image'
import useDebounce from './customHook/useDebounce'
// const options = [
//     'Option 1',
//     'Option 2',
//     'Option 3',
//     'Option 4',
//     'Option 5',
//     'Option 6',
// ]

const MultiSelectDropdown = ({ listFilter = [], label }) => {
    const dropdownRef = useRef()
    const [selectedOptions, setSelectedOptions] = useState([])
    const [dropdownOptions, setDropdownOptions] = useState(listFilter)
    const [fillter, setFillter] = useState('')
    const debouncedValue = useDebounce(fillter, 500)

    useEffect(() => {
        // Thực hiện hành động khi giá trị đã được trì hoãn thay đổi (debouncedValue).
        // Ví dụ: Gọi API, xử lý dữ liệu, vv.
        console.log('Debounced value changed:', debouncedValue)
    }, [debouncedValue])
    console.log(fillter)
    console.log(dropdownOptions.filter(() => fillter))
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(dropdownRef.current)
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                dropdownRef.current.classList.remove(styles.show)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // const useFilterFunction = () => {
    //     let input, filter
    //     input = document.getElementById('myInput')
    //     filter = input.value.toUpperCase()
    //     // setFillter(filter)
    //     // useDebounce(filter, 500)
    // }

    const filteredOptions = dropdownOptions.filter((option) =>
        option.includes(debouncedValue)
    )
    return (
        <>
            <div>
                <h2>Clickable Dropdown</h2>
                <p>Click on the button to open the dropdown menu.</p>
                <button onClick={() => console.log(selectedOptions)}>
                    choose
                </button>
                <hr />
                <div className={styles.divContainer}>
                    <label className={styles.labelText}>{label}</label>
                    <div className={styles.dropdown}>
                        <div className={styles.showDropdown}>
                            <div
                                style={{ display: 'flex' }}
                                className={styles.scrollMenu}
                            >
                                {selectedOptions.map((option) => (
                                    <div className={styles.buttonOption}>
                                        <span
                                            className={styles.dropbtn}
                                            key={option}
                                        >
                                            {option}
                                        </span>
                                        <img
                                            key={option + Math.random(1)}
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
                            <div
                                className={styles.searchBox}
                                onClick={myFunction}
                            >
                                <input
                                    className={styles.searchInput}
                                    type="text"
                                    placeholder="Search.."
                                    id="myInput"
                                    // onKeyUp={useFilterFunction}
                                    onChange={(e) => setFillter(e.target.value)}
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
                            {filteredOptions.map((option) => (
                                <a
                                    key={option}
                                    onClick={() => handleAddOption(option)}
                                >
                                    {option}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiSelectDropdown
