import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#28a745]  p-8 mt-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Blog Website</h2>
          <p className="mb-4">
            Welcome to our Blog Website! Dive into a universe of captivating content, insightful articles, and expert tips that keep you informed and inspired.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-wrap space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/categories" className="hover:underline">Categories</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.073C22 5.421 17.074.5 10.5.5S-.002 5.421-.002 12.073c0 5.956 4.34 10.872 10.02 11.712v-8.29H7.15v-3.42h2.868v-2.083c0-2.843 1.703-4.418 4.312-4.418 1.251 0 2.557.225 2.557.225v2.814h-1.44c-1.419 0-1.86.88-1.86 1.78v2.091h3.158l-.505 3.42H13.587v8.29C19.267 22.945 22 18.029 22 12.073z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482 13.95 13.95 0 01-10.141-5.14 4.822 4.822 0 00-.665 2.475 4.92 4.92 0 002.188 4.1 4.897 4.897 0 01-2.228-.616v.061a4.932 4.932 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.937 4.937 0 004.604 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.416 0-.22-.004-.439-.014-.657A10.243 10.243 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.89v-5.569c0-1.327-.026-3.034-1.849-3.034-1.85 0-2.134 1.446-2.134 2.937v5.666H9.349V9.749h3.416v1.453h.048c.476-.9 1.636-1.848 3.366-1.848 3.598 0 4.26 2.368 4.26 5.448v6.65zM5.337 8.294c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm1.775 12.158H3.562V9.749h3.55v10.703zM22.225 0H1.771C.792 0 0 .775 0 1.728v20.542C0 23.225.792 24 1.771 24h20.451C23.208 24 24 23.225 24 22.27V1.728C24 .775 23.208 0 22.225 0z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.24 2.428.418a4.92 4.92 0 011.76 1.143 4.92 4.92 0 011.143 1.76c.178.458.361 1.258.418 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.24 1.97-.418 2.428a4.92 4.92 0 01-1.143 1.76 4.92 4.92 0 01-1.76 1.143c-.458.178-1.258.361-2.428.418-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.24-2.428-.418a4.92 4.92 0 01-1.76-1.143 4.92 4.92 0 01-1.143-1.76c-.178-.458-.361-1.258-.418-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057-1.17.24-1.97.418-2.428a4.92 4.92 0 011.143-1.76 4.92 4.92 0 011.76-1.143c.458-.178 1.258-.361 2.428-.418 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.34.014 7.052.072 5.765.13 4.665.315 3.79.675a6.92 6.92 0 00-2.525 1.616A6.92 6.92 0 00.675 4.816c-.36.875-.545 1.975-.603 3.262C.014 8.34 0 8.756 0 12s.014 3.66.072 4.948c.058 1.287.243 2.387.603 3.262a6.92 6.92 0 001.616 2.525 6.92 6.92 0 002.525 1.616c.875.36 1.975.545 3.262.603C8.34 23.986 8.756 24 12 24s3.66-.014 4.948-.072c1.287-.058 2.387-.243 3.262-.603a6.92 6.92 0 002.525-1.616 6.92 6.92 0 001.616-2.525c.36-.875.545-1.975.603-3.262.058-1.287.072-1.703.072-4.948s-.014-3.66-.072-4.948c-.058-1.287-.243-2.387-.603-3.262a6.92 6.92 0 00-1.616-2.525 6.92 6.92 0 00-2.525-1.616c-.875-.36-1.975-.545-3.262-.603C15.66.014 15.244 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        &copy; {new Date().getFullYear()} Blog Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;