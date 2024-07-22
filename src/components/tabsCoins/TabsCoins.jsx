

const TabsCoins = () => {
    return(
        <section className="container flex justify-center flex-col border border-1 border-slate-700 rounded mx-auto max-w-6xl">
            <div>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="me-2">
                        <button aria-current="page" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">Crypto</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">DeFi</button>
                    </li>
                    <li className="me-2">                                                                                                                                                                                                                                                                                                          
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">BSC</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">NFT</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">Metaverse</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">Polkadot</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">Solana</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">Opensea</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400">Makersplace</button>
                    </li>
                </ul>
            </div>
            <div className="flex">
                <div className="bg-neutral-900 py-2 px-6 my-2 mx-4 rounded min-w-56">
                    <div className="p-2">
                        <div className="flex items-center">
                            <img src="./bitcoin_icono.png" alt="icono bitcoin" className="w-6 mr-2"/>
                            <span className="text-sm ">Bitcoin</span>
                            <span className="text-sm mx-2 text-yellow-600">BTC/USD</span>
                        </div>
                        <div>
                            <h6 className="font-semibold text-lg py-2">USD 46,168.95</h6>
                        </div>
                        <div className="flex">
                            <p className="text-xs p-1 text-gray-500">36,641.20</p>
                            <p className="text-xs p-1 rounded-xl ml-1 bg-red-600">-0.79%</p>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-900 py-2 px-6 my-2 mx-4 rounded min-w-56">
                    <div className="flex items-center">
                        <img src="./binance_icono.png" alt="icono bitcoin" className="w-6 mr-2"/>
                        <span className="text-sm">BNB</span>
                        <span className="text-sm mx-2 text-yellow-600">BTC/USD</span>
                        </div>
                    <div>
                        <h6 className="font-semibold text-lg py-2">USD 46,168.95</h6>
                    </div>
                    <div className="flex">
                        <p className="text-xs p-1 text-gray-500">36,641.20</p>
                        <p className="text-xs p-1 rounded-xl ml-1 bg-green-600">+10.79%</p>
                    </div>
                </div>
                <div className="bg-neutral-900 py-2 px-6 my-2 mx-4 rounded min-w-56">
                    <div className="flex items-center">
                        <img src="./ethereum_icono.png" alt="icono bitcoin" className="w-6 mr-2"/>
                        <span className="text-sm">Ethereum</span>
                        <span className="text-sm mx-2 text-yellow-600">BTC/USD</span>
                    </div>
                    <div>
                        <h6 className="font-semibold text-lg py-2">USD 46,168.95</h6>
                    </div>
                    <div className="flex">
                        <p className="text-xs p-1 text-gray-500">36,641.20</p>
                        <p className="text-xs p-1 rounded-xl ml-1 bg-red-600">-0.79%</p>
                    </div>
                </div>
                <div className="bg-neutral-900 py-2 px-6 my-2 mx-4 rounded min-w-56">
                    <div className="flex items-center">
                        <img src="./tether_icono.png" alt="icono bitcoin" className="w-6 mr-2"/>
                        <span className="text-sm">Tether</span>
                        <span className="text-sm mx-2 text-yellow-600">BTC/USD</span>
                    </div>
                    <div>
                        <h6 className="font-semibold text-lg py-2">USD 46,168.95</h6>
                    </div>
                    <div className="flex">
                        <p className="text-xs p-1 text-gray-500">36,641.20</p>
                        <p className="text-xs p-1 rounded-xl ml-1 bg-red-600">-0.79%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabsCoins;