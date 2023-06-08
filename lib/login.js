import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
} from 'firebase/auth';
import {auth} from './firebase';
import {Alert} from 'react-native';

export const loginAnonymous = async navigation => {
  try {
    await signInAnonymously(auth);
    console.log('익명 로그인 성공');
    navigation.reset({routes: [{name: 'AddName'}]});
  } catch (error) {
    console.log(error.code);
  }
};

export const registerEmail = async (email, password, onCreate, navigation) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('이메일 회원가입 성공');
    onCreate(email, password);
    navigation.reset({routes: [{name: 'AddName'}]});
  } catch (error) {
    console.log(error.code);
    const messages = {
      'auth/email-already-in-use': '이미 가입된 이메일입니다',
      'auth/wrong-password': '잘못된 비밀번호입니다',
      'auth/user-not-found': '존재하지 않는 계정입니다',
      'auth/invalid-email': '유효하지 않은 이메일 주소입니다',
      'auth/weak-password': '비밀번호의 보안이 약합니다',
    };
    const msg = messages[error.code];
    Alert.alert('실패', msg);
  }
};

export const loginEmail = async (email, password, onCreate, navigation) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('이메일 로그인 성공');
    onCreate(email, password);
    navigation.reset({routes: [{name: 'Select'}]});
  } catch (error) {
    const messages = {
      'auth/email-already-in-use': '이미 가입된 이메일입니다',
      'auth/wrong-password': '잘못된 비밀번호입니다',
      'auth/user-not-found': '존재하지 않는 계정입니다',
      'auth/invalid-email': '유효하지 않은 이메일 주소입니다',
      'auth/weak-password': '비밀번호의 보안이 약합니다',
    };
    const msg = messages[error.code];
    Alert.alert('실패', msg);
  }
};

export const logout = navigation => {
  signOut(auth)
    .then(() => {
      console.log('로그아웃 성공');
      navigation.reset({routes: [{name: 'Login'}]});
    })
    .catch(error => {
      console.log('로그아웃 실패 :', error);
    });
};
