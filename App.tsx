import React from 'react';
import {SafeAreaView} from 'react-native';

import TopBar from './Components/TopBar';
import VideoPlayer from './Components/Video';

function App() {
  return (
    <SafeAreaView>
      <TopBar />
      <VideoPlayer />
    </SafeAreaView>
  );
}

export default App;
