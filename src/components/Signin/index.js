import React from 'react'
import { 
    Container,
    FormWrap,
    Icon,
    FormContent, 
    FormButton, 
    Form,
    FormH1,
    FormInput, 
    FormLabel,
    Text  
     } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to="/">Beta</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sing in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;
