export default function NavBar() {
  return (
    <div className="flex justify-between items-center  md:py-3 text-white pr-2.5 ">
      <div>
        <img
          className="w-1/4 md:w-1/6 logo"
          src="../images/Logo.png"
          alt="logo"
        />
      </div>
      <div className="flex pr-2.5">
        <ul className="flex gap-3.5">
          <li className="cursor-pointer">
            <a className="font-medium link" href="/">
              Home
            </a>
          </li>
          <li className="cursor-pointer">
            <a className="font-medium link" href="#">
              Movie
            </a>
          </li>
          <li className="cursor-pointer">
            <a className="font-medium link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
