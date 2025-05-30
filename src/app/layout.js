"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isOnline, setIsOnline] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").catch((err) => {
        console.error("Service Worker registration failed:", err);
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Explore the dynamic portfolio of Kutubuddin Ansari, showcasing expertise in web and app development. 
          Engage with captivating projects and innovative solutions. 
          Connect for collaborations and let's bring your digital vision to reality with Kutubuddin Ansari."
        />
        <meta
          name="keywords"
          content="Kutubuddin ansari, Kutubuddin ansari Portfolio, Kutub, Kutubuddin ansari CV, Kutubuddin ansari Developer, Amit Developer, Amit Vercel Portfolio, Kutubuddin ansari, Kutubuddin ansari portfolio, Kutubuddin ansari developer, ameet kamat"
        />
        <meta name="author" content="Kutubuddin Ansari" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/7911e70227.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="styles.css"></link>
        <title>Kutub&apos;s Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/images/Logo4.png"></link>

        <script
          defer
          data-domain="portfolio599.netlify.app"
          src="http://localhost/js/script.js"
        ></script>
      </head>
      <body style={{ overflowX: "hidden" }}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
