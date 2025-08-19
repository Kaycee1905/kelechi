"use client";
import Image from "next/image";
import styles from "../page.module.css"
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/public/ic--baseline-contrast.svg"
          alt="Constrast logo"
          width={190}
          height={20}
          priority
        />
        <ol>
          <li>
            DASHBOARD.
          </li>
        </ol>
          <a
            href="https://github.com/"
            target="_blank"
            className={styles.secondary}
          >
            Get more information
          </a>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=3f8b2e0f4a6b4c7a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/public/solar--alt-arrow-down-bold-duotone.svg"
            alt="File icon"
            width={18}
            height={18}
          />
          Learn
        </a>
        <button 
          onClick={() => router.push("/About")}>
          <Image
            aria-hidden
            src="/public/ic--baseline-cruelty-free.svg"
            alt="cruelty icon"
            width={18}
            height={18}
          />
          About
        </button>
      </footer>
    </div>
    );
  }