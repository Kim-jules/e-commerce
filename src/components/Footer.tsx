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
  return (
    <footer className="bg-white mt-10 rounded-t-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Get to Know Us</h3>
            <ul className="space-y-2">
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Blog</li>
              <li className="hover:underline">Fashion</li>
              <li className="hover:underline">Designs Clothes</li>
              <li className="hover:underline">Good Pants</li>
              <li className="hover:underline">Made in Rwanda Clothes</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Drip With Us</h3>
            <ul className="space-y-2">
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Blog</li>
              <li className="hover:underline">Fashion</li>
              <li className="hover:underline">Designs Clothes</li>
              <li className="hover:underline">Good Pants</li>
              <li className="hover:underline">Made in Rwanda Clothes</li>
              <li className="hover:underline">This is Our Fresh Fashion</li>
              <li className="hover:underline">Good and Reliable Products</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Let Us Help You</h3>
            <ul className="space-y-2">
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Blog</li>
              <li className="hover:underline">Fashion</li>
              <li className="hover:underline">Designs Clothes</li>
              <li className="hover:underline">Good Pants</li>
              <li className="hover:underline">Made in Rwanda Clothes</li>
              <li className="hover:underline">We Are Here for You</li>
              <li className="hover:underline">We Pick Only the Best</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Payment Options</h3>
            <ul className="space-y-2">
              <li className="hover:underline">Business Card</li>
              <li className="hover:underline">Shop with Points</li>
              <li className="hover:underline">Reload Your Balance</li>
              <li className="hover:underline">Currency Converter</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-xs text-gray-700">
          <p>© {new Date().getFullYear()} Quino. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


