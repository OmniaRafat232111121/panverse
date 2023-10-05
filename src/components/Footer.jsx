// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Panaverse</p>
      </div>
    </footer>
  );
};

export default Footer;
