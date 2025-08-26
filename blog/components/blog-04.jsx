"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Explore Our Latest Insights
            </h1>
            <p className="md:text-md">
              Discover valuable content to elevate your marketing strategy.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="mb-12 ml-[-5vw] flex no-scrollbar w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <a
              href="#"
              className="rounded-button inline-flex gap-3 items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary bg-background-primary border px-4 py-2 border-border-primary"
            >
              View all
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Marketing Tips
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Automation Insights
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Industry Trends
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Expert Advice
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <Card className="flex size-full flex-col items-center justify-start">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tips</Badge>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Maximize Your Marketing Potential Today
                  </h2>
                </a>
                <p>
                  Learn how to enhance your campaigns with proven strategies and
                  insights.
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </Card>
            <Card className="flex size-full flex-col items-center justify-start">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Insights</Badge>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    The Future of Digital Marketing
                  </h2>
                </a>
                <p>
                  Explore upcoming trends that will shape the marketing
                  landscape.
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </Card>
            <Card className="flex size-full flex-col items-center justify-start">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Trends</Badge>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Effective Automation Techniques
                  </h2>
                </a>
                <p>
                  Streamline your processes and boost productivity with
                  automation.
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </Card>
            <Card className="flex size-full flex-col items-center justify-start">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Techniques</Badge>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Building a Strong Brand Identity
                  </h2>
                </a>
                <p>
                  Learn how to create a memorable brand that resonates with your
                  audience.
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </Card>
            <Card className="flex size-full flex-col items-center justify-start">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Branding</Badge>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Harnessing Social Media for Growth
                  </h2>
                </a>
                <p>
                  Discover strategies to leverage social media for your business
                  success.
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </Card>
            <Card className="flex size-full flex-col items-center justify-start">
              <a href="#" className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Growth</Badge>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Email Marketing Best Practices
                  </h2>
                </a>
                <p>
                  Enhance your email campaigns with these effective strategies.
                </p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
