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

        // validation ({...userData, [property]: value}, errors, setErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div>

        <form className={style.form}  onSubmit={handleSubmit}>
            <div className={style.divUser}>
            <label htmlFor="username">UserName:</label>
            <input className={errors.username ? style.error : style.success } type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            </div>
            <div className={style.divPass}> 
            <label htmlFor="password">Password:</label>
            <input className={errors.password ? style.error : style.success  } type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                
            </div>
            <button className={style.button} type="submit">Login</button>
        </form>
        <div className={ errors.username === '' && errors.password === '' ? style.divErroresVacio : style.divErrores }>
            <p>{errors.username && errors.username}</p>
            <p>{errors.password && errors.password}</p>
        </div>
        </div>
    );
};

