import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
import { useState, useRef, useEffect } from 'react'
import { languageOptions as options } from '../../data/index'
import { technologyImages } from '../../data/index'

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])
  const selectRef = useRef(null)

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative' ref={selectRef}>
      <div
        className='bg-secondary bg-opacity-95 border border-gray-300 px-3 py-2 cursor-pointer flex items-center flex-row-reverse rounded-full'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.label}
        {/* <img src={moroccoImage} alt='' /> */}

        {isOpen ? (
          <TiArrowSortedUp className='text-white' />
        ) : (
          <TiArrowSortedDown className='text-white' />
        )}
      </div>
      {isOpen && (
        <ul className='absolute mt-1 w-full bg-secondary bg-opacity-95 border border-gray-300 rounded shadow-lg z-10'>
          {options.map((option) => (
            <li
              key={option.value}
              className='px-1 py-2 cursor-pointer hover:bg-gray-100 flex justify-center'
              onClick={() => handleOptionClick(option)}
            >
              {/* <img src={moroccoImage} alt='' /> */}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSelect
