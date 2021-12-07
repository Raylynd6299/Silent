import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Button
} from 'react-native';

import { AppColors } from "../Styles";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [ count, setCount ] = useState<number>(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? AppColors.black : AppColors.white,
  };

  return (
    <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              color:"white",
              fontWeight:"bold",
              fontSize: 24
            }}
          >
            Hello, world! {count}
          </Text>
          <Button
            onPress={()=>setCount(count+1)}
            title="DO click"
          >
            <Text>Holaaaa</Text>
          </Button>
    </View>
  );
};

export default App;
