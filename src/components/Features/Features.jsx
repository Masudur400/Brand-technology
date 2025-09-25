import phone from '../../assets/images/phone-3-removebg-preview.png'
import laptop from '../../assets/images/laptop-5-removebg-preview.png'
import watch from '../../assets/images/smart-watch-removebg-preview.png'  
 
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Dummy Data
const features = [
  {
    title: "Smartphones",
    description: "Latest smartphones with cutting-edge technology and amazing cameras.",
    image: phone,
  },
  {
    title: "Laptops",
    description: "High-performance laptops suitable for gaming, work, and more.",
    image: laptop,
  },
  {
    title: "Smart Watches",
    description: "Stylish smart watches to track fitness and notifications.",
    image: watch,
  },
];

const products = [
  {
    title: "iPhone 15",
    price: "$999",
    image: phone,
  },
  {
    title: "MacBook Pro",
    price: "$1999",
    image: laptop,
  },
  {
    title: "Samsung Watch",
    price: "$299",
    image: watch,
  },
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing products and excellent service!",
  },
  {
    name: "Jane Smith",
    feedback: "High-quality devices, I love shopping here.",
  },
  {
    name: "Alice Brown",
    feedback: "Fast delivery and great customer support.",
  },
];

const faq = [
  {
    question: "Do you offer warranty on products?",
    answer: "Yes, all our products come with 1-year manufacturer warranty.",
  },
  {
    question: "What is the return policy?",
    answer: "You can return products within 15 days of delivery.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we ship within Bangladesh only.",
  },
];

const FeaturesPage = () => {
  return (
    <div className="w-full">
      {/* Hero / Banner */}
      <div
        className="contactBG rounded-xl relative w-full h-[600px] bg-cover bg-center "
        // style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
      >
        <div className='bg-black w-full h-full bg-opacity-40 flex flex-col justify-center items-center text-center rounded-xl'>
            <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-white drop-shadow-lg"
        >
          Discover Our Features
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl text-gray-100 mt-5 max-w-2xl"
        >
          Explore innovative devices that make your life smarter and easier.
        </motion.p>
        </div>
      </div>

      {/* Features Cards */}
      <div className="max-w-7xl mx-auto py-10 px-5 md:px-20 grid md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className=" border rounded-xl shadow-xl p-5 flex flex-col items-center text-center hover:shadow-2xl"
          >
            <img src={feature.image} alt={feature.title} className="w-36 h-36 object-contain mb-5" />
            <h2 className="text-xl font-semibold mb-3  ">{feature.title}</h2>
            <p className=" ">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Product Highlights */}
      <div className="  py-10 px-5 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="border  rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl"
            >
              <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-5" />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="  font-medium">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-10 px-5 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="border  rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl"
            >
              <p className="  mb-5">{t.feedback}</p>
              <h3 className="font-semibold  ">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center py-10">
        <Link to='/allPhoneWatchLaptop'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="border px-12 py-5 rounded-full text-xl font-semibold shadow-lg hover:bg-base-00 transition-colors"
        >
          Explore All Products
        </motion.button>
        </Link>
      </div>

      {/* FAQ Section */}
      <div className="bg-base-200 rounded-lg py-20 px-5 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((f, idx) => (
            <div key={idx} className="border  p-6 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{f.question}</h3>
              <p className=" ">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
