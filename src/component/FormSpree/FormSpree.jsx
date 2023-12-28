// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import '@/styles/style.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xwkdjqer');
  if (state.succeeded) {
    return <p>Email Envoyé !</p>;
  }
  return (
    <div
      className="bg-slate-200 flex flex-col w-full min-h-[500px] items-center justify-center "
      id="contact"
    >
      <h2 className="text-xl font-extrabold  md:text-2xl lg:text-3xl font-poppins">
        Me contacter
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" font-roboto w-4/5 bg-slate-200 flex flex-col p-4 space-y-4"
      >
        <label
          htmlFor="email"
          className="text-lg font-normal text-black lg:text-xl font-roboto"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Votre e-mail"
          className="border-2 border-gray-300 p-2 rounded-lg"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label
          htmlFor="message"
          className="text-lg font-normal text-black lg:text-xl font-roboto"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message ou question"
          className="border-2 border-gray-300 p-2 rounded-lg"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="  text-white p-2 text-lg font-normal  lg:text-xl rounded-lg transition-transform hover:scale-105  bg-custom-gradient"
        >
          Enoyer
        </button>
      </form>
    </div>
  );
}
