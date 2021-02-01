import Link from "next/link";
import { useRouter } from "next/router";

export default function BasicsNextJs() {
  const router = useRouter();
  function backToHome() {
    router.push("/"); // BACK FUNCTION WILL BE AVAILABLE
    // BACK FUNCTION WOULD NOT BE AVAILABLE:
    // router.replace("/");
  }
  return (
    <>
      <button onClick={backToHome}>Back to Home</button>
      <Link href="/profile">Go to profile</Link>
    </>
  );
}
