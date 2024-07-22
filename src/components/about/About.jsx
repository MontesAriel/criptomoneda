


const About = () => {
    return(
        <section style={{height:"100vh"}}>
            <div className="mx-auto max-w-screen-xl flex justify-center pt-16 items-center">
                <div className="mx-10">
                    <img src="desktop-wallet.png" alt="about" className="w-full"/>
                </div>
                <div className="">
                    <div className="mb-10">
                        <h3 className="mb-10">What Is Ale</h3>
                        <p>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
                    </div>
                    <div className="mb-10">
                        <div className="mb-8 flex items-center">
                            <img src="check.png" alt="check icon" className="w-8 mr-2"/>
                            <h6>View real-time cryptocurrency prices</h6>
                        </div>
                        <div>
                            <p>Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P, Staking, Mining, And Margin.</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="mb-8 flex items-center">
                            <img src="check.png" alt="check icon" className="w-8 mr-2"/>
                            <h6>Buy and sell BTC, ETH, XRP, OKB, Etc...</h6>
                        </div>
                        <div>
                            <p>Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P, Staking, Mining, And Margin.</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className="px-6 py-2 min-w-[120px] text-center text-white bg-cyan-600 border border-cyan-600 rounded active:text-cyan-500 hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring">Explore More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;