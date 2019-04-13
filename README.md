# le_prelude  

Dependencies  
https://github.com/IDMNYU/p5.js-speech P5 Speech  
https://github.com/processing/p5.js P5 Dom and Sound  
https://github.com/muthesius/WebSocketP5 WebSocketP5 (ive added v0.2.0 in the repo in case the lib disappears)  

What does this do?  
- Has particle sketch which is triggered by people walking in front of it, the particles fill the outline of the person detected. A few seconds after detection an audio track plays and the speech recognition is turned on and is listening. You can talk to the computer and a set of pre-recorded tracks playback mimicing a conversation.

You need to run p5_talk as a server using http-server(https://www.npmjs.com/package/http-server) or browser-sync(https://www.browsersync.io/) or host it online.  
You need the processing app (https://processing.org/download/) to run kinect_particles.  
You need to install the WebSocketsP5 library inside the processing library folder.  
