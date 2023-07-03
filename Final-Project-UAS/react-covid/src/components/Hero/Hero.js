import StyledHero from "./Hero.styled.js";
function Hero() {
  return (
    <StyledHero>
      <div>
        <section>
          <div className="left">
            <h1>Covid ID</h1>
            <h2>Monitoring Perkembangan Covid</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              cum accusamus quisquam earum velit ea nobis maiores exercitationem
              nam temporibus.
            </p>
            <button>Vaccine</button>
          </div>
          <div className="right">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhy3BW-bvu7Vlc2lT0OFRAKERTVMfDzORVkwSyfELwOQGdHhn4"
              alt=""
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
