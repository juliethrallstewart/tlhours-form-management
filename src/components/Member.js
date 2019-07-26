import React, { useState } from 'react'

export default function Member(props) {
  const [isEditing, setIsEditing] = useState(false);

  const [input, setInput] = useState({
    name: props.member.name,
    email: props.member.email,
    role: props.member.role
  })

  const updateHandler = e => {
    e.preventDefault()
    props.updateMember(input)
    setIsEditing(!isEditing)
  }

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  if (isEditing) {
    return (
      <form onSubmit={updateHandler}>
        <input type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <input type="text"
          name="role"
          value={input.role}
          onChange={handleChange}
        />
        <button type="submit">Update Member</button>
      </form>
    )
  }

  return (
    <div>
      <div>{props.member.name}</div>
      <div>{props.member.email}</div>
      <div>{props.member.role}</div>
      {/* <div>{`${isEditing}`}</div> */}

      <button onClick={() => setIsEditing(!isEditing)}>Edit Member</button>
    </div>
  )
}
