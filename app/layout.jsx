import "./globals.css";

export const metadata = {
  title: "Baby Nohelia Shower Invitation",
  description: "Digital baby shower invitation for Baby Nohelia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
