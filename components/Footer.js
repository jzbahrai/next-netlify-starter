import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image
          src="svgs/notify-logo.svg"
          width={45}
          height={45}
          alt="Notify Logo"
        />
        <span>GC Notify</span>
        <span style={{ marginLeft: "auto" }}>Speculative design 2024</span>
      </footer>
    </>
  );
}
