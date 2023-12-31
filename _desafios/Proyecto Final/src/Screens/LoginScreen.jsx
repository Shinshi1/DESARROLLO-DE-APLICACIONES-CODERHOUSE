import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { font } from '../Global/theme'
import { useSignInMutation } from '../Services/authServices'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/User/userSlice'
import { isAtLeastSixCharacters, isValidMail } from '../Validations/auth'
import { insertSession } from '../SQLite'

const LoginScreen = ({ navigation }) => {
  const [email, setMail] = useState('')
  const [errorMail, setErrorMail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const dispatch = useDispatch()

  const [triggerSignIn, result] = useSignInMutation()
  
  // console.log(result)
  
  useEffect(() => {
    (async () => {
      try {
        if (result.isSuccess) {
          // Insert session in SQLite database
          console.log('inserting Session')
          const response = await insertSession({
            email: result.data.email,
            idToken: result.data.idToken,
            localId: result.data.localId,
          })
          console.log('Session inserted')
          console.log(response)
    
          dispatch(
            setUser({
              email: result.data.email,
              idToken: result.data.idToken,
              localId: result.data.localId,
              profileImage: "",
              location: {
                latitude: "",
                longitude: ""
              }
            })
          )
        }
        if (result.isError) {
          const incorrectCredentials = result.error.data.error.message === 'EMAIL_NOT_FOUND' || 'INVALID_PASSWORD'
          if (incorrectCredentials) return alert('incorrect credentials')
          alert('Error al iniciar sesión')
          console.error(result.error.data.error.message)
        }
      } catch (error) {
        console.log(error.message)
      }
    })()
    
  }, [result])

  const onSubmit = () => {
    try {
      setErrorMail('')
      setErrorPassword('')
      const isValidEmail = isValidMail(email)
      const isValidPassword = isAtLeastSixCharacters(password)
      if (isValidEmail && isValidPassword) {
        const request = {
          email,
          password,
          returnSecureToken: true
        }
        triggerSignIn(request)
      }
      if (!isValidEmail) setErrorMail('Email is not correct')
      if (!isValidPassword) setErrorPassword('Password must be at least 6 character')
    } catch (err) {
      console.error(err.message);
    }

  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to start</Text>
        <InputForm
          label={'email'}
          onChange={setMail}
          error={errorMail}
        />
        <InputForm
          label={'password'}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <SubmitButton
          onPress={onSubmit}
          title='Send'
        />
        <Text style={styles.sub}>Not have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#068FFF80',
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10
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
    color: 'blue',
  }
})