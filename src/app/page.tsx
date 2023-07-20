import NavBar from "@/components/NavBar";
import Home from "@/pages/home";

export default function Main() {
  return (
    <div className="container mx-auto h-screen px-32 overflow-auto flex justify-center">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  )
}
