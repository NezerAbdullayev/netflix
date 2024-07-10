function Login() {
    return (
        <div className="loginBg relative h-screen w-screen bg-cover">
            <div className="">
                <div className="flex items-center justify-between px-[50px] py-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo h-10"
                    />
                </div>
            </div>

            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-stone-50">
                <form className="flex h-[330px] w-[300px] flex-col justify-around rounded bg-stone-950 p-5">
                    <h1 className='text-2xl'>Sign In</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email or phone number"
                        className="h-[40px] pl-2.5 rounded bg-gray-400 text-stone-50 placeholder:text-stone-300"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="h-[40px] pl-2.5 rounded bg-gray-400 text-stone-50 placeholder:text-stone-300"
                    />
                    <button className='h-10 rounded  bg-red-500 text-stone-50 font-medium cursor-pointer '>Sign In</button>
                    <span className='text-stone-300'>
                        New to Netflix? <b className='text-white'>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}

export default Login;
