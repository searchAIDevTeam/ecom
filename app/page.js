import HomePage from "@/components/home/HomePage";
import SaveDeviceIdLocalstorage from "@/utils/SaveDeviceIdLocalstorage ";
export default function Home() {
  return (
    <>
      <SaveDeviceIdLocalstorage />
      <HomePage />
    </>
  );
}
