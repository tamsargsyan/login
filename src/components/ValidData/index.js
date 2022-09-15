import { useState } from "react"
import "./index.css"

// components
import { Button } from "../Input"

const ValidData = ({text, color, code}) => {
    const [isShow, setIsShow] = useState(true)
    return (
        <div className="main">
            {isShow &&
                <div className="validData-wrapper">
                <Button 
                    text="&#x2715;"
                    className="close"
                    color="#000"
                    padding="0"
                    onClick={(e) => {
                        setIsShow(!isShow)
                    }}
    
                />
                <h3>Your email and password are <span 
                        style={{
                            color: color
                        }}>
                        {text}
                    </span>
                </h3>
                <h2>{code}</h2>
            </div>
            }
        </div>
    )
}

export default ValidData