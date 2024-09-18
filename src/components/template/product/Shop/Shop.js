import React from 'react';
import style from './Shop.module.css';
import ProdBtn from '../ProdBtn/ProdBtn';

function Shop() {
  return (
    <section className={style.shop}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                <div className={style.shop_buttons}>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                    <ProdBtn/>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shop