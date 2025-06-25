import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

const ForKey = () => {
const [userData, setUserData] = useState([{name:"shah"}]);

useEffect(() => {
 axios.get('https://raoapi.vercel.app/api/school/users/').then((res) => setUserData(res.data))
}, [])

  const [formData, setFormData] = useState({
    admission_no: "",
    roll_number: "",
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    phone: "",
    address: "",
    admission_date: "",
    academic_year: "",
    status: "",
    user: "",
    parent: "",
    class_fk: "",
    section: ""
  });

  console.log(formData)

  useEffect(() => {
    axios.get('https://raoapi.vercel.app/api/school/students/')
      .then(res => console.log("Fetched Students:", res.data))
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    axios.post('https://raoapi.vercel.app/api/school/students/', formData)
      .then(res => {
        alert("Student added successfully!");
        console.log(res.data);
      })
      .catch(err => {
        alert("Submission failed.");
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="admission_no" placeholder="Admission No" required className="form-input" value={formData.admission_no} onChange={handleChange} />
      <input type="text" name="roll_number" placeholder="Roll Number" required className="form-input" value={formData.roll_number} onChange={handleChange} />
      <input type="text" name="first_name" placeholder="First Name" required className="form-input" value={formData.first_name} onChange={handleChange} />
      <input type="text" name="last_name" placeholder="Last Name" required className="form-input" value={formData.last_name} onChange={handleChange} />

      <select name="gender" required className="form-input" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>

      <input type="date" name="dob" required className="form-input" value={formData.dob} onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Phone Number" required className="form-input" value={formData.phone} onChange={handleChange} />
      <textarea name="address" placeholder="Address" required className="form-input" value={formData.address} onChange={handleChange}></textarea>
      <input type="date" name="admission_date" required className="form-input" value={formData.admission_date} onChange={handleChange} />
      <input type="text" name="academic_year" placeholder="Academic Year" required className="form-input" value={formData.academic_year} onChange={handleChange} />

      <select name="status" required className="form-input" value={formData.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactxjhgfdgkjive</option>
      </select>

      <select name="user" value={formData.user} onChange={handleChange}>
            <option value="">Select User</option>
            {userData.map((obj) => <option value={obj.id}>{obj.name}</option> ) }
      </select>

      <input type="text" name="user" placeholder="User ID" required className="form-input" value={formData.user} onChange={handleChange} />
      <input type="text" name="parent" placeholder="Parent ID" required className="form-input" value={formData.parent} onChange={handleChange} />
      <input type="text" name="class_fk" placeholder="Class ID" required className="form-input" value={formData.class_fk} onChange={handleChange} />
      <input type="text" name="section" placeholder="Section ID" required className="form-input" value={formData.section} onChange={handleChange} />

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default ForKey;
