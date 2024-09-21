export default function Header() {
    return (
        <div className="flex items-start justify-center pt-[2vw]">
        <div className="header w-[87vw] h-[10vh] hidden lg:flex items-center justify-around gap-[30vw] bg-white rounded-[3vw] ">
        <div className="header-p1">
        <img className="w-[4vw]" src="sukhino_logo.svg" alt="sukhino logo" />
        </div>
        <div className="header-p2">
          <ul className="flex items-center justify-center gap-[3vw] text-black text-[0.8rem]">
            <a href="#"><li>Home</li></a>
            <a href="#get"><li>About</li></a>
            <a href="#feature"><li>Feature</li></a>
            <a href="#pricing"><li>Pricing</li></a>
            <a href="#download"><li>Download</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
   </div>
   </div>       
    );
  }