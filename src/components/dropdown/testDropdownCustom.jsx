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
    console.log(selectedOptions)
    const [dropdownOptions, setDropdownOptions] = useState(listFilter)
    console.log(dropdownOptions)
    const [fillter, setFillter] = useState('')
    const debouncedValue = useDebounce(fillter, 2000)

    useEffect(() => {
        // Thực hiện hành động khi giá trị đã được trì hoãn thay đổi (debouncedValue).
        // Ví dụ: Gọi API, xử lý dữ liệu, vv.
        console.log('Debounced value changed:', debouncedValue)
    }, [debouncedValue])
    console.log(fillter)
    console.log(dropdownOptions.filter(() => fillter))
    const handleRemoveOption = (option) => {
        setSelectedOptions(
            selectedOptions
                .filter((selectedOption) => selectedOption !== option)
                .sort((a, b) => (a < b ? -1 : 1))
        )

        setDropdownOptions([...dropdownOptions, option])
        // dropdownOptions.sort((a, b) => (a < b ? -1 : 1))
    }
    const handleAddOption = (option) => {
        setSelectedOptions([...selectedOptions, option])
        setDropdownOptions(
            dropdownOptions.filter(
                (dropdownOption) => dropdownOption !== option
            )
        )
    }
    const clearAllOption = () => {
        setSelectedOptions([])
        setDropdownOptions(listFilter)
    }
    const myFunction = () => {
        dropdownRef.current.classList.toggle(styles.show)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(dropdownRef.current.contains(event.target))
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
                        <div
                            className={styles.borderDropdown}
                            onClick={myFunction}
                        >
                            <div className={styles.showDropdown}>
                                <div
                                    style={{ display: 'flex' }}
                                    className={styles.scrollMenu}
                                >
                                    {selectedOptions.map((option) => (
                                        <div className={styles.buttonOption}>
                                            <div className={styles.nameOption}>
                                                <span
                                                    className={styles.dropbtn}
                                                    key={option}
                                                >
                                                    {option}
                                                </span>
                                            </div>
                                            <div className={styles.clearOption}>
                                                <img
                                                    key={
                                                        option + Math.random(1)
                                                    }
                                                    onClick={() =>
                                                        handleRemoveOption(
                                                            option
                                                        )
                                                    }
                                                    width="10"
                                                    height="10"
                                                    src={IMAGE_DROPDOWN.close}
                                                    alt="xbox-x"
                                                    className={
                                                        styles.clearOption
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <div className={styles.searchBox}>
                                        <input
                                            className={styles.searchInput}
                                            type="text"
                                            placeholder="Search.."
                                            id="myInput"
                                            // onKeyUp={useFilterFunction}
                                            onChange={(e) =>
                                                setFillter(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={IMAGE_DROPDOWN.downAllow2}
                                    alt=""
                                    width="20"
                                    height="20"
                                />
                            </div>
                            {selectedOptions.length != 0 && (
                                <img
                                    onClick={clearAllOption}
                                    src={IMAGE_DROPDOWN.cancel}
                                    alt=""
                                    width="20px"
                                    height="20px"
                                />
                            )}
                        </div>

                        <div
                            id="myDropdown"
                            className={styles.dropdownContent}
                            ref={dropdownRef}
                        >
                            {filteredOptions
                                .sort((a, b) => (a < b ? -1 : 1))
                                .map((option) => (
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
