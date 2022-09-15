import { useState } from "react"

// components
import {Input, Button} from "../Input"
import ValidData from "../ValidData"
import { personData } from "../../api"

// styles 
import "./index.css"

const Login = () => {
    const [emailPass, setEmailPass] = useState({})
    const [enter, setEnter] = useState({})
    const [isActive, setIsActive] = useState(false)
    console.log(enter)

    const checkValid = () => {
        return personData.find((item) => {
            return item.email === enter.email && item.password === enter.password
        })
    }

    return (
            <div className="login-wrapper">
                <form>
                    <Input 
                        type="text"
                        placeholder = "Email"
                        className="login"
                        name="email"
                        onChange={(e) => {
                            setEmailPass({...emailPass, 
                                [e.target.name]: e.target.value
                            })   
                            setEnter({})
                        }}
                    />
                    <Input 
                        type="password"
                        placeholder = "Password"
                        className="login"
                        name="password"
                        onChange={(e) => {
                            setEmailPass({...emailPass, 
                                [e.target.name]: e.target.value
                            })  
                            setEnter({})
                        }}
                    />
                    <Button 
                        text="Log In"
                        className="login-btn"
                        onClick = {(e) => {
                            e.preventDefault()
                            setEnter({...emailPass})
                            // setIsShow(true)
                        }}
                    />
                </form>
                <Button 
                    onClick={(e) => {
                        console.log("click forgot")
                    }}
                    className="forgotPass-btn"
                    text="Forgot Password ?"
                    fontSize="10px"
                    backgroundColor="#3D56B2"
                    color="#fff"
                />
                {
                    enter !== {} && checkValid()
                        ?
                    <ValidData 
                        text="correct" 
                        color="forestgreen"
                        code="&#9989;"
                    />
                        :
                    <ValidData 
                        text="inccorect" 
                        color="red"
                        code="&#10060;"
                    />
                }
            </div>
    )
}

export default Login