import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function Watch() {
    return (
        <div className='w-screen h-screen '>
            <div className=' flex items-center absolute top-[10px] left-[10px] text-white cursor-pointer z-20'>
                <ArrowBackIosNewOutlinedIcon />
                Home
            </div>

            <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay={false}
                controls
                className='h-full w-full object-cover '
            />
        </div>
    );
}

export default Watch;
