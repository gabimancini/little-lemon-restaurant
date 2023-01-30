
import GreekImg from '../assets/img/greek.jpeg';
import ItaliankImg from '../assets/img/italian.jpeg';
import TurkishkImg from '../assets/img/turkish.jpeg';

const features = [
    {
        title: "Greek",
        description: "From moussaka to tzatziki side dishes to baklava dessert, traditional Greek food is one of the best cuisines in the world to eat.",
        src: GreekImg
    },
    {
        title: "Italian",
        description: "Italian food is one of the most well known cuisines on the planet, and for good reason too. It's comforting, delicious, and so satisfying.",
        src: ItaliankImg
    },
    {
        title: "Turkish",
        description: 'Turkish cuisine has a wide variety of foods, including cereals, pastries, vegetables, and self-growing herbs mixed with meat.',
        src: TurkishkImg
    }
]


const Specials = () => {
    return (  
<section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <span className="text-primary mb-2 block text-lg font-semibold">
            Our Services
          </span>
          <h2
            className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
            What We Offer
          </h2>
          <p className="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>
    <div className="-mx-4 flex flex-wrap">
    {features.map((feature, index) =>(
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className="bg-primary mb-8 flex   items-center justify-center rounded-2xl"
          >
          <img src = {feature.src} />
          </div>
          <h4 className="text-dark mb-3 text-xl font-semibold text-center">
            {feature.title}
          </h4>
          <p className="text-body-color">
           {feature.description}
          </p>
        </div>
      </div>
    ))}
    
    </div>
  </div>
</section> 
  
    );
};
export default Specials;