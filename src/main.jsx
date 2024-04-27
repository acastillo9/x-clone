import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Tweets from './views/Tweets/Tweets.jsx';
import TweetDetails from './views/TweetDetails/TweetDetails.jsx';
import './index.css'
import '@fontsource-variable/inter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'tweets',
        element: <Tweets />
      },
      {
        path: 'tweets/:tweetId',
        element: <TweetDetails />
      },
      {
        path: '',
        element: <Navigate to="/tweets" replace={true} />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
