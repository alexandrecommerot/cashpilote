export const metadata = {
  title: "CashPilote",
  description: "Landing page CashPilote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
