"use client";
import Image from "next/image";
import styles from "../page.module.css"
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
             <button 
        onClick={() => router.push("/Dashboard")}>
            <Image
            
                aria-hidden
                src="/public/ic--baseline-cruelty-free.svg"
                alt="cruelty icon"
                width={20}
                height={20}
            />
            Go Home
        </button>
        </ol>
      </main>
    </div>
  );
}
