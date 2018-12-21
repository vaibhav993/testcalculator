import React from "react"


const BCInput = ({ type, name, placeholder, value, onChange }) => (
    <div>
        <label
            style={{
                textTransform: "capitalize"
            }}
        >{name}</label>
        <div>
            <input
                type={type || "text"}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                autoComplete="off"
            ></input>
        </div>
    </div>
)

export default BCInput