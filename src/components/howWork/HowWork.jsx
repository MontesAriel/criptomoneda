

const HowWork = () => {
    return(
        <section className="bg-neutral-900" style={{height:"100vh"}}>
            <div className="bg-neutral-800" style={{height:"60vh"}}>
                <div className="mx-auto max-w-screen-xl">
                    <div className="text-center	">
                        <h3 className="py-4">How It Work</h3>
                        <p className="pb-10">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                    </div>
                    <div>
                        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <div className="items-center flex flex-col after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    <img src="download-blockchain.webp" alt="icono download" className="w-32"/>
                                    <span className="mt-2 text-xs">STEP 1</span>
                                    <h6 className="text-xl text-white my-2">Download</h6> 
                                    <p className="hidden sm:inline-flex sm:ms-2">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                                </div>
                            </li>
                            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <div className="items-center flex flex-col after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    <img src="bitcoin2.png" alt="icono download" className="w-32"/>
                                    <span className="mt-2 text-xs">STEP 2</span>
                                    <h6 className="text-xl text-white my-2">Connect Wallet</h6> 
                                    <p className="hidden sm:inline-flex sm:ms-2">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                                </div>
                            </li>
                            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <div className="items-center flex flex-col after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    <img src="bitcoin4.webp" alt="icono download" className="w-32"/>
                                    <span className="mt-2 text-xs">STEP 3</span>
                                    <h6 className="text-xl text-white my-2">Start Trading</h6> 
                                    <p className="hidden sm:inline-flex sm:ms-2">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="items-center flex flex-col after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                    <img src="bitcoin6.png" alt="icono download" className="w-32"/>
                                    <span className="mt-2 text-xs">STEP 4</span>
                                    <h6 className="text-xl text-white my-2">Start Trading</h6> 
                                    <p className="hidden sm:inline-flex sm:ms-2">Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                                </div>
                            </li>
                           
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWork;