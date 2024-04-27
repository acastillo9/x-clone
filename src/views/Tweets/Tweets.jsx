import Tweet from "../../components/Tweet/Tweet"
import CreateTweet from "../../components/CreateTweet/CreateTweet"
import { useState } from "react"

const DEFAULT_TWEETS = [
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
    "profileImage": "https://randomuser.me/api/portraits/men/0.jpg",
    "isLiked": false,
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
    "profileImage": "https://randomuser.me/api/portraits/women/0.jpg",
    "isLiked": false,
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
    "profileImage": "https://randomuser.me/api/portraits/women/1.jpg",
    "isLiked": false,
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
    "profileImage": "https://randomuser.me/api/portraits/men/1.jpg",
    "isLiked": false,
  }
]

function Tweets() {

  const [ tweets, setTweets ] = useState(DEFAULT_TWEETS)

  const currentUser = {
    user: "@luis",
    name: "Luis",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  }

  function createTweet(text) {
    const tweet = {
      id: String(tweets.length + 1),
      text,
      ...currentUser,
      timestamp: new Date().toISOString(),
      replays: 0,
      reposts: 0,
      likes: 0,
      views: 0,
      isLiked: false,
    }
    // TODO enviar a crear el twwet en el server
    setTweets([
      tweet,
      ...tweets,
    ])
  }

  return (
    <>
      <CreateTweet onCreate={createTweet} />
      <section>
        {tweets.map((tweet) => <Tweet key={tweet.id} data={tweet}></Tweet>)}
      </section>
    </>
  )
}

export default Tweets