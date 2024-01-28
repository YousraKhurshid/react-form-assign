import React, { useState } from 'react';
import './MyForm.css'; // Import the CSS file

const MyForm = () => {
  // State variables for form elements
  const [name, setname] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState('option1');
  const [dropdown, setDropdown] = useState('option1');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [color, setColor] = useState('#000000'); // Default color: black

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with form data
    console.log('Form submitted with data:', {
      name,
      fatherName,
      email,
      password,
      checkbox,
      radio,
      dropdown,
      date,
      number,
      color,
    });

    // Reset form fields to their initial state
    setname('');
    setfatherName('');
    setEmail('');
    setPassword('');
    setCheckbox(false);
    setRadio('option1');
    setDropdown('option1');
    setDate('');
    setNumber('');
    setColor('#000000');
  };

  // Function to handle form reset
  const handleReset = () => {
    // Reset form fields to their initial state
    setname('');
    setfatherName('');
    setEmail('');
    setPassword('');
    setCheckbox(false);
    setRadio('option1');
    setDropdown('option1');
    setDate('');
    setNumber('');
    setColor('#000000');
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
    <label>
      Name:
      <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
    </label>
  </div>
  <div>
    <label>
      Father Name:
      <input type="text" value={fatherName} onChange={(e) => setfatherName(e.target.value)} />
    </label>
  </div>

  {/* Email Input */}
  <div>
    <label>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
  </div>

  {/* Password Input */}
  <div>
    <label>
      Password:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>
  </div>

  {/* Checkbox */}
  <div>
    <label>
      <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
      Accept terms and conditions
    </label>
  </div>

  {/* Radio Buttons */}
  <div>
    <label>
      <input type="radio" value="option1" checked={radio === 'option1'} onChange={() => setRadio('option1')} />
      Male
    </label>
    <label>
      <input type="radio" value="option2" checked={radio === 'option2'} onChange={() => setRadio('option2')} />
     Female
    </label>
  </div>

  {/* Dropdown */}
  <div>
    <label>
      Select your course:
      <select value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
        <option value="option1">Web dev 1</option>
        <option value="option2">Web dev 2</option>
        <option value="option3">Web dev 3</option>
        <option value="option4">App dev</option>
        <option value="option5">Graphic</option>
        <option value="option6">Digital Marketing</option>
        <option value="option7">E-commerce</option>
      </select>
    </label>
  </div>

  {/* Date Picker */}
  <div>
    <label>
      Select a date:
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    </label>
  </div>

  {/* Number Input */}
  <div>
    <label>
      Enter your registered number:
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
    </label>
  </div>

  {/* Color Picker */}
  <div>
    <label>
      Choose a color:
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </label>
  </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>

      {/* Reset Button */}
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default MyForm;
