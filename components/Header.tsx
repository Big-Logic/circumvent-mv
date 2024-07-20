import Link from "next/link";
import NewSetupButton from "./NewSetupButton";

type Fn = () => void;

function Header({ funHandler }: { funHandler: Fn }) {
  return (
    <header className="p-4">
      <nav>
        <ul className="flex gap-x-8 items-center">
          <li className="grow">
            <Link href="/" className="font-bold text-2xl">
              Circumvent MB
            </Link>
          </li>
          <li>
            <Link href="/allmbs">All mbs</Link>
          </li>
          <li>
            <NewSetupButton funHandler={funHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
