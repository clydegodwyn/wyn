import { useState } from 'react';
import { useAuth } from './AuthContext';

const RegistrationScreen = () => {
 const { register } = useAuth();
 const [formData, setFormData] = useState({ name: '', email: '', password: '' });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    register(formData.name, formData.email, formData.password);
 };

 return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
 );
};

export default RegistrationScreen;