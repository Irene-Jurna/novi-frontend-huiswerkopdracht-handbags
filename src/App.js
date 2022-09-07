import React from 'react';
import './App.css';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brandimage from './assets/brand.png';
import designers from './assets/our_story.png';
import Button from "./Components/Button";
import Product from "./Components/Product";
import Tile from "./Components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonText="to the collection"
                    buttonDisabled={false}
                />
                <Button
                    buttonText="shop all bags"
                    buttonDisabled={false}
                />
                <Button
                    buttonText="pre-orders"
                    buttonDisabled={true}
                />
            </nav>
            <main>
                <Product
                    productText="Best seller"
                    productImage={bag1}
                    productDescription="The handy bag"
                    productPrice={400}
                />
                <Product
                    productText="Best seller"
                    productImage={bag2}
                    productDescription="The stylish bag"
                    productPrice={250}
                />
                <Product
                    productText="New collection"
                    productImage={bag3}
                    productDescription="The simple bag"
                    productPrice={300}
                />
                <Product
                    productText="New collection"
                    productImage={bag4}
                    productDescription="The trendy bag"
                    productPrice={150}
                />
            </main>
            <footer>
                <Tile
                    tileTitle="The brand"
                    tileText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid eaque earum est fuga nesciunt non qui repudiandae sint vel."
                />
                <Tile
                tileImage={brandimage}
                tileImageDescription="Brand image"
                />
                <Tile
                    tileImage={designers}
                    tileImageDescription="Designers"
                />
              <Tile
                  tileTitle="Our story"
                  tileText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid eaque earum est fuga nesciunt non qui repudiandae sint vel."
              />
            </footer>
        </>
    );
}

export default App;



