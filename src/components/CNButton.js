import React from 'react'

const CNButton = ({ children, onClick }) => (
        <button
            style={{
                width: "100%",
                height: "100%"
            }}
            onClick={() => onClick(children)}
        >
        {children}
        </button>
);


export default CNButton;