import { WorkoutProvider } from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
        <WorkoutProvider>
          <Navbar></Navbar>
          {children}
          <ToastContainer position="top-right" theme="dark" />
        </WorkoutProvider>
      </body>
    </html>
  );
}