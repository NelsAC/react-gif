import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; no se usa :c
    const [categories, setCategories] = useState(['']);
    // const handleAdd = () => setCategories([...categories, 'HunterXHunter']);
    return (
        <>
            <p className="alex">alex cabrito</p>
            <h2>Busca tu GIF</h2>
            <AddCategory setCategories={ setCategories } />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            category={ category }
                            key={ category } />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
