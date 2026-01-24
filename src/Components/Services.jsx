import React, { useState } from "react";
import "./Service.css";
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import ser4 from "../assets/ser4.png";

const services = [
  {
    id: "civil",
    title: "Civil Telecom/OSP Services",
    desc: 
    (
    <>
      <p>
        Orbit specializes in Telecom OSP services and executes all telecom network construction 
        and maintenance projects including all associated civil works. Orbit has efficient 
        and highly specialized OSP team expertise and capabilities to enable effective 
        coordination with government agencies and municipality offices to get the approvals 
        to start the civil works.
      </p>
      <p>
        Our expertise includes Civil Works like trenching, excavating (both normal and hard rock), 
        cable laying, and the installation of manholes and ducts. Orbit ensures and meets the 
        total solution for all OSP Copper and Fibre network excavations, trenching, reinstatement, 
        splicing, and terminations. This includes design and implementation for OPTICAL FIBRE, 
        UTP, COAX, and all other types of Copper Cable for Primary and Secondary Networks, 
        including Electrical Cable Installation Projects.
      </p>
      <p>
        We are experienced in the construction of joint reinforced manholes and network relocation 
        in coordination with network administrators. We are also experts in trenchless methods 
        like Horizontal Directional Drilling (HDD). Our team follows and adheres to the latest 
        OSP market trends and QCS Standards.
      </p>
    </>
  ),
    image: ser1
  },
  {
    id: "elv",
    title: "ELV Systems",
    desc: 
    (
    <>
      <p>
        Our team is experienced and specialized in design, installation, commissioning 
        and maintenance of a wide range of Extra Low Voltage Solutions such as security 
        systems, IPTV and public address systems. We specialize in finding the right 
        solution to fit customer requirements and budget emphasizing in growth through 
        superior customer service, innovation, quality and commitment.
      </p>
      <p>
        We can provide turnkey ELV solution for Villas, Residential & Commercial Buildings, 
        Hospitals, Banks & Educational Institutions. Working collaboratively with our 
        customers and technology partners, we deliver innovative, reliable and cost-effective 
        system solutions that best support your needs and budget.
      </p>
      <p>
        Our ELV division is efficient at delivering turnkey solutions that are according to 
        client's specifications with services that encompass the design, supply, installation, 
        integration, commissioning and maintenance of low current systems. Our ELV 
        solutions are optimum and prioritized to ensure the client's commercial and 
        technical requirements. We are committed to provide specialized expertise, 
        best practices, safe operations and high-quality support.
      </p>
    </>
  ),
    
    image: ser2
  },
  {
    id: "fttx",
    title: "FTTx Services",
    desc: 
        (
    <>
      <p>
        We provide a full turnkey service offering network installation for Fibre networks. 
        Our FTTx Team has the diverse and extensive experience which enables us to recommend 
        and plan a next-generation Fibre network that will be a flexible, reliable and 
        long-lasting infrastructure. We can provide consultation in all areas of Fibre 
        network design. We have designed and deployed several innovative solutions over 
        the last 20 years.
      </p>
      <p>
        On the design end, we work with a wide variety of powerful software tools to maximize 
        efficiency and accuracy in the design process. Our extensive build experience has 
        resulted in a wealth of specialist learnings which have enabled us to realize 
        innovative deployment strategies with bespoke components designed and supplied.
      </p>
      <p>
        Orbit Works as an approved contractor with Ooredoo for the deployment of FTTx Services 
        in Qatar. Our services include duct rodding for FTTx Cabling, FTTx FO cabling in Duct, 
        recovering FTTx FO Cable, cabling on wall or tray, setting and testing of Fibre, 
        setting and closing of FO joints, splicing and testing of Fibre, installing ODF racks, 
        Fibre access terminals, rack mounted splitters, patching, installing FO Aerial Cable.
      </p>
    </>
  ),
    
    image: ser3
  },
  {
    id: "it",
    title: "IT Networking",
    desc: 
        (
    <>
      <p>
        We excel at offering the highest quality IT networking Active and Passive Solutions. 
        We partner with the world's leading manufacturers of cable and accessories/Active 
        components. We retain a highly skilled and certified team of Engineers and Installers. 
        We are experienced in Structured cabling, Fibre Optic, intelligent cabling, 
        Specialized data center solutions, Networking solutions such as switching, 
        routing, Access Points, Data network security solutions.
      </p>
      <p>
        We consult with our clients to understand each IT Solution and facilitate a smooth 
        transition that will optimize cost. These services can span the entire lifespan of 
        the technology, from assessment, strategy and design, to implementation and 
        operational services.
      </p>
      <p>
        We offer recommendations on best practices in the industry which helps you to manage 
        network with improved network reliability, scalability, security to ensure that 
        network infrastructure supports your business goals and IT objectives.
      </p>
    </>
  ),
    
    image: ser4
  }
];

const Service = () => {
  const [activeRow, setActiveRow] = useState(null);

  return (
    <div className="service-page">
      {/* Navbar Spacer */}
      <section id="all">
      <div className="nav-space"></div>

      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Our Services</h1>
          <p>
            Delivering reliable, scalable, and future-ready telecom and IT
            solutions through operational excellence.
          </p>
        </div>
      </section>
    </section>
      {/* Services Grid */}
      <section className="service-grid" id="all">
        {services.map((item, index) => (
          <div
            key={item.id}
            id={item.id} // <-- matches navbar scroll link
            className={`service-row ${activeRow === index ? "active" : ""}`}
            onClick={() =>
              setActiveRow(activeRow === index ? null : index)
            }
          >
            {index % 2 === 0 ? (
              <>
                <div className="service-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="service-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </>
            ) : (
              <>
                <div className="service-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className="service-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <section className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>“Amazing service and very professional team.”</p>
            <span>— Ahmed</span>
          </div>
          <div className="testimonial">
            <p>“They understood our vision perfectly.”</p>
            <span>— Sarah</span>
          </div>
          <div className="testimonial">
            <p>“Fast delivery and great communication.”</p>
            <span>— John</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Connect with our team to design solutions aligned with your strategic
          objectives.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Service;
