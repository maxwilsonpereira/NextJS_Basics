import Image from "next/image";
import styles from "./style.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      {/* IMAGE: */}
      {/* src="/favicon.jpg" -> Consider / as the public folder: */}
      <Image
        className={styles.maxmixlogo}
        src="/images/maxmixlogo.jpg"
        alt=""
        width={80}
        height={80}
      />
      <br /> <br />
    </div>
  );
}
