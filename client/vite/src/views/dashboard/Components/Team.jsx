import React from 'react';
import '../CSS/teamup.css';
import Sikkasir from '../website_final_images/Vinod Sikka.png' // Import the corresponding CSS file
import ManishSir from '../website_final_images/mnp_sir.jpg'
import ogteam from '../website_final_images/theogteam.png';
const Team = () => {
  const teamMembers = [
    {
      name: 'Shri. Vinod Sikka',
      role: 'Head of Training & Placement Office',
      imgSrc: Sikkasir,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.',
    },
    {
      name: 'Prof. Manish Parmar',
      role: 'Internship Coordinator',
      imgSrc: ManishSir,
      description: 'Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.',
    },
    {
      name: 'Prof. Sparsh Vyas',
      role: 'Placement Officer',
      imgSrc: 'http://www.mauritiusdsilva.com/themes/hallooou/assets/images/terry-fletcher.jpg',
      description: 'Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.',
    }
  ];

  return (
    <section id="team" className="team-content-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="team-heading">Our Team</h2>
            <h3 className="team-caption gray">Members of the Training & Placement Office</h3>
          </div>
          <div>
            <div>
              <img style={{marginTop:'30px'}} src={ogteam} alt="" />
            </div>
                    <p style={{marginTop:'12px'}} className="team-member-role">Training & Placement Coordinators 2024 - 25</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
