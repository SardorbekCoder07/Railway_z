import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-200 w-full py-12 mt-36">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">If you have any questions or inquiries, feel free to reach out to us:</p>
        <ul className="text-lg">
          <li>Email: example@example.com</li>
          <li>Phone: +1234567890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
