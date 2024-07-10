import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';

function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    function handleClick(direction) {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 48;

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber((slideNumber) => slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 8) {
            setSlideNumber((slideNumber) => slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div className="mt-2.5 w-full">
            <span className="ml-12 text-xl font-medium text-white">
                Continue to watch
            </span>

            <div className="relative">
                <div
                    className="absolute bottom-0 left-0 top-0 z-30 grid h-full w-12 cursor-pointer place-items-center bg-stone-800 bg-opacity-50"
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && 'none' }}
                >
                    <ArrowBackIosOutlinedIcon className="m-auto text-white" />
                </div>
                <div
                    className="ml-12 mt-2.5 flex w-max translate-x-0 transform flex-wrap gap-x-[5px] transition-all duration-700 ease-linear"
                    ref={listRef}
                >
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                    <ListItem index={10} />
                    <ListItem index={11} />
                    <ListItem index={12} />
                    <ListItem index={13} />
                </div>
                <div
                    className="absolute bottom-0 right-0 top-0 z-30 grid h-full w-12 cursor-pointer place-items-center bg-stone-800 bg-opacity-50"
                    onClick={() => handleClick('right')}
                >
                    <ArrowForwardIosOutlinedIcon className="m-auto text-white" />
                </div>
            </div>
        </div>
    );
}

export default List;
