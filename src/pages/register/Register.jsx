import { useState } from 'react';
import Button from '../../components/button/Button';

function Register() {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const [submittedEmail, setSubmittedEmail] = useState('');

    function handleEmailSubmit(e) {
        e.preventDefault();
        setSubmittedEmail(formValue.email);
    }

    function handleChange(e) {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(
            'email: ',
            formValue.email,
            'password: ',
            formValue.password
        );
    }

    return (
        <div className="registerBg relative h-screen w-screen bg-cover">
            <div className="">
                <div className="flex items-center justify-between px-[50px] py-5">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo h-10"
                    />
                    <Button type="login" className="font-medium">
                        Sign In
                    </Button>
                </div>
            </div>

            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-stone-50">
                <h1 className="text-5xl">
                    Unlimited movies, TV shows, and more.
                </h1>
                <h2 className="m-5">Watch anywhere. Cancel anytime.</h2>

                <p className="text-xl">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>

                {!submittedEmail ? (
                    <form
                        className="mt-5 grid h-[50px] w-1/2 grid-cols-[75%_25%] items-center justify-between rounded bg-stone-50 text-stone-950"
                        onSubmit={handleEmailSubmit}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="email address"
                            className="h-full px-2.5 hover:outline-none focus:outline-none"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        <Button
                            type="register"
                            className="h-full text-xl text-stone-50"
                        >
                            Get Started
                        </Button>
                    </form>
                ) : (
                    <form
                        className="mt-5 grid h-[50px] w-1/2 grid-cols-[75%_25%] items-center justify-between rounded bg-stone-50 text-stone-950"
                        onSubmit={handleFormSubmit}
                    >
                        <input
                            type="password"
                            name="password"
                            placeholder="password address"
                            className="h-full px-2.5 hover:outline-none focus:outline-none"
                            value={formValue.password}
                            onChange={handleChange}
                        />
                        <Button
                            type="register"
                            className="h-full text-xl text-stone-50"
                        >
                            Get Started
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Register;
