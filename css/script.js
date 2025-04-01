// Function to speak text
function speak(text) {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    } else {
        console.error('Speech synthesis not supported in this browser.');
    }
}

// Trigger speech on window load
window.onload = () => {
    speak("Welcome to Shivam's portfolio. Explore my projects and skills!");
};