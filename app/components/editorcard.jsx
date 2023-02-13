import Image from 'next/image';

export default function EditorCard() {
  return (
    <div className="flex items-center justify-between gap-8 mt-8 rounded-lg pt-10 px-[50px]">
      <div>
        <Image
          src={'/assets/text-editor.png'}
          width={550}
          height={100}
          alt="escrow website on phone mockup"
        />
      </div>
      <div className="flex flex-col justify-center mx-[20px]">
        <h2 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none">
          A text editor like no other.
        </h2>
        <p className="mb-4 font-light text-gray-500 text-lg w-[29rem]">
          Our text editor pulls you into focus mode with it&apos;s simplistic
          design and usability so you can put out your best writings.
        </p>
        <a href="#" className="text-lg">
          Text Editor Live Demo &rarr;
        </a>
      </div>
    </div>
  );
}
