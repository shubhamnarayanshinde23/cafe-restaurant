"use client";

import ContactCard from "./ContactCard";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0D0D0D] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-[#8B5E3C] px-4 py-2 text-sm text-[#D4A373]">
            CONTACT
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Visit Brew Haven
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We'd love to welcome you for a handcrafted coffee
            and an unforgettable café experience.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <ContactCard
            icon={<MapPin />}
            title="Address"
            value="123 Coffee Street, Pune, Maharashtra"
          />

          <ContactCard
            icon={<Phone />}
            title="Phone"
            value="+91 98765 43210"
          />

          <ContactCard
            icon={<Mail />}
            title="Email"
            value="hello@brewhaven.com"
          />

          <ContactCard
            icon={<Clock />}
            title="Opening Hours"
            value="Mon – Sun • 8:00 AM – 10:00 PM"
          />

        </div>

        <div className="mt-20 overflow-hidden rounded-[32px] border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Pune&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </div>

      </div>
    </section>
  );
}