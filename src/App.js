import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'

function App() {

  const [members, setMembers] = useState([])

  const submit = (input) => {

    console.log("form submitted", input)
    const copyOfMembers = [...members]
    copyOfMembers.push(input)

    setMembers(copyOfMembers)
  }

  const updateMember = (newMember) => {
    setMembers([
      ...members.map(member => {
        if (member.name === newMember.name) {
          return newMember
        }
        return member
      })
    ])
    console.log('update member!')
  }

  return (
    <div className="App">
      <Form submit={submit} />
      {members.map((member, index) => (
        <Member key={index} member={member} updateMember={updateMember} />
      ))}

    </div>
  );
}

export default App;
