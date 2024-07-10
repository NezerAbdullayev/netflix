import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

function ListItem({ index }) {
    let trailer =
        'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

    return (
        <div className="group relative h-[120px] w-[225px] cursor-pointer bg-stone-950 shadow-stone-50 duration-300 hover:z-[99]">
            <div className="absolute h-full w-full group-hover:left-[-25%] group-hover:top-[-185px] group-hover:h-[300px] group-hover:w-[325px] group-hover:rounded">
                <img
                    src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                    alt=""
                    className="h-[120px] w-full object-cover group-hover:hidden"
                />

                <div className="relative z-10 hidden bg-stone-950 p-4 text-white group-hover:block">
                    <video
                        src=""
                        autoPlay
                        loop
                        className="left-0 top-0 h-[140px] w-full object-cover"
                    ></video>

                    <div className='flex flex-col  p-1'>
                        <div className="flex mb-2.5 gap-x-2.5 ">
                            <PlayArrowIcon  className=' border-2  rounded-full p-1 ' />
                            <AddIcon className=' border-2  rounded-full p-1 ' />
                            <ThumbUpOutlinedIcon className=' border-2  rounded-full p-1 ' />
                            <ThumbDownOffAltOutlinedIcon className=' border-2  rounded-full p-1 ' />
                        </div>

                        <div className="mb-2.5 flex items-center text-sm font-semibold text-gray-400  ">
                            <span>1 hour 14 mins</span>
                            <span className='border border-gray-400 py-[1px] px-[3px] mx-2.5'>+16</span>
                            <span>1999</span>
                        </div>

                        <div className="mt-2.5 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia impedit repudiandae ratione
                            consectetur commodi molestiae.
                        </div>
                    </div>

                    <div className="mt-2 text-stone-100">Action</div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
