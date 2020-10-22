import React, { useState, useEffect } from 'react'

export const MarkdownInput = props => {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit()
    
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text"  className="form-control"
        placeholder="titre de votre note" 
        onChange={e => props.onChangeTitle(e.target.value)} />
      </div>
      <div>
        <textarea placeholder="Ecrivez votre note"  className="form-control 0"
        onChange={e => props.onChangeContent(e.target.value)} />
      </div>
      <button type='submit'className="btn btn-danger" rows="6">Sauvegarder</button>
    </form>
  )
}
export default MarkdownInput;