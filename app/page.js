'use client';

import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import NewTweet from '@/components/NewTweet';
import TweetList from '@/components/TweetList';
import ToTopButton from '@/components/ToTopButton';
import { useState, useEffect } from 'react';
import { initialTweets } from '../helpers/initialTweetsData';

export default function Home() {

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const newTweetText = document.getElementById("tweet-text");
    newTweetText.focus();
  };

  // Handle adding new tweet to feed
  const [tweetFeed, setTweetFeed] = useState(initialTweets);

  const addToFeed = function(newTweet) {
    const currentFeed = tweetFeed;
    const updatedFeed = [ newTweet, ... currentFeed];
    setTweetFeed(updatedFeed);
  };

  return (
    <>
      {/* Navigation Bar (fixed at top of page) */}
      <Navigation goToTop={ goToTop } />

      {/* Header showing user avatar & name */}
      <Header />

      {/* Page-specific (main) content */}
      <main className="container">

        {/* New Tweet Form */}
        <NewTweet addToFeed={ addToFeed } />

        {/* Current tweets display */}
        <TweetList tweets={ tweetFeed } />

        {/* To top button - only visible on scroll down */}
        {showTopBtn && (
          <ToTopButton goToTop={ goToTop } />
        )}

      </main>
    </>
  );
}