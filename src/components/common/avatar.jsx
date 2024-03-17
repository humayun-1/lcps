import React from 'react'

const Avatar = ({ name, className }) => {
    return (
        <img
            src={`https://ui-avatars.com/api/?color=fff&background=0053a5&name=${name?.replace(" ", "+")}`}
            className={className}
        />
    )
}

export default Avatar