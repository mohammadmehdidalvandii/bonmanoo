import React from 'react';
import style from './ProdButtons.module.css';
import ProdBtn from '../ProdBtn/ProdBtn';

function ProdButtons() {
  return (
    <section className={style.prodButtons}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.prodButtons_wrapper}>
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

export default ProdButtons