import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* ✅ beforeInteractive renders in <head> — required for Search Console GA verification */}
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
