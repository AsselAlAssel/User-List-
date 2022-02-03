import React from 'react';
import Card from '../UI/Card';
import InputForm from './InputForm';
const Form=(props)=>{
    return(
        <Card>
          <InputForm onAddNewUser={props.onAddNewUser}/>
        </Card>
    )
}

export default Form;