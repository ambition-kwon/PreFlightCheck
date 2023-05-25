//TODO: Auto Login 구현
import React, {useState, useContext} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../components/loginscreen/CustomInput';
import LoginCustomButton from '../components/loginscreen/LoginCustomButton';
import RegisterCustomButton from '../components/loginscreen/RegisterCustomButton';
import {useNavigation} from '@react-navigation/native';
import {loginAnonymous, loginEmail, registerEmail} from '../lib/login';
import LoginContext from '../contexts/LoginContext';

function LoginScreen({route}) {
  const navigation = useNavigation();
  const change = route.params ? route.params.change : undefined;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {onCreate} = useContext(LoginContext);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.select({ios: 'padding'})}>
        <SafeAreaView style={styles.container}>
          <Image
            source={require('../asset/airplane.png')}
            style={styles.picture}
          />
          <Text style={styles.titleText}>PreFlightCheck</Text>
          <CustomInput
            placeholder={'이메일'}
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => Keyboard.dismiss()}
            autoComplete={'email'}
            keyboardType={'email-address'}
            secureTextEntry={false}
          />
          <CustomInput
            placeholder={'비밀번호'}
            value={password}
            onChangeText={setPassword}
            autoComplete={'off'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          {change ? (
            <CustomInput
              placeholder={'비밀번호 재확인'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              autoComplete={'off'}
              keyboardType={'default'}
              secureTextEntry={true}
            />
          ) : null}
          {!change ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  loginAnonymous(navigation);
                }}>
                <Text style={styles.subText}>아니요, 계정없이 이용할래요</Text>
              </TouchableOpacity>
              <LoginCustomButton
                onPress={() => {
                  loginEmail(email, password, onCreate, navigation);
                }}
                title={'로그인'}
              />
              <RegisterCustomButton
                title={'회원가입'}
                onPress={() => navigation.push('Login', {change: true})}
              />
            </>
          ) : (
            <>
              <LoginCustomButton
                onPress={() => {
                  if (password === confirmPassword) {
                    registerEmail(email, password, onCreate, navigation);
                  } else {
                    Alert.alert('알림', '비밀번호가 일치하지 않습니다', [
                      {text: '확인'},
                    ]);
                  }
                }}
                title={'회원가입'}
              />
              <RegisterCustomButton
                onPress={() => navigation.pop()}
                title={'로그인'}
              />
            </>
          )}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020812',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#9CE6FC',
    marginBottom: 50,
  },
  picture: {
    marginBottom: 29,
  },
  subText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
  },
});

export default LoginScreen;
