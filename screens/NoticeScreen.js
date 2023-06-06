import React, {useRef} from 'react';
import {View, Platform} from 'react-native';
import WebView from 'react-native-webview';

function NoticeScreen() {
  const webViewRef = useRef(null);
  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://ambition-kwon.github.io/SlideShow/'}}
      />
    </View>
  );
}

export default NoticeScreen;
