import React, {useRef} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

function ParkingFee() {
  const webViewRef = useRef(null);
  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://www.airport.co.kr/gimpo/cms/frCon/index.do?MENU_ID=1360&CONTENTS_NO=2',
        }}
      />
    </View>
  );
}

export default ParkingFee;
