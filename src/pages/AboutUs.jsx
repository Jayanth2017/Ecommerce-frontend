import coursel from "../images/About.webp";

const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mt-3">
      <img src={coursel} alt="Online Shopping Banner" className="img-fluid mb-3" />
      <>
       Welcome to <i>DudeFit</i>, your one-stop destination for quality products, unbeatable prices, and a seamless shopping experience. Founded with a passion for innovation and customer satisfaction, we aim to make online shopping easy, enjoyable, and trustworthy for everyone.

        <br />
        <br />

        At <i>DudeFit</i>, we curate a wide range of premium products across [insert categories, e.g., fashion, electronics, home decor, and more], carefully selected to meet your lifestyle needs. Whether you're upgrading your wardrobe, tech gear, or your living space — we’ve got you covered.

        </>
    </div>
  );
};

export default AboutUs;
