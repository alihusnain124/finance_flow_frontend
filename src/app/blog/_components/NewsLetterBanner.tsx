import { FiMail } from "react-icons/fi";

export default function NewsletterBanner() {
  return (
    <section className="bg-blue py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 h-[150px]">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-5 rounded-xl flex items-center justify-center text-white text-lg">
            <FiMail />
          </div>
          <p className="text-white font-bold w-[50%] text-lg sm:text-xl md:text-4xl leading-snug">
            Subscribe to our crypto news weekly newsletter!
          </p>
        </div>

        <form className="flex bg-white p-1 rounded-full overflow-hidden w-full md:w-auto max-w-md">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-4 py-3 text-sm text-black grow outline-none w-[40%]"
          />
          <button
            type="submit"
            className="bg-blue cursor-pointer hover:bg-[#031FB4]  rounded-4xl text-white px-5 text-sm font-semibold tracking-widest"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
