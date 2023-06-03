import styles from './page.module.css';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import NewTweet from '@/components/NewTweet';

export default function Home() {
  return (
    <>
      {/* Navigation Bar (fixed at top of page) */}
      <Navigation />

      {/* Header showing user avatar & name */}
      <Header />

      {/* Page-specific (main) content here */}
      <main className="container">
        <NewTweet />



      </main>
    </>
  );
}
