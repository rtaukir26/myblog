import React, { useEffect, useState } from "react";
import pHnMIcon from "../../assets/images/pHM.avif";
import pSonyIcon from "../../assets/images/pSony-Ericsson.png";
import pStartIcon from "../../assets/images/pstarbugs.jpg";
import aboutImg2 from "../../assets/images/aboutGif2.gif";
import creativityImg from "../../assets/images/creativity-concept.avif";
import innovativeImg from "../../assets/images/innovative.avif";
import internshipImg from "../../assets/images/internship.avif";
import { useFormik } from "formik";
import { aboutSchema } from "../../utils/schema/aboutSchema";
import Card from "../../components/Card/Card";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BusinessPartner from "../../components/Card/BusinessPartner";
import AboutForm from "../../components/Form/AboutForm";

const initialValues = { name: "", email: "", feedback: "" };
const About = () => {
  const { values, errors, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: aboutSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  useEffect(() => {
    AOS.init({
      offset: 120,
      // delay: 0, // values from 0 to 3000, with step 50ms
      // duration: 400, // values from 0 to 3000, with step 50ms
      // easing: "ease", // default easing for AOS animations
      // once: false, // whether animation should happen only once - while scrolling down
      // mirror: false, // whether elements should animate out while scrolling past them
      // anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh(); // Reinitialize AOS if content is dynamic
  }, []);

  const [count, setCount] = useState(0);
  const [addc, setAdd] = useState(0);
  // const hadleIncreaseCount = useMemo(() => {
  //   console.log("object");
  //   return addc * 2;
  // }, [addc]);

  // const add = () => {
  //   setAdd(addc + 1);
  // };

  // const add = useCallback(() => {
  //   setAdd(addc + 1);
  // }, [addc]);

  return (
    <div className="main-body-container">
      <div className="body-wrapper">
        <div className="about-wrapper">
          {/* Hero con */}
          <div className="hero-con">
            <div className="about-left">
              <div className="content">
                <h4>
                  Welcome to ZN Word
                  {/* {count} {addc} multi:{hadleIncreaseCount} */}
                </h4>

                <p>
                  At ZN Word, we're passionate about empowering writers,
                  students, and professionals to express their ideas with
                  clarity and creativity. Our mission is to provide intuitive
                  and powerful tools that enhance the writing experience, making
                  it easier htmlFor users to bring their words to life.
                </p>
                <button onClick={() => setCount(count + 1)}>Read More</button>
                <button onClick={() => setAdd(addc + 10)}>Add</button>
              </div>
              <div className="content">
                <h4>Our Inspiration</h4>
                <p>
                  ZN Word was born out of a shared love htmlFor language and a
                  desire to simplify the writing process. We understand the
                  challenges writers face, from writer's block to cumbersome
                  tools, and we're committed to creating solutions that inspire
                  and enable creativity.
                </p>
                <button>Read More</button>
              </div>
            </div>

            {/* Right side - about image */}
            <div className="about-right">
              <img src={aboutImg2} alt="about" className="about-img" />
            </div>
          </div>

          {/* Offer con */}
          <div className="vision">
            <h4>What We Offer</h4>
            {/* card */}
            <div className="d-flex flex-wrap">
              <Card
                text="innovation. At Zn World, innovation isn't just a buzzword;it's the driving force behind everything we do. We're dedicated to pushing boundaries,
                challenging the status quo, and delivering groundbreaking solutions that
                redefine what's possible."
                img={innovativeImg}
              />
              <Card
                text="Creativity is the heartbeat of innovation, the spark that ignites imagination, 
                and the driving force behind progress. At [Your Website/Company Name], we celebrate the 
                power of creativity and strive to inspire others to unlock their full creative potential."
                img={creativityImg}
              />
              <Card
                text="At Zn World, we understand the importance of hands-on experience in shaping future leaders. That's why our internship program is designed to provide you with a dynamic learning environment where you'll have the chance to work on exciting projects, collaborate with industry experts, and gain valuable insights into the inner workings of our organization."
                img={internshipImg}
              />
            </div>
          </div>

          {/* Business partner con */}
          <div className="business-con">
            <h4>Our customers</h4>
            <BusinessPartner
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vero
              distinctio modi fugiat neque cumque repellendus recusandae reiciendis
              quidem assumenda asperiores debitis nesciunt maiores, delectus ab
              voluptate consectetur! Voluptatum, maxime!"
              img={pSonyIcon}
              p_aniStyle="fade-right"
              div_aniStyle="fade-up"
              duration="1000"
            />
            <BusinessPartner
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vero
              distinctio modi fugiat neque cumque repellendus recusandae reiciendis
              quidem assumenda asperiores debitis nesciunt maiores, delectus ab
              voluptate consectetur! Voluptatum, maxime!"
              img={pStartIcon}
              p_aniStyle="fade-right"
              div_aniStyle="fade-up"
              duration="1000"
            />
            <BusinessPartner
              text="Sint vero
              distinctio modi fugiat neque cumque repellendus recusandae reiciendis
              quidem assumenda asperiores debitis nesciunt maiores, delectus ab
              voluptate consectetur! Voluptatum, maxime!"
              img={pHnMIcon}
              p_aniStyle="fade-right"
              div_aniStyle="fade-up"
              duration="1000"
            />
          </div>

          {/* Form */}
          <div className="form-con">
            <h5>Please leave your comments</h5>
            <AboutForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              values={values}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
