/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

function Jitsi() {
  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/FinalMotoristsCurveFinely'; // here you need to give join url
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo);
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log('Meeting Ended');
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log('Meeting Joined');
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log('Meeting Before Join');
  }
  return (
    <JitsiMeetView
      onConferenceTerminated={(e) => onConferenceTerminated(e)}
      onConferenceJoined={(e) => onConferenceJoined(e)}
      onConferenceWillJoin={(e) => onConferenceWillJoin(e)}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    />
  );
}
export default Jitsi;
