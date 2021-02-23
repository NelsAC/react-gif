import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => setInputValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Buscar..."
                value={ inputValue }
                onChange={ handleChange } />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func,
}

export default AddCategory
