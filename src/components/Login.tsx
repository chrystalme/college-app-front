import { useState } from "react"
const Login = () => {
const [login, setLogin] = useState({
  email: '', password: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target;
  setLogin({
    ...login,
    [name]: value
  })
}

const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log(login)
}

    return (
        <section className="h-50">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"></div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"/>
                            </div>

                            <div className="mb-6">
                                <input
                                name="password"
                                onChange={handleChange}
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"/>
                            </div>

                            <div className="flex justify-between items-center mb-6">

                                <a href="#!" className="text-gray-800">Forgot password?</a>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="button"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Login
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
