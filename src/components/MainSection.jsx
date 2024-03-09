import * as Constants from '../utils/Constants';

const MainSection = () => {
    return (
        <main className="main-body container">
            <div className="main-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="main-btn">
                    <a className='btn' href={Constants.SHOP_URL} target="_blank">Shop Now</a>    
                    <a className="secondary-btn" href={Constants.CATEGORY_URL} target="_blank">Category</a>
                </div>

                <div className="shop-on">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <a href={Constants.FLIPKART_URL} target="_blank">
                            <img src={Constants.FLIPKART_IMG} alt="flipkart" />
                        </a>
                        <a href={Constants.AMAZON_URL} target="_blank">
                            <img src={Constants.AMAZON_IMG} alt="amazon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="main-image">
                <a href={Constants.LOGO_URL} target="_blank">
                    <img src={Constants.SHOE_IMG} alt="shoe" />
                </a>
            </div>
        </main>
    )
}

export default MainSection;
