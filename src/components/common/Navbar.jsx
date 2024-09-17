import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";

function Navbar() {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);
    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [catalogVisible, setCatalogVisible] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await apiConnector("GET", categories.CATEGORIES_API);
                if (!res) {
                    console.log("categories not found");
                }
                setSubLinks(res.data.data);
            } catch (error) {
                console.log("Could not fetch Categories.", error);
            }
            setLoading(false);
        })();
    }, []);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const toggleCatalog = () => {
        setCatalogVisible(!catalogVisible);
    };

    return (
        <div
            className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${location.pathname !== "/" ? "bg-richblack-800" : ""
                } transition-all duration-200`}
            style={{ zIndex: 1000 }} // Ensuring highest z-index
        >
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
                </Link>
                {/* Desktop Navigation links */}
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6 text-richblack-25">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {link.title === "Catalog" ? (
                                    <div
                                        className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName")
                                            ? "text-yellow-25"
                                            : "text-richblack-25"
                                            }`}
                                        onClick={toggleCatalog} // Toggle on click
                                    >
                                        <p>{link.title}</p>
                                        <BsChevronDown />
                                        {catalogVisible && (
                                            <div className="absolute left-0 top-full mt-2 z-[1000] w-[200px] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 lg:w-[300px]">
                                                {loading ? (
                                                    <p className="text-center">Loading...</p>
                                                ) : subLinks.length ? (
                                                    <>
                                                        {subLinks.map((subLink, i) => (
                                                            <Link
                                                                to={`/catalog/${subLink.name
                                                                    .split(" ")
                                                                    .join("-")
                                                                    .toLowerCase()}`}
                                                                className="block rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50"
                                                                key={i}
                                                            >
                                                                <p>{subLink.name}</p>
                                                            </Link>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <p className="text-center">No Courses Found</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link to={link?.path}>
                                        <p
                                            className={`${matchRoute(link?.path)
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                                }`}
                                        >
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Login / Signup / Dashboard */}
                <div className="hidden items-center gap-x-4 md:flex">
                    {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                        <Link to="/dashboard/cart" className="relative">
                            <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                            {totalItems > 0 && (
                                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    )}
                    {token === null && (
                        <>
                            <Link to="/login">
                                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                    Log in
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                    Sign up
                                </button>
                            </Link>
                        </>
                    )}
                    {token !== null && <ProfileDropdown />}
                </div>
                {/* Mobile Menu Button */}
                <button className="mr-4 md:hidden" onClick={toggleMobileMenu}>
                    <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuVisible && (
                <div className="absolute top-14 left-0 w-full bg-richblack-800 z-[1000] md:hidden">
                    <ul className="flex flex-col gap-y-4 p-4 text-richblack-25">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {link.title === "Catalog" ? (
                                    <div>
                                        <div
                                            className={`flex cursor-pointer  items-center gap-1 ${matchRoute("/catalog/:catalogName")
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                                }`}
                                            onClick={toggleCatalog} // Toggle on click
                                        >
                                            <p>{link.title}</p>
                                            <BsChevronDown />
                                        </div>
                                        {catalogVisible && (
                                            <div className="mt-2 flex flex-col bg-richblack-5 p-2 rounded-lg">
                                                {loading ? (
                                                    <p className="text-center">Loading...</p>
                                                ) : subLinks.length ? (
                                                    <>
                                                        {subLinks.map((subLink, i) => (
                                                            <Link
                                                                to={`/catalog/${subLink.name
                                                                    .split(" ")
                                                                    .join("-")
                                                                    .toLowerCase()}`}
                                                                className="block rounded-lg text-black bg-transparent py-2 pl-2 hover:bg-richblack-50"
                                                                key={i}
                                                                onClick={toggleMobileMenu} // Close menu after click
                                                            >
                                                                <p>{subLink.name}</p>
                                                            </Link>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <p className="text-center text-black">No Courses Found</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link to={link?.path} onClick={toggleMobileMenu}>
                                        <p
                                            className={`${matchRoute(link?.path)
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                                }`}
                                        >
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                        {/* Add Login and Signup buttons for mobile */}
                        {token === null && (
                            <>
                                <li>
                                    <Link to="/login" onClick={toggleMobileMenu}>
                                        <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                            Log in
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup" onClick={toggleMobileMenu}>
                                        <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                            Sign up
                                        </button>
                                    </Link>
                                </li>
                            </>
                        )}
                        {/* If the user is logged in, show Profile dropdown */}
                        {token !== null && (
                            <li>
                                <ProfileDropdown />
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
