import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m8dffb3", //  Your Service ID
        "template_1nr2prs", //  Your Template ID
        form.current,
        "vjx_JGm5xgmpNlRfu" //  Your Public Key (fourth argument, NOT inside {})
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!");
          form.current.reset(); //  Reset the form after sending
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("failed to send message!");
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="#010618 text-black p-6 rounded shadow-md max-w-md mx-auto border border-white"
      >
        <div className="mb-4">
          <label className="block mb-1   text-white">Name</label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full border p-2 rounded border-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-white">Email</label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full border border-white p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-white">Message</label>
          <textarea
            name="message"
            required
            className="w-full border border-white p-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-800 text-white py-2 rounded hover:bg-[#010618] transition border border-white"
        >
          Send
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};
