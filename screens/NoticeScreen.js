import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import LoadingScreen from './LoadingScreen';

function NoticeScreen() {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://ambition-kwon.github.io/SlideShow/'}}
        onLoad={() => {
          setLoading(false);
        }}
      />
      {loading ? <LoadingScreen /> : null}
    </View>
  );
}

export default NoticeScreen;
