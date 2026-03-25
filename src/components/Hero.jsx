import heroImg from "../assets/hero.svg";

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Godard fixie narwhal bitters cronut squid. Cold-pressed sus
            blackbird spyplane 8-bit vexillologist hammock chicharrones banh mi.
            PBR&B vegan adaptogen raw denim, kitsch hammock green juice copper
            mug.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
