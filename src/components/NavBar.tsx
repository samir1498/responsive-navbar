import { useState } from "react";

type NavBarLinkProps = {
  link: string;
  text: string;
};

function NavbarLink({ link, text }: NavBarLinkProps) {
  return (
    <a href={link} className="text-white hover:scale-125 hover:text-gray-200 h-6">
      {text}
    </a>
  );
}

type CloseIconProps = {
  handleClose: ()=> void
}

function CloseIcon({handleClose}: CloseIconProps) {
  return (
    <svg
      className="h-6 w-6 origin-center self-center text-gray-100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={handleClose}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

type OpenIconProps = {
  isNavOpen: boolean
  handleOpen: ()=>void
}

function OpenIcon({isNavOpen, handleOpen}: OpenIconProps){
  return (
    <div
    className={!isNavOpen ? "flex flex-col justify-center gap-1 p-4 h-14 transition delay-100 duration-500" : "hidden transition delay-100 duration-500"}
    onClick={handleOpen}
  >
    <span className="block h-1 w-8 bg-gray-100"></span>
    <span className="block h-1 w-8 bg-gray-100"></span>
    <span className="block h-1 w-8 bg-gray-100"></span>
  </div>
  )
}

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-gray-600 h-16 flex items-center transition delay-100 duration-500">
      <div className="container flex justify-between items-center mx-auto">

        <a href="/" className="text-2xl font-bold text-white">
          Todo App
        </a>

        <div
          className={
            isNavOpen
              ? "flex items-center justify-center gap-2 p-4 h-14"
              : "hidden"
          }
        >
          <CloseIcon handleClose={()=> setIsNavOpen(false)}/>
          <NavbarLink link="/" text="Home" />
          <NavbarLink link="/tasks" text="Tasks" />
          <NavbarLink link="/settings" text="Settings" />
          <NavbarLink link="/help" text="Help" />
        </div>

       <OpenIcon isNavOpen={isNavOpen} handleOpen={()=> setIsNavOpen(true)}/>
      </div>
    </nav>
  );
}

export default Navbar;
