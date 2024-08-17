import React,{useState} from 'react'

function Autoreply() {
    const [val, setVal] = useState(false);
    return (
      <form>
        <label htmlFor="name"> Targeted Keywords: </label>
        <input type={'text'} className='text'/>
        <label htmlFor="name"> Avoid The Keywords: </label>
        <input type={'text'} className='text'/>
        <label>Messaages</label>
        <input type={'text'} className='text'/>
        <label htmlFor="name"> Total request in a day: </label>
        <select>
          <option>10-20</option>
          <option>20-30</option>
          <option>30-40</option>
          <option>40-60</option>
        </select>
        <h4>Filter</h4>
        <label htmlFor="name"> Age group : </label>
        <select>
          <option>All</option>
          <option>20 below</option>
          <option>20-60</option>
          <option>60 above</option>
        </select>
        <label htmlFor="name"> Location: </label>
        <input type={'text'} className='text'/>
        <div>
          <h5>Gender</h5>
          <label>
            <input type={'radio'} name={'gender'} value={'male'} chacked={val==='male'} onChange={(e)=>setVal(e.target.value)}/>
            Male
          </label>
          <label>
            <input type={'radio'} name={'gender'} value={'female'} chacked={val==='female'} onChange={(e)=>setVal(e.target.value)}/>
            female
          </label>
        </div>
        <label className='chk'> <input type={'checkbox'} className='chk'/>Skip Blacklist</label>
        <button>Submit</button>
      </form>
    )
}

export default Autoreply
