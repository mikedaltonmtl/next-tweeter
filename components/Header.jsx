// Header showing user avatar & name
import Image from 'next/image';


export default function Header() {
  return (
    <header class="userHeader">
      <Image
        src="/profile-hex.png"
        alt="user profile image"
        width={ 256 }
        height={ 256 }
        priority
      />
      <h2>Your Name</h2>
    </header>
  );
}
