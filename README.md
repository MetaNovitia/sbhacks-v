# SBHACKS - SBAM detector
A webapp for detecting spam comments in youtube videos.

#### Note: server may currently be down

## Usage
https://metanovitia.github.io/sbhacks-v/#/
Enter a link in the input box and click the check spam button. A top-20 list of potential spam messages will be shown, sorted from most to least likely to be spam. Users may choose to mark as spam or not spam. A word cloud of the words contained in the most likely to be spam comments is also generated in the Word Cloud tab.

## Technology Used
- Google Cloud Platform : training the model, hosting the server
- YouTube API : request for comments from YouTube
- Tensorflow, Keras : machine learning 
- Flask : backend of connecting the YouTube API, machine learning model, and the server
- React : Front end (takes data from server)

Team:
- Pooya Khosravi
- Raymond Nguyen
- Meta Novitia
- Junlin Wang

DevPost: https://devpost.com/software/thenewrandom
