"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Unlock Your Online Potential with Our Expert SEO Services
          </h3>
          <p className="md:text-md">
            Our SEO services are designed to elevate your website's visibility
            and drive organic traffic. By leveraging targeted keywords,
            optimizing content, and enhancing user experience, we help you
            achieve higher search engine rankings. Experience measurable results
            and watch your business grow as we tailor our strategies to meet
            your unique goals.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
