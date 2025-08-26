import { 
  RxLightningBolt, 
  RxRocket, 
  RxMagicWand, 
  RxGear,
  RxTarget,
  RxGlobe
} from "react-icons/rx";

const features = [
  {
    icon: <RxLightningBolt className="size-12" />,
    heading: "Lightning Fast",
    description: "Optimized for performance with modern build tools and best practices built in."
  },
  {
    icon: <RxRocket className="size-12" />,
    heading: "Production Ready",
    description: "Enterprise-grade components and patterns used by leading companies worldwide."
  },
  {
    icon: <RxMagicWand className="size-12" />,
    heading: "Design System",
    description: "Comprehensive design tokens and components for consistent user interfaces."
  },
  {
    icon: <RxGear className="size-12" />,
    heading: "Developer Experience",
    description: "Intuitive APIs and excellent TypeScript support for productive development."
  },
  {
    icon: <RxTarget className="size-12" />,
    heading: "Conversion Focused",
    description: "Components designed with user experience and conversion optimization in mind."
  },
  {
    icon: <RxGlobe className="size-12" />,
    heading: "Global Scale",
    description: "Built for international audiences with accessibility and localization support."
  }
];

const Features = () => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Why Choose Us
            </h2>
            <p className="md:text-md">
              Everything you need to build modern, scalable applications with confidence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-border-primary p-6 md:p-8">
              <div className="mb-5 md:mb-6">
                {feature.icon}
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
                {feature.heading}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;