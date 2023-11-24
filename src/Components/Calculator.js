import React, { useEffect, useState } from 'react';
import "../CSS/Calculator.css"
import priceData from './priceData';


export default function Calculator() {
  const [purpose, setPurpose] = useState('academic');
  const [edu, setEdu] = useState('highschool');
  const [pages, setPages] = useState(1);
  const [quantity, setQuantity] = useState(pages);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [price, setPrice] = useState(12);
  console.log("Quantity:",quantity)
  console.log("Pages:",pages)
  useEffect(() => {
    const priceFunction = () => {
      setPrice(pages * priceData[purpose][edu]);
    }

    priceFunction();
  }, [edu, purpose, pages])


  const handleQuantity = (e) => {
    if(e.target.value > 100) {
      setPages(100);
      setQuantity(100)
    }
    else if(e.target.value<1) {
      setPages(1);
      setQuantity(1);
    }
    else {
      setPages(e.target.value);
      setQuantity(e.target.value);
    }
  }


  const [pageFlag, setPageFlag] = useState(true);

  return (
    <div className='container'>
      <div className='box'>
        <div className='uppbtn'>
          <button id='1' onClick={() => setPurpose('academic')} autoFocus><p>Academic writing</p></button>
          <button id='2' onClick={() => setPurpose('editing')}><p>Editing and proofreading</p></button>
          <button id='3' onClick={() => setPurpose('calculations')}><p>Calculations</p></button>
        </div>
        <div className='lowbtn'>
          <button onClick={() => setEdu('highschool')}><p>High School</p></button>
          <button onClick={() => setEdu('undergraduate')}><p>Undergradute</p></button>
          <button onClick={() => setEdu('bachelor')}><p>Bachelor</p></button>
          <button onClick={() => setEdu('professoinal')}><p>Professional</p></button>
        </div>

        <div className='dropdown'>
        <label htmlFor="paper">Type of paper</label>
        <select name="paper" id="paper">
          <option value="Select" style={{display: 'none'}}>Select...</option>
          <option value="Research paper">Research paper</option>
          <option value="Research proposal">Research proposal</option>
          <option value="Speech">Speech</option>
          <option value="Thesis">Thesis</option>
          <option value="Thesis proposal">Thesis proposal</option>
          <option value="Thesis statement">Thesis statement</option>
        </select>
        </div>
        <div className='internalbox'>
          <div className='left'>
            <h3>Quantity</h3>
            <input type="number" id="quantity" name="quantity" value={pageFlag ? pages : 275*pages} onChange={handleQuantity} disabled={!pageFlag ? true : false} />
            <div className='btn'>
              <button onClick={() => setPageFlag(true)}>Pages</button>
              <button onClick={() => setPageFlag(false)}>Words</button>
            </div>
          </div>
          <div className='right'>
            <h3>Deadline</h3>
            <input type="date" id="quantity" name="quantity" min="1" max="100" value={date} onChange={(e) => setDate(e.target.value)}/>
          </div>
        </div>

        <div className='detail'>
          <div className='prize-detail'>
            <p>Approx. Price</p>
            <h2>{price}</h2>
          </div>
          <div className='proceed-btn'>
            <button>PROCEED TO ORDER</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
