import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok,} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-500 text-white p-4 text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>Welcome to our blog! We are a passionate team dedicated to sharing insightful and engaging content on a variety of topics.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>
              <a href="mailto:info@example.com" className="hover:underline">shuceybabdi361@gmail.com</a>
              <br />
              <a href="tel:+15551234567" className="hover:underline">+252612998800</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
           <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="https://facebook.com" className="hover:text-gray-200">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a href="https://tiktok.com" className="hover:text-gray-200">
            <FaTiktok size={24} />
          </a>
        </div>

          </div>
        </div>
        <div className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Blog Website
        </div>
      </div>
    </footer>
  );
}

export default Footer;