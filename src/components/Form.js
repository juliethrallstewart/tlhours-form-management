import React, { useState } from 'react';

const Form = props => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    role: ''
  })


  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const newSubmit = e => {
    e.preventDefault()
    props.submit(input)
    setInput({
      name: '',
      email: '',
      role: ''
    })
  }

  return (

    <div className="App">

      <h1>Form</h1>

      <form onSubmit={newSubmit}>
        <div>
          <label htmlFor="name">
            Name:
      <input
              type="text"
              value={input.name}
              placeholder="Add Name"
              name="name"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:
      <input
              type="text"
              value={input.email}
              placeholder="Add your email"
              name="email"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="role">
            Role:
      <input
              type="text"
              value={input.role}
              placeholder="Add member role"
              name="role"
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Add Member</button>

      </form>


    </div>
  );
}

export default Form;