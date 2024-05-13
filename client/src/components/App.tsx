import { Outlet } from "react-router-dom"

function App() {

  return (
    <main className="mx-auto mt-10 container px-2">
      <Outlet />
    </main>
  )
}

export default App
