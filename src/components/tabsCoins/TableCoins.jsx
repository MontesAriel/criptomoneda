

const TableCoins = () => {
    return(
    <main className="bg-neutral-900 pt-20" style={{height:"90vh"}}>
        <div className="container mx-auto max-w-screen-xl">
            <div className="flex justify-between items-center">
                <h3>Market Update</h3>
                <button>See All Coins</button>
            </div>
            <div className="py-10">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500  dark:border-gray-700 dark:text-gray-400">
                    <li className="me-2">
                        <button aria-current="page" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400 dark:text-white">View All</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400 dark:text-white">Metaverse</button>
                    </li>
                    <li className="me-2">                                                                                                                                                                                                                                                                                                          
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400 dark:text-white">Entertainment</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400 dark:text-white">Energy</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400 dark:text-white">NFT</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400 dark:text-white">Gaming</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:hover:text-cyan-400 dark:text-white">Music</button>
                    </li>
                </ul>
            </div>
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase  dark:bg-neutral-800 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    24h %
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Market Cap
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last 7 Days
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-800">
                                <th scope="row" className="px-6 flex items-center py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img src="./bitcoin_icono.png" alt="bitcoin" className="w-6"/>
                                    <span className="ml-1">Bitcoin</span> 
                                </th>
                                <td className="px-6 py-4 dark:text-white">
                                    $56,623.54
                                </td>
                                <td className="px-6 py-4 dark:text-white">
                                    +1.45%
                                </td>
                                <td className="px-6 py-4 dark:text-white">
                                    $880,423,640,582
                                </td>
                                <td className="px-6 py-4 ">
                                <img src="./trade-positivo.png" alt="trade positivo"/>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Trade</a>
                                </td>
                            </tr>
                            <tr className=" border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-800">
                                <th scope="row" className="px-6 flex items-center py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img src="./ethereum_icono.png" alt="bitcoin" className="w-6"/>
                                    <span className="ml-1">Ethereum</span> 
                                </th>
                                <td className="px-6 py-4 dark:text-white">
                                    $56,623.54
                                </td>
                                <td className="px-6 py-4 dark:text-white">
                                    -5.12%
                                </td>
                                <td className="px-6 py-4 dark:text-white">
                                    $880,423,640,582
                                </td>
                                <td className="px-6 py-4">
                                    <img src="./trade-negativo.png" alt="trade negativo"/>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Trade</a>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-neutral-800">
                                <th scope="row" className="px-6 flex items-center py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img src="./binance_icono.png" alt="bitcoin" className="w-6"/>
                                    <span className="ml-1">Binance</span> 
                                </th>
                                <td className="px-6 py-4 dark:text-white">
                                    $56,623.54
                                </td>
                                <td className="px-6 py-4 dark:text-white">
                                -3.75%
                                </td>
                                <td className="px-6 py-4 dark:text-white">
                                    $880,423,640,582
                                </td>
                                <td className="px-6 py-4">
                                    <img src="./trade-negativo.png" alt="trade negativo"/>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Trade</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
    )
}

export default TableCoins;