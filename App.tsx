import React from 'react';
import {SafeAreaView} from 'react-native';

import TopBar from './Components/TopBar';
import Video from './Components/Video';
import Button from './Components/Button';
import Content from './Components/Content';

function App() {
  return (
    <SafeAreaView>
      <TopBar />
      <Video />
      <Button />
      <Content />
    </SafeAreaView>
  );
}

export default App;
