"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions about our blog posts and their
            content.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What topics do you cover?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We cover a wide range of topics related to marketing, automation,
              and digital strategies. Our aim is to provide valuable insights
              that help businesses grow. Each post is designed to be informative
              and actionable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How often do you post?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We publish new blog posts weekly to keep our audience updated with
              the latest trends. Our team works diligently to ensure fresh
              content is available regularly. Subscribe to our newsletter for
              updates!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I contribute?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We welcome guest contributions that align with our
              themes. If you have a unique perspective or expertise, please
              reach out to us. Collaboration is key to enriching our content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Where can I find resources?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Resources can be found in our dedicated section on the website. We
              offer eBooks, templates, and guides to assist you. Explore our
              resources to enhance your marketing efforts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              How can I contact you?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can reach us through our contact page. We’re here to answer
              any questions you may have. Don’t hesitate to get in touch!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
