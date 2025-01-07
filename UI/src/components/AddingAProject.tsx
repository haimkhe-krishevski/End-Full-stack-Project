import React, { useState } from 'react';
import "../styles/AddingAProject.css";

function AddProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !link || !image) {
      alert('אנא מלא את כל השדות');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('image', image);

    try {
      const response = await fetch("http://localhost:3000", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('הוספת פרויקט נכשלה');
      }

      const addedProject = await response.json();
      setSuccessMessage('הפרויקט נוסף בהצלחה!');
      setName('');
      setDescription('');
      setLink('');
      setImage(null);
      setImageUrl(null);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="add-project">
      <h2>הוסף פרויקט חדש</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">שם הפרויקט:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </div>

        <div className="form-field">
          <label htmlFor="description">תיאור:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required />
        </div>

        <div className="form-field">
          <label htmlFor="link">קישור:</label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required />
        </div>

        <div className="form-field">
          <label htmlFor="image">העלה תמונה:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required />
        </div>

        {imageUrl && <img src={imageUrl} alt="תמונה שהועלתה" width="100" />}
        <button type="submit">הוסף פרויקט</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default AddProject;
