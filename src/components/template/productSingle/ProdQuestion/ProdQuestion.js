import React from 'react';
import style from './ProdQuestion.module.css';
import ProductAccordion from '../ProductAccordion/ProductAccordion';


function ProdQuestion() {
  
  return (
    <section className={style.prodQuestion}>
        <div className="row">
            <div className="col-12">
                <h4 className={style.prodQuestion_title}>سوالات متداول</h4>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                <div className={style.prodQuestion_wrapper}>
                    <ProductAccordion/>
                    <ProductAccordion/>
                    <ProductAccordion/>
                    <ProductAccordion/>
                    <ProductAccordion/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProdQuestion