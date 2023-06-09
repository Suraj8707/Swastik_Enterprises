import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At our company, we are passionate about providing top-quality interior work and maintenance services. Our team of skilled professionals has years of experience in the industry and is dedicated to delivering exceptional results on every project. We believe that our customers deserve the best, and we go above and beyond to ensure their complete satisfaction. From small repairs to complete renovations, we have the expertise and experience to get the job done right. Contact us today to learn more about our services and how we can help you.”</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our company was founded in 2015 by "SUJEET VARMA" an experienced professional with over 20 years of experience in the interior work and maintenance industry. Since our inception, we have been committed to delivering high-quality work and exceptional customer service. Our dedication to our customers has helped us build a reputation as a reliable and trustworthy provider of interior work and maintenance services. We take great pride in the work we do and are always striving to exceed our customers’ expectations.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
