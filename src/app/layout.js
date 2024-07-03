import Layout from './components/layout-comp.js';
import './styles/navbar.css'

export const metadata = {
  title: "Gestor de citas",
  description: "Creado por Marco Ambricca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark'>
      <body><Layout>{children}</Layout></body>
    </html>
  );
}