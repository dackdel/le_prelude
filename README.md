Setup Time: 30min

What does this do?  
- This has particle sketch which is triggered by people walking in front of it, the particles fill the outline of the person detected. A few seconds after detection an audio track plays and the speech recognition is turned on and is listening. You can talk to the computer and a set of pre-recorded tracks playback mimicing a conversation.  

Requirements:  
Windows 10 + Kinect SDK installed (https://www.microsoft.com/en-in/download/details.aspx?id=44561) 
A Kinect V2  
Processing (https://processing.org/download/)
A Browser

Dependencies:   
https://github.com/IDMNYU/p5.js-speech P5 Speech (included in this repo)  
https://github.com/processing/p5.js P5 Dom and Sound (included in this repo)    
https://github.com/muthesius/WebSocketP5 WebSocketP5 (install this in processing library folder)  
https://github.com/ThomasLengeling/KinectPV2 KinectPV2 (install this in processing library folder)  

Steps:  
Install node js (https://nodejs.org/en/download/).   
You need to run p5_talk as a server using http-server(https://www.npmjs.com/package/http-server) or browser-sync(https://www.browsersync.io/) via the command line or host it online. It will spit out a 4 digit localhost port number. Then type "localhost:xxxx" xxxx is the port number in chrome or any browser that supports web speech api.  
You need to run kinect_particles in Processing.  

Fin  
