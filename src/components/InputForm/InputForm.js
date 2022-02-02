import React from 'react';
import "./InputForm.scss"
const InputForm=()=>{
    return(
        <form action="">
            <div className='form-control'>
                <label htmlFor="useName">User Name</label>
                <input type="text" name="userName" />
                <label htmlFor="age">Age (Years)</label>
                <input type="number"  name="age"/>
                <input type="submit" />
            </div>
        </form>
    )
}

export default  InputForm;