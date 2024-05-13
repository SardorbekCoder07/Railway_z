import React, { useState } from 'react';
import './App.css';  // Assuming you have a CSS file for styles

function EmployeeInputs() {
    const initialInputs = {
        employeeCount: '',
        vacationCount: '',
        sickCount: '',
        restCount: '',
        tripCount: '',
        onTrainingCount: ''
    };
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setInputs({ ...inputs, [id]: value });
    };

    // Function to check if the input is empty and apply a class accordingly
    const inputClass = (id) => {
        return inputs[id] === '' ? 'error' : '';
    };

    return (
        <div>
            {Object.keys(initialInputs).map((key) => (
                <input
                    key={key}
                    type="number"
                    id={key}
                    value={inputs[key]}
                    onChange={handleChange}
                    className={inputClass(key)}
                    placeholder={key}
                />
            ))}
        </div>
    );
}

export default EmployeeInputs;
