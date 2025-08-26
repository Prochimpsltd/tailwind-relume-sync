const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Documentation", href: "#" },
      { title: "API Reference", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Help Center", href: "#" },
      { title: "Status", href: "#" },
      { title: "Terms", href: "#" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 md:gap-x-8 md:gap-y-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="mb-3 font-semibold md:mb-4">{section.title}</h3>
                <ul className="space-y-3 md:space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="underline-offset-1">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="mb-3 font-semibold md:mb-4">Subscribe</h3>
            <p className="mb-3 md:mb-4">
              Get the latest updates and news delivered to your inbox.
            </p>
            <div className="mb-3 flex w-full max-w-sm gap-x-4 md:mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-border-primary px-3 py-2"
              />
              <button className="bg-text-primary px-4 py-2 text-text-alternative">
                Subscribe
              </button>
            </div>
            <div className="text-xs">
              By subscribing you agree to our Privacy Policy.
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-border-primary"></div>
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p>© 2024 Relume. All rights reserved.</p>
          <div className="mb-4 flex gap-x-6 md:mb-0">
            <a href="#" className="underline-offset-1">
              Privacy Policy
            </a>
            <a href="#" className="underline-offset-1">
              Terms of Service
            </a>
            <a href="#" className="underline-offset-1">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;