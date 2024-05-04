import Tweet from "../../components/Tweet/Tweet"
import CreateTweet from "../../components/CreateTweet/CreateTweet"
import { useEffect, useState } from "react"

function Tweets() {
  const [ tweets, setTweets ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then((response) => response.json())
      .then((data) => {
        setTweets(data)
      })
  }, [])

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

    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      body: JSON.stringify(tweet),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((newTweet) => {
        setTweets([
          newTweet,
          ...tweets,
        ])
      })
  }

  function deleteTweet(tweetId) {
    fetch(`http://localhost:3000/tweets/${tweetId}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        setTweets([
          ...tweets.filter((tweet) => tweet.id !== data.id),
        ])
      })
  }

  return (
    <>
      <CreateTweet onCreate={createTweet} />
      <section>
        {tweets.map((tweet) => <Tweet key={tweet.id} data={tweet} onDelete={deleteTweet}></Tweet>)}
      </section>
    </>
  )
}

export default Tweets