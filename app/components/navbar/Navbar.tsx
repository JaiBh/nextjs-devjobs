import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="bg-primary md:rounded-bl-[5rem]">
      <div className="section-center pt-8 pb-[4.5rem] flex items-center justify-between lg:pt-[2.5rem] lg:pb-[5rem]">
        <Link href={"/"}>
          <h1 className="lowercase font-medium text-secondary-1">devjobs</h1>
        </Link>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
export default Navbar;
