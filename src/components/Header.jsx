import { IMG_URL } from "../config/constants";
import { NavLink } from "react-router-dom";

function Header() {
  const COMMON_NAV_ICON_CLASSES = `2xl:hover:text-softRed transition duration-100 w-200 md:w-5 h-200 md:h-5`;

  return (
    <header className="2xl:z-40 2xl:fixed 2xl:left-[calc(50vw - 720px)]  bg-darkBlue 2xl:h-[60rem]">
      <div className=" 2xl:h-full py-[1.125rem] px-200 md:p-5 container mx-auto  flex 2xl:items-center 2xl:flex-col 2xl:space-y-900 justify-between 2xl:justify-start">
        <img
          src={`/images/logo.svg`}
          className="w-[1.5625rem] md:w-400 h-5 md:h-[1.6rem]"
          alt="logo"
        />

        <nav>
          <ul className="flex space-x-300 2xl:space-x-0 2xl:space-y-8 2xl:flex-col md:space-x-400">
            <li className="2xl:mx-auto">
              <NavLink to="/">
                {({ isActive }) => (
                  <>
                    <svg
                      className={` ${
                        isActive ? "text-white" : "text-lightBlue"
                      } ${COMMON_NAV_ICON_CLASSES}`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">homepage button</span>
                  </>
                )}
              </NavLink>
            </li>

            <li className="2xl:mx-auto">
              <NavLink to="/Movies">
                {({ isActive }) => (
                  <>
                    <svg
                      className={`${
                        isActive ? "text-white" : "text-lightBlue"
                      } ${COMMON_NAV_ICON_CLASSES}`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                        fill="currentColor"
                      />
                    </svg>

                    <span className="sr-only">movies page button</span>
                  </>
                )}
              </NavLink>
            </li>

            <li className="2xl:mx-auto">
              <NavLink to="/TVSeries">
                {({ isActive }) => (
                  <>
                    <svg
                      className={`${
                        isActive ? "text-white" : "text-lightBlue"
                      } ${COMMON_NAV_ICON_CLASSES}`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">tv series page button</span>
                  </>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/Bookmark">
                {({ isActive }) => (
                  <>
                    <svg
                      className={`${
                        isActive ? "text-white" : "text-lightBlue"
                      } ${COMMON_NAV_ICON_CLASSES}`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                        fill="currentColor"
                      />
                    </svg>

                    <span className="sr-only">bookmark page button</span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        <img
          src={`/images/image-avatar.png`}
          className="w-300 md:w-400 h-300 md:h-400 border-2 border-white rounded-full 2xl:mt-auto"
          alt="profile"
        />
      </div>
    </header>
  );
}

export default Header;
