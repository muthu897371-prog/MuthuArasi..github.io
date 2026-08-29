function startVoice(){
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!SR){alert('Speech Recognition not supported');return;}
const r=new SR(); r.lang='en-US';
r.onresult=e=>alert('Voice captured: '+e.results[0][0].transcript);
r.start();
}