import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY !== 0);
        return () => {
            window.onscroll === null;
        };
    };

    return (
        <div
            className={`fixed top-0 z-[99999] w-full ${isScrolled ? 'bg-stone-900' : 'bg-opacity-30 bg-gradient-to-t from-transparent to-black'} text-white`}
        >
            <div className="flex h-[70px] items-center justify-between px-[50px]">
                <div className="flex gap-x-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="netflix logo"
                        className="mr-5 inline-block h-6"
                    />
                    <span className="cursor-pointer">Homepage</span>
                    <span className="cursor-pointer">Series</span>
                    <span className="cursor-pointer">Movies</span>
                    <span className="cursor-pointer">New and Popular</span>
                    <span className="cursor-pointer">My List</span>
                </div>
                <div className="flex gap-x-4">
                    <SearchIcon className="cursor-pointer" />
                    <span className="cursor-pointer">KIT</span>
                    <NotificationsIcon className="cursor-pointer" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="img-icon"
                        className="inline-block h-6 w-6 cursor-pointer rounded object-cover"
                    />
                    <div className="group relative hover:block">
                        <ArrowDropDownIcon className="cursor-pointer" />
                        <div className="absolute right-[-100%] top-full hidden flex-col rounded bg-stone-800 group-hover:flex">
                            <span className="cursor-pointer p-2.5">
                                Settings
                            </span>
                            <span className="cursor-pointer p-2.5">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
