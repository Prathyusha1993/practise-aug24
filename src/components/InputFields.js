import React, { useState } from 'react'

const InputFields = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const disableButton = !email || password.length < 6 || loading;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try{
            console.log(email, password);
            alert('Login Success');
            setEmail('');
            setPassword('');
            setLoading(false);
        } catch(error){
            setError('Failed to login');
            setLoading(false);
        }
        
    }
  return (
    <div style={{display: 'flex'}}>
        <form onSubmit={handleSubmitForm}>
            <label>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button disabled={disableButton} type='submit'>Login</button>
        </form>
    </div>
  )
}

export default InputFields;