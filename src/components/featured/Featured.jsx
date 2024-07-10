import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '../button/Button';

function Featured({ type }) {
    return (
        <div className="relative flex h-[90vh] flex-col text-white">
            {type && (
                <div className="absolute left-[80px] top-[60px] z-50  font-bold text-white">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre" className='text-stone-50 cursor-pointer bg-stone-950 border ml-5 p-1'>
                        <option >Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="netflix logo"
                className="inline-block h-full w-full object-cover"
            />

            <div className="absolute bottom-[100px] left-[50px] w-[35%]">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                    className="w-[400px]"
                />
                <span className="my-5 inline-block">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam fugiat, cum quibusdam labore maiores, aut nihil
                    quisquam non pariatur et nemo recusandae impedit voluptate
                    commodi optio voluptatem facere explicabo. Tempore.
                </span>

                <div className="flex gap-x-3 text-stone-950">
                    <Button type="play">
                        <PlayArrowIcon />
                        <span className="ml-1">Play</span>
                    </Button>
                    <Button type="more">
                        <InfoOutlinedIcon />
                        <span className="ml-1">Info</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
