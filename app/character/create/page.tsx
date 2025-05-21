import React from 'react'

const CreateCharacter = () => {
    return (
        <form className='p-5'>
            <h2>Create your character</h2>
            <div className='block'>
                <h3>Meta Data</h3>
                <label className='input mt-1'>
                    <span className='label'>your Character</span>
                    <input type="text" placeholder='Name your character'></input>
                </label>
                <label className="select mt-1">
                    <span className="label">Heritage</span>
                    <select>
                        <option>Desert</option>
                        <option>Mountains</option>
                    </select>
                </label>
            </div>
            <button className='btn btn-primary mt-1'>Create {}</button>
        </form>
    )
}

export default CreateCharacter
