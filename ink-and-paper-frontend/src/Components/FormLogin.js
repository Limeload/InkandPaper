import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import "./App.css"
import logo from "../logo.png"
import FormSignUp from './FormSignUp'

function FormLogin({users, setUsers}) {
  const [showForm, setShowForm] = useState(false);
  function handleClickForm(){
    setShowForm(!showForm);
  }
     return (
      <div>
  <Form className='App-login'>
    <img src={logo} alt="logo" />
    <Form.Field>
      <label>Username</label>
      <input placeholder=' Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type="password" placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    <h3> or </h3>,
  <Button onClick={handleClickForm}> Sign Up instead </Button>
  {showForm ? <FormSignUp users={users} setUsers={setUsers} /> : null}
  </Form>
  </div>
    )
}

export default FormLogin
