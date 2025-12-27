import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { useContext } from "react"
import { ThemeContext } from "../src/Context/ThemeContext"

export default function Layout() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`flex h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      
      {/* Sidebar */}
      // This is from New branch
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Header */}
        <Header />

        {/* 🔥 Theme Toggle Buttons */}
        <div className="flex gap-3 p-4 border-b">
          <button
            onClick={() => toggleTheme("light")}
            className="px-4 py-2 rounded bg-yellow-400 text-black font-medium"
          >
            ☀ Light
          </button>

          <button
            onClick={() => toggleTheme("dark")}
            className="px-4 py-2 rounded bg-gray-800 text-white font-medium"
          >
            🌙 Dark
          </button>
        </div>

        {/* Content */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
