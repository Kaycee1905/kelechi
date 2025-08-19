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
          width={200}
          height={40}
          priority
        />
        <ol>
          <li>
           About Next.js
          </li>
          <li>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static rendering.

React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js".[6] Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side..</li>
        </ol>
             <button 
        onClick={() => router.push("/")}>
            <Image
            
                aria-hidden
                src="/sun.svg"
                alt="Sun icon"
                width={16}
                height={16}
            />
            Go Home
        </button>
      </main>
    </div>
  );
}
