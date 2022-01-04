import React from 'react';
import './ShopSidebar.css';

const ShopSidebar = () => {
    return (
        <>
            <div className="shop-widget">
                <h3 className="shop-widget__title">Search Products</h3>
                <input type="text" />
            </div>
            <div className="shop-widget">
                <h3 className="shop-widget__title">Categories</h3>
                
                <ul className='widget-list checklist'>
                    <li><input type="checkbox" id="Man" /><label htmlFor="Man">Man</label></li>
                    <li><input type="checkbox" id="Women" /><label htmlFor="Women">Women</label></li>
                    <li><input type="checkbox" id="Baby" /><label htmlFor="Baby">Baby</label></li>
                    <li><input type="checkbox" id="Electronic" /><label htmlFor="Electronic">Electronic</label></li>
                    <li><input type="checkbox" id="Ciramic" /><label htmlFor="Ciramic">Ciramic</label></li>
                </ul>
            </div>
            <div className="shop-widget">
                <h3 className="shop-widget__title">Brand</h3>
                
                <ul className='widget-list checklist'>
                    <li><input type="checkbox" id="Apple" /><label htmlFor="Apple">Apple</label></li>
                    <li><input type="checkbox" id="Jeans" /><label htmlFor="Jeans">Jeans</label></li>
                    <li><input type="checkbox" id="Top Ten" /><label htmlFor="Top Ten">Top Ten</label></li>
                    <li><input type="checkbox" id="Samsung" /><label htmlFor="Samsung">Samsung</label></li>
                    <li><input type="checkbox" id="Nokia" /><label htmlFor="Nokia">Nokia</label></li>
                </ul>
            </div>
            <div className="shop-widget">
                <h3 className="shop-widget__title">Tag</h3>
                
                <ul className='widget-list taglist'>
                    <li><a href="#">Eid</a></li>
                    <li><a href="#">Puja Parbon</a></li>
                    <li><a href="#">Baishaki</a></li>
                    <li><a href="#">Kurbani Eid</a></li>
                    <li><a href="#">Covid 19</a></li>
                </ul>
            </div>
        </>
    )
};

export default ShopSidebar;
