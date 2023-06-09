import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="When something feels off, it is." />
      <h1 className="app__header-h1">Fine Design With Fine Work</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Our company "SWASTIK ENTERPRISES" specializes in interior work and maintenance services. We pride ourselves on providing high-quality workmanship and exceptional customer service. Our team of skilled professionals is dedicated to ensuring that every project is completed to the highest standards. Whether you need help with a small repair or a complete renovation, we have the expertise and experience to get the job done right.</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
