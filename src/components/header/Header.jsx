import '../../index.css';

const Header = () => {
    return(
        <header className="p-12 flex justify-center container-header container max-w-screen-xl h-screen pt-16 md:pt-24 lg:pt-32">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-full xl:w-1/2">
                        <div>
                            <h2 className="title-header">Buy & Sell Digital Assets In El Ale</h2>
                        </div>
                        <div>
                            <p className='my-5'>Coin rockie is the easiest, safest, and fastest way to buy & sell crypto asset exchange.</p>
                        </div>
                        <div className='mt-5'>
                            <button className="px-6 py-2 min-w-[120px] text-center text-white bg-cyan-600 border border-cyan-600 rounded active:text-cyan-500 hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring">Get started now</button>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-full xl:w-1/2">
                        <img src="./prueba-main.jpg" alt="banner header" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;