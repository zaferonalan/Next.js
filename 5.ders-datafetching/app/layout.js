import "./globals.css";
import { getData } from "./page";

export default function RootLayout({ children }) {
  const data = getData()
  return (
    <html lang="en">
      <body>{children}
      <title>{data.title}</title>
      </body>
    </html>
  );
}
