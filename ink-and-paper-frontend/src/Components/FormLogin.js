import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "./App.css"
import logo from "../logo.png"

function FormLogin() {
    return (

  <Form className='App-login'>
    <img src={logo} alt="logo" />
    <Form.Field>
      <label>Username</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type="password" placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    )
}

export default FormLogin
