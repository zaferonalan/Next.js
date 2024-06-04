export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <>
          <header>header</header>
          <div>{children}</div>
          <footer>Footer</footer>
        </>
      </body>
    </html>
  );
}
