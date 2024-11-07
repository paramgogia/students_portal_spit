import React from 'react';
import '../CSS/companies.css';

const Companies = () => {
  const partnerTypes = [
    {
      name: 'Type 1',
      partners: [
        { name: 'Partner 1', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 2', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 3', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 4', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 5', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 6', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 7', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 8', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
      ],
    },
    {
      name: 'Type 2',
      partners: [
        { name: 'Partner 9', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 10', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 11', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 12', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 13', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 14', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 15', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 16', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
      ],
    },
    {
      name: 'Type 3',
      partners: [
        { name: 'Partner 17', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 18', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 19', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 20', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 21', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 22', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 23', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
        { name: 'Partner 24', website: '#', image: { url: 'https://via.placeholder.com/200x100' } },
      ],
    },
  ];

  return (
    <div className="prtn">
      {partnerTypes.map((partnerType, idx) => (
        <div className="cntn" key={idx}>
          <div className="oupr">
            <h1>{partnerType.name}</h1>
            <section className="csl">
              <div className="inner-csl">
                {partnerType.partners.map((partner, index) => (
                  <div className="sld" key={index}>
                    <a href={partner.website}>
                      <img src={partner.image.url} alt={partner.name} />
                    </a>
                  </div>
                ))}
                {/* Duplicating slides */}
                {partnerType.partners.map((partner, index) => (
                  <div className="sld sld-duplicate" key={`duplicate-${index}`}>
                    <a href={partner.website}>
                      <img src={partner.image.url} alt={partner.name} />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
