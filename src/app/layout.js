export const metadata = {
  title: "AppScrip.demo",
  description: "This is the home page of your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
