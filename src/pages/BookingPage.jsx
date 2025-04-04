import React from 'react';
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import NavBar from '../components/NavBar';
function BookingPage() {
  const [form, setForm] = useState({ name: "", email: "", carModel: "", image: null });
  const [preview, setPreview] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImage = e => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png") && file.size <= 2000000) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      alert("Invalid image file");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <TextField label="Name" name="name" onChange={handleChange} required />
      <TextField label="Email" name="email" type="email" onChange={handleChange} required />
      <TextField label="Car Model" name="carModel" onChange={handleChange} required />
      <input type="file" accept="image/*" onChange={handleImage} />
      {preview && <img src={preview} className="w-32 h-32 object-cover" />}
      <Button type="submit" variant="contained">Submit Booking</Button>
    </form>
  );

}

export default BookingPage;
