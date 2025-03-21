import React from 'react';
import styles from './AnimalInput.module.css';

const Input = ({ type, name, id, placeholder, value, handlerChange, options }) => {
    if (type === 'select') {
        return (
            <div className={styles.form_control}>
                <label htmlFor={name}>{name}</label>
                <select id={id} name={name} value={value} onChange={handlerChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    if (type === 'textarea') {
        return (
            <div className={styles.form_control}>
                <label htmlFor={name}>{name}</label>
                <textarea id={id} name={name} value={value} onChange={handlerChange} placeholder={placeholder} />
            </div>
        );
    }

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{name}</label>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handlerChange}
            />
        </div>
    );
};

export default Input;