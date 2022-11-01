import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('');
  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value === '123') {
      console.log('success');
      navigate('/');
    } else {
      toast.error('Invalid password');
    }
  };

  return (
    <div className="input-group mb-3 w-25">
      <input type="text" className="form-control" placeholder="password" value={value} onChange={handleChange} />

      <button onClick={handleSubmit} className="btn btn-primary" type="button">
        Submit
      </button>
    </div>
  );
};
