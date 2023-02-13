import Image from 'next/image';

export default function Logos() {
  return (
    <>
      <ul className="flex flex-row items-center justify-between py-5">
        <li>
          <a href="#">
            <Image
              src={'/assets/facebook-logo.png'}
              height={100}
              width={135}
              alt="facebook logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={'/assets/dribbble-logo.png'}
              height={100}
              width={120}
              alt="dribbble logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={'/assets/youtube-logo.png'}
              height={100}
              width={130}
              alt="youtube logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={'/assets/pinterest-logo.png'}
              height={100}
              width={130}
              alt="pinterest logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={'/assets/twitter-logo.png'}
              height={100}
              width={130}
              alt="twitter logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={'/assets/reddit-logo.png'}
              height={100}
              width={100}
              alt="reddit logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={'/assets/google-logo.png'}
              height={100}
              width={120}
              alt="google logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={'/assets/slack-logo.png'}
              height={100}
              width={120}
              alt="slack logo"
            />
          </a>
        </li>
      </ul>
    </>
  );
}
