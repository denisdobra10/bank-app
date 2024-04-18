import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import Layout from "./website-layout"
import CallCenterPage from "./pages/call-center-page"
import ProgramarePage from "./pages/programare-page"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/call-center" element={<CallCenterPage />} />
          <Route path="/booking" element={<ProgramarePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
