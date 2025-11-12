"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className=" text-white py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 ms-34">Get in touch</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              placeholder="Full Name"
              className="bg-dark-blue border-none placeholder-white text-white rounded-full p-6"
            />
            <Input
              type="email"
              placeholder="email@example.com"
              className="bg-dark-blue border-none placeholder-white text-white rounded-full  p-6"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              placeholder="Company Name"
              className="bg-dark-blue border-none placeholder-white/50 text-white rounded-full  p-6"
            />
            <Input
              placeholder="How can we help?"
              className="bg-dark-blue border-none placeholder-white/50 text-white rounded-full  p-6"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              className="bg-dark-blue border-none placeholder-white/50 text-white min-h-[140px] rounded-2xl mb-6"
            />
            <Button
              className="bg-blue cursor-pointer hover:bg-[#031FB4] text-white  px-6 py-6 rounded-full text-sm"
              type="submit"
            >
              Send Message
            </Button>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase mb-2">
            Want to reach us directly?
          </h4>
          <p className="text-white/70 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.
          </p>

          <ul className="space-y-4">
            {[
              "contact@example.com",
              "support@example.com",
              "press@example.com",
            ].map((email, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-white/80 text-sm"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                {email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
