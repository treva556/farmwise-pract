




import React, { useState, useEffect } from 'react';

const Sellerform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: ''
  });

  const [csrfToken, setCsrfToken] = useState(null);

  useEffect(() => {
    // Fetch the CSRF token when the component mounts
    fetchCSRFToken();
  }, []);

  const fetchCSRFToken = async () => {
    try {
      const response = await fetch('/rails/info/routes');
      if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
      }
      const token = response.headers.get('x-csrf-token');
      setCsrfToken(token);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': csrfToken // Include the CSRF token in the request headers
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      // Handle success, e.g., redirect to the user's profile/shop page
      console.log('Registration successful:', data);
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-green-200 rounded-md shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase decoration-wavy mb-6">
          Merchant Form
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="text-gray-700">Your name</label>
            <input
              type="text"
              name="name"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Cooks"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john.cooks@example.com"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">Contact</label>
            <input
              type="tel"
              name="phone"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0795115545"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">County</label>
            <input
              type="text"
              name="location"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="County Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Register Shop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sellerform;



