// import React from "react";

// const Footer =()=>{
//     return(
//         <footer className="bg-white mt-6 rounded-3xl">
//             <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
//                    <div>
//                     <h3 className="font-semibold mb-2">Get to know us</h3>
//                     <ul className="space-y-3">
//                         <li>Careers</li>
//                         <li>Blog</li>
//                         <li>Fashion</li>
//                         <li>Designs clothes</li>
//                         <li>Good pants</li>
//                         <li>Made in rwanda clothes</li>

//                     </ul>
//                    </div>

//                    <div>
//                    <h3 className="font font-semibold mb-2">Drip with us</h3>
//                    <ul className="space-y-1">
//                         <li>Careers</li>
//                         <li>Blog</li>
//                         <li>Fashion</li>
//                         <li>Designs clothes</li>
//                         <li>Good pants</li>
//                         <li>Made in rwanda clothes</li>
//                         <li>this is our fresh fashion </li>
//                         <li>good and reliable products</li>

//                     </ul>
//                    </div>
//                 </div>
//                 <div>
//                 <h3 className="font font-semibold mb-2">Let us help you </h3>
//                    <ul className="space-y-1">
//                         <li>Careers</li>
//                         <li>Blog</li>
//                         <li>Fashion</li>
//                         <li>Designs clothes</li>
//                         <li>Good pants</li>
//                         <li>Made in rwanda clothes</li>
//                         <li>we are here for you</li>
//                         <li>we pick only the best</li>

//                     </ul>
//                 </div>
//                 <div>
//                 <h3 className="font-semibold mb-2">Amazon Payment Products</h3>
//             <ul className="space-y-1">
//               <li>Amazon Business Card</li>
//               <li>Shop with Points</li>
//               <li>Reload Your Balance</li>
//               <li>Amazon Currency Converter</li>
//             </ul>
//                 </div>

//             </div>

//         </footer>
//     )
// }

// export default Footer

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Shop",
      links: ["Home", "Men's Fashion", "Women's Fashion", "Accessories"],
    },
    {
      title: "Useful Links",
      links: ["Blog", "Cart", "Orders"],
    },
    {
      title: "Customer Service",
      links: ["Contact Us", "Help Center", "Return Policy", "Shipping Info"],
    },
    {
      title: "About Us",
      links: ["About Quino", "Careers", "Privacy Policy", "Terms & Conditions"],
    },
  ];

  return (
    <footer className="bg-white mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:underline hover:text-black transition-colors cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 gap-4">
          <p>© {currentYear} Quino. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:underline hover:text-black">
              Terms
            </a>
            <a href="#" className="hover:underline hover:text-black">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
