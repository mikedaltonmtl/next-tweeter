import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import NewTweet from '@/components/NewTweet';
import TweetList from '@/components/TweetList';
import ToTopButton from '@/components/ToTopButton';

export default function Home() {
  return (
    <>
      {/* Navigation Bar (fixed at top of page) */}
      <Navigation />

      {/* Header showing user avatar & name */}
      <Header />

      {/* Page-specific (main) content here */}
      <main className="container">

        {/* New Tweet Form */}
        <NewTweet />

        {/* Current tweets display */}
        <TweetList />

        {/* To top button */}
        <ToTopButton />

      </main>
    </>
  );
}
