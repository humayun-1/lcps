import React from 'react'

const Button = ({ className, children, onClick }) => {
    return (
        <button onClick={onClick} className={`${className} bg-[#0053A5] text-white text-sm rounded px-5 py-2`}>{children}</button>
    )
}

export default Button