import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Home</h1>
      <div className="flex flex-col gap-4 p-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/customerservice"}>Customer Service</Link>
        <Link href={"/deliveryservice"}>Delivery Service</Link>
        <Link href={"/designservice"}>Design Service</Link>
        <Link href={"/installationservice"}>Installation Service</Link>
      </div>
    </div>
  );
}