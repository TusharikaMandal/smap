import React,{useState} from 'react'
import './Form.css'; 

function Event() {
    const current = new Date();
    const [formData, setFormData] = useState({
        name: '',
        location:'',
        description:'',
        sdate:current.toISOString().slice(0, 10),
        stime:current.toTimeString().slice(0, 8),
        edate:current.toISOString().slice(0, 10),
        etime:current.toTimeString().slice(0, 8),
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}\nlocation: ${formData.location}\nDescription:${formData.description}\nStarting Date:${formData.sdate}\nStarting time:${formData.stime}
        \nEnd Date:${formData.edate}\nEnd Time:${formData.etime}`);
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Event Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className='text'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name"> Location</label>
          <input
            type="text"
            id="name"
            name="location"
            className='text'
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="text">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            className='text'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label htmlFor="date">Starting Date</label>
          <input
            type="date"
            id="date"
            name="sdate"
            className='text'
            value={formData.sdate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label htmlFor="time">Starting time</label>
          <input
            type="time"
            id="time"
            name="start-time"
            className='text'
            value={formData.stime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label htmlFor="end-date">Ending Date</label>
          <input
            type="date"
            id="date"
            name="end-date"
            className='text'
            value={formData.edate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label htmlFor="end-time">Ending Time</label>
          <input
            type="time"
            id="time"
            name="end-time"
            className='text'
            value={formData.etime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Event
