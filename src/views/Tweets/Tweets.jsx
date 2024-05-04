import Tweet from "../../components/Tweet/Tweet"
import CreateTweet from "../../components/CreateTweet/CreateTweet"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/userContext"

function Tweets() {
  const [ tweets, setTweets ] = useState([])
  const user = useContext(UserContext)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/tweets`)
      .then((response) => response.json())
      .then((data) => {
        setTweets(data)
      })
  }, [])

  function createTweet(text) {
    const tweet = {
      id: String(tweets.length + 1),
      text,
      ...user,
      timestamp: new Date().toISOString(),
      replays: 0,
      reposts: 0,
      likes: 0,
      views: 0,
      isLiked: false,
    }

    fetch(`${import.meta.env.VITE_BASE_URL}/tweets`, {
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
    fetch(`${import.meta.env.VITE_BASE_URL}/tweets/${tweetId}`, {
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
        {tweets.map((tweet) => <Tweet key={tweet.id} data={tweet} onDelete={user?.user === tweet.user ? deleteTweet : null}></Tweet>)}
      </section>
    </>
  )
}

export default Tweets