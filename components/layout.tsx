import Head from "next/head";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const siteTitle = "NextJS + OpenAI Chat";
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="description" content="Next.js + OpenAI Chat" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <main>{children}</main>
    </div>
  );
}
