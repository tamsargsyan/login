export const Input = ({
    className,
    name,
    type,
    onChange, 
    placeholder, 
    backgroundColor, 
    color,
    borderRadius,
    border, 
    fontSize, 
    padding
}) => {
    return (
        <input 
            type={type}
            name={name}
            onChange = {onChange}
            placeholder = {placeholder}
            className = {className}
            style = {
                {
                    color: color ? color : "#fff",
                    backgroundColor: backgroundColor ? backgroundColor : "#3D56B2",
                    borderRadius: borderRadius ? borderRadius : "4px",
                    border: border ? border : "1px solid #fff",
                    fontSize: fontSize ? fontSize : "20px",
                    outline: "none",
                    padding: padding ? padding : "10px 15px"
                }
            }
        />
    )
}

export const Button = ({
        text, 
        className, 
        onClick, 
        color, 
        backgroundColor, 
        cursor, 
        fontSize, 
        borderRadius, 
        padding, 
        fontWeight
    }) => {

    return (
        <button 
            className={className}
            onClick = {onClick}
            style =
            {{
                color: color ? color : "#3D56B2",
                backgroundColor: backgroundColor ? backgroundColor : "#fff",
                cursor: cursor ? cursor : "pointer",
                border: "none",
                fontSize: fontSize ? fontSize : "20px",
                borderRadius: borderRadius ? borderRadius : "4px",
                padding: padding ? padding : "10px 15px",
                fontWeight: fontWeight ? fontWeight : "600"
            }}
        >
            {text}
        </button>
    )
}