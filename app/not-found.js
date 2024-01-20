import Image from "next/image";
import Link from "next/link";
const Notfound = () => {
  return (
    <main className="flex items-center text-blue-900 gap-5 justify-center flex-col relative top-16  pb-20">
      <h2 className="text-[47px]">OOPS ! </h2>
      <p className="text-xl">404 Page Not found</p>
      <Image
        src="/404.webp"
        width={600}
        height={300}
        className=" sm:w-[600px] sm:h-[300px] w-[80vw] h-[60vh] "
        alt="not-found"
      />
      <p className="text-3xl">Looks like the page went on vacation</p>
      <p>
        Go to &nbsp;
        <Link href="/" className=" underline">
          Homepage
        </Link>
      </p>
    </main>
  );
};

export default Notfound;
