export const metadata = {
  title: "Siyeb",
  description: "Compliance platform starter"
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", margin: 0, padding: 0 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>Siyeb</h1>
            <nav style={{ display: "flex", gap: 12 }}>
              <a href="/">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/auth/login">Login</a>
            </nav>
          </header>
          <hr/>
          {children}
        </div>
      </body>
    </html>
  )
}
