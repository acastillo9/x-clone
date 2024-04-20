import './App.css'
import Tweet from './Tweet'

function App() {

  const tweets = [
    {
      "id": "1",
      "text": "Just saw the most beautiful sunset! 🌅",
      "user": "@juan",
      "name": "Juan",
      "timestamp": "2024-04-20T18:30:00Z",
      "replays": 15,
      "reposts": 10,
      "likes": 150,
      "views": 10,
      "profileImage": "https://randomuser.me/api/portraits/men/0.jpg"
    },
    {
      "id": "2",
      "text": "Excited to announce I'm starting a new job at @TechInnovate!",
      "user": "@laura",
      "name": "Laura",
      "timestamp": "2024-04-19T09:00:00Z",
      "replays": 20,
      "reposts": 10,
      "likes": 230,
      "views": 10,
      "profileImage": "https://randomuser.me/api/portraits/women/0.jpg"
    },
    {
      "id": "3",
      "text": "Can anyone recommend a good book on machine learning?",
      "user": "@maria",
      "name": "Maria",
      "timestamp": "2024-04-18T15:45:00Z",
      "replays": 50,
      "reposts": 10,
      "likes": 75,
      "views": 10,
      "profileImage": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "id": "4",
      "text": "Thank you all for the birthday wishes! Feeling loved. ❤️",
      "user": "@luis",
      "name": "Luis",
      "timestamp": "2024-04-17T22:00:00Z",
      "replays": 10,
      "reposts": 10,
      "likes": 200,
      "views": 10,
      "profileImage": "https://randomuser.me/api/portraits/men/1.jpg"
    }
  ]

  return (
    <>
      <section>
        {tweets.map((tweet) => <Tweet key={tweet.id} data={tweet}></Tweet>)}
      </section>
    </>
  )
}

export default App
