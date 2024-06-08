import React from 'react'

const Button = ({ isLoading, className, children, onClick, type }) => {
    return (
        <button disabled={isLoading} type={type ? type : "button"} onClick={onClick} className={`${className} hvr-bounce-to-right bg-[#0053A5] text-white text-sm rounded px-5 py-2 disabled:opacity-65 disabled:cursor-not-allowed`}>
            {
                isLoading ? <div className='btn-loader'></div> : children
            }
        </button>
    )
}

Button.defaultProps = {
    isLoading: false
}

export default Button