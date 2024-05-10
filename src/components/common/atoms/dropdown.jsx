import React from 'react'
import Select from 'react-select'

let IsError = false;
const Dropdown = ({ value, isMulti, padding_control, titleClass, className, title, name, placeholder, options, error, disabled, noBorder, showTitle, backgroundColor, onChange }) => {

    const colourStyles = {
        control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
            ...styles,
            boxShadow: isFocused ? 'none' : 'none',
            border: noBorder ? 0 : isFocused ? '1px solid #00000099' : '1px solid #00000099',
            color: "#101928",
            fontSize: '0.875rem',
            padding: padding_control ? padding_control : '0.2rem',
            outline: 'none',
            backgroundColor: backgroundColor && backgroundColor,
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled ? '#f2f2f2' : isFocused ? '#2684ff14' : '#fff',
                color: '#101928',
                fontSize: '0.875rem',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
            };
        },
        menu: styles => ({
            ...styles,
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }),

    }

    const errorStyle = {
        control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
            ...styles,
            boxShadow: isFocused ? 'none' : 'none',
            border: IsError && '1px solid #eb3b3b',
            color: "#101928",
            fontSize: '0.875rem',
            padding: '0.2rem 0.2rem',
            minHeight: '0'
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled ? '#f2f2f2' : isFocused ? '#2684ff14' : '#fff',
                color: '#101928',
                fontSize: '0.875rem',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
            };
        },
        menu: styles => ({
            ...styles,
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }),
        input: styles => ({
            ...styles,

        })
    }

    if (error) {
        IsError = true
    }

    return (<>
        <div className={`flex flex-col gap-1 flex-1 whitespace-nowrap relative ${className} ${disabled ? 'cursor-not-allowed' : ''}`}>
            {
                title != '' &&
                <p className={`text-sm ${titleClass}`}>{title && title}</p>
            }
            <Select
                styles={error ? errorStyle : colourStyles}
                name={name}
                isMulti={isMulti}
                className='border-0'
                menuPlacement='auto'
                options={options}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    </>
    )
}

Dropdown.defaultProps = {
    title: 'Enter "title" prop',
    placeholder: 'Enter "placeholder" prop',
    options: [
        { value: '1', label: 'Option' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ],
    isMulti: false,
}

export default Dropdown