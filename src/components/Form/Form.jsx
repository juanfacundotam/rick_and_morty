import React from "react";
import style from "./Form.module.css";
import validation from "./validation"

export default function Form (props) {
    const [userData, setUserData] = React.useState({
        username:'',
        password:''
    });
    const [errors, setErrors] = React.useState({
        username: '',
        password:''
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value
        
        setUserData({...userData, [property]: value});
        
        setErrors(
            validation({...userData, [property]: value})
        )
        console.log(errors)
        // validation ({...userData, [property]: value}, errors, setErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <form className={style.form}  onSubmit={handleSubmit}>
            <div className={style.divUser}>
            <label htmlFor="username">UserName:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            </div>
            <p>{errors.username && errors.username}</p>
            <div className={style.divPass}> 
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
            </div>
            <button className={style.button} type="submit">Login</button>
        </form>
    );
};

