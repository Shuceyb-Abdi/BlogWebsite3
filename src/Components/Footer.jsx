import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Blog Website</h1>
          <p className="text-white max-w-xl mx-auto">
          Our blog website is built using React.js, a powerful JavaScript library for building user interfaces. We leverage the flexibility and efficiency of React to deliver a seamless and interactive experience for our readers. From dynamic content updates to a responsive design, our platform ensures that you get the best possible browsing experience whether you're on a desktop or mobile device. Join us as we continue to innovate and bring you the latest stories, tips, and adventures from around the world.
          
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="flex justify-between items-center text-sm text-white">
          <span>Copyright ©2024 <a href="#" className="text-white hover:underline">Blog Website</a></span>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}