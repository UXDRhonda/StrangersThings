import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input
      type='text' placeholder='Username' 
      onChange={(event) => }
         />
      <input
      type='password'
      placeholder='Password'
      onChange={(event) => } 
        />

    <button type='submit'>Submit</button>    
    </form>
    
  )
}

export default Register;