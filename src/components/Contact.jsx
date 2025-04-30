import React from "react";
import { CONTACT } from "../constants";
function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{CONTACT.address}</p>
        <p className="my-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
