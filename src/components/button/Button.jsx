function Button({ children, type, className }) {
    let styles;

    switch (type) {
        case 'play':
            styles = 'font-bold bg-stone-50  text-stone-950  px-5 py-2.5 text-lg rounded';
            break;
        case 'more':
            styles = 'bg-gray-400 text-stone-50  px-5 py-2.5 text-lg rounded';
            break;
        case "login":
             styles="bg-red-600 py-[5px] px-[15px] text-white border-none rounded"
             break;
        case "register":
            styles="bg-red-600 border-none "
            break;
    }




    return (
        <button
            className={`corser-pointer flex items-center justify-center   ${className ? className : ''} ${styles ? styles : ''} `}
        >
            {children}
        </button>
    );
}

export default Button;
