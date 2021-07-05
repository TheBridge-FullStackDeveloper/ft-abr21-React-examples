import React, { useState } from 'react'
import './Login.css'


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false)


    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault()
        if(user !== 'Sol' || password !== '1234'){
            setSuccess(false)
        } else {
            setSuccess(true)
        }
    }

    // 1. Recoger credenciales del usuario
    // 2. Validar credenciales del usuario
    // 3. Mostrar un mensaje "éxito" si las credenciales están bien o mostrar un warning si las credenciales no son correctas

    return(
        <div className="Login">
            <form>
                <label>Usuario: </label>
                <input type="text" name="user" onChange={handleChangeUser}/>
                <label>Password: </label>
                <input type="text" name="password" onChange={handleChangePassword}/>
                <button onClick={handleClick}>ENVIAR</button>

            </form>
            {success ? <p>¡ Usuario logueado correctamente !</p> : <p>Credenciales incorrectas</p>}
        </div>
    )

}

export default Login

