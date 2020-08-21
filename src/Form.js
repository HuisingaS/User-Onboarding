import React from 'react';


 export default function Form(props) {
    const {
        values,
        inputChange,
        checkboxChange,
        submit,
        disabled,
        errors,
     } = props


    // .preventDefault prevents the form from reloading. 
    //  submit() is carrying out the function from App
    const onSubmit = event => {
        event.preventDefault()
        submit()
    };

    // This function will be looking at the check-box attribute
    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange( name, checked)
    };

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    };

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form submit'>
                <h2>Become a member! </h2>
                <div className='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className='form inputs'>
                <h4>Add yourself to our team</h4>

                <label>First Name:&nbsp;
                    <input 
                        value={values.first_name}
                        onChange={onInputChange}
                        name='first_name'
                        type='text'
                    />
                </label>

                <label>Last Name:&nbsp;
                    <input 
                        value={values.last_name}
                        onChange={onInputChange}
                        name='last_name'
                        type='text'
                    />
                </label>

                <label>Email:&nbsp;
                    <input 
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password:&nbsp;
                    <input 
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>
            </div> 
            
            <div className='form checkbox'>
                <label>Accept the terms?&nbsp;
                    <input 
                        checked={values.terms.accept}
                        onChange={onCheckboxChange}
                        name='terms'
                        type='checkbox'
                    />
                </label>
            </div>
            <button disabled={disabled}>SUBMIT</button>
        </form>
    )
};