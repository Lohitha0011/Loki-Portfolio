import React from "react";

const Footer = () => (
  <footer className="w-full bg-space-black border-t border-cosmic-silver border-opacity-20 py-4 text-center text-cosmic-silver text-sm fixed bottom-0 left-0 z-50">
    <span>
      &copy; {new Date().getFullYear()} Bonthu Lohitha. All rights reserved.
    </span>
  </footer>
);

export default Footer;
