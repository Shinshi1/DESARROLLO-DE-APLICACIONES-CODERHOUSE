import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/User/userSlice'

import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'

import { useSignUpMutation } from '../Services/authServices'
import { font } from '../Global/theme'
import { isAtLeastSixCharacters, isValidMail } from '../Validations/auth'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [errorMail, setErrorMail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')


  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch()
  console.log(result)

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
          profileImage: ""
        })
      )
    }
    if (result.isError) {
      alert("Error al registrarse")
      console.error(result.error.data.error.message)
    }


  }, [result])

  const onSubmit = () => {
    try {
      setErrorMail('')
      setErrorPassword('')
      setErrorConfirmPassword('')
      // Submit logic with validations
      const isValidVariableEmail = isValidMail(email)
      const isValidPassword = isAtLeastSixCharacters(password)
      const isRepeatPasswordCorrect = password === confirmPassword
      if (isValidVariableEmail && isValidPassword && isRepeatPasswordCorrect) {
        const request = {
          email,
          password,
          confirmPassword,
          returnSecureToken: true
        }
        triggerSignUp(request)
      }
      if (!isValidVariableEmail) setErrorMail('Email is not correct')
      if (!isValidPassword) setErrorPassword('Password must be at least 6 character')
      if (!isRepeatPasswordCorrect) setErrorConfirmPassword('Passwords must match')
    } catch (err) {
      console.log('Catch error')
      console.log(err.message)
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <InputForm label={'email'} onChange={setEmail} error={errorMail} />
        <InputForm
          label={'password'}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={'confirm password'}
          onChange={setConfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title='Send' />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#068FFF80',
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: font.headerFont2
  },
  sub: {
    fontSize: 14,
    color: 'black',
  },
  subLink: {
    fontSize: 14,
    color: 'blue'
  }
})