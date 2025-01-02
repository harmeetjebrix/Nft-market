import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Explore from "@/components/Explore";
import About from "@/components/About";
import Collections from "@/components/Collection";
import TopCreators from "@/components/TopCreators";

export default function Home() {
  return (
    <div className="before:absolute before:top-0 before:left-0 before:w-80 
    before:h-72 before:bg-gradient-to-br before:from-[#2A0A45] before:via-transparent before:to-transparent before:-z-10">
      <div className="bg-gradients-to-b from-[#130F3A] via-[#130F3A] to-purple overflow-x-hidden">
        <div className="h-screen w-full bg-[url('/bg.png')] bg-cover bg-top-left absolute top-0 left-0 opacity-20 -z-[10]" />
        <div className="container px-5 mx-auto flex flex-col gap-32">
          <Header />
        </div>
      </div>

      <div className="container px-5 mx-auto flex flex-col gap-20 overflow-x-hidden">
        <Featured />
        <Explore />
        <About />
        <Collections />
        <TopCreators />
      </div>
    </div>
  );
}
