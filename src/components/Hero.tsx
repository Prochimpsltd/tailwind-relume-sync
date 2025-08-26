import { Button } from "@relume_io/relume-ui";

const Hero = () => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Build Better
              <span className="text-text-alternative"> Faster</span>
            </h1>
            <p className="md:text-md">
              Create stunning websites and applications with our modern design system. 
              Trusted by thousands of developers worldwide to build exceptional digital experiences.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button>Get Started</Button>
              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              className="w-full object-cover"
              alt="Modern workspace with laptop and design tools"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;