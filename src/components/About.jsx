import { Skills } from "../constants";
import { section } from "../style";
// import { divider } from "../assets"
const About = () => (
  <section id="about" className="relative">
    <div>
      <h2 className={`${section.heading} ${section.MarginY}`}>About</h2>
      <div className="sm:w-[70%] m-auto">
        <p
          className={`${section.textSmall} ${section.textPaddingY} ${section.textLarge} text-center text-deep-gray`}
        >
          Hi, I am Paul Ehigie. A computer science graduate.
        </p>
        <p className={`${section.textPaddingY} ${section.text}`}>
          I am a passionate and dedicated Frontend Developer with over a year of
          experience. I specialize in designing interactive and optimized
          websites that make a positive impact on businesses. Working closely
          with product designers and developers, I bring ideas to life through
          seamless implementation. My strengths lie not only in technical
          proficiency but also in interpersonal skills and thriving in team
          environments. I am driven by problem-solving and constantly seek new
          challenges to fuel my growth and knowledge expansion. Let's
          collaborate and create captivating digital experiences together.
        </p>
      </div>
      <p
        className={`${section.textPaddingY} mt-8 text-center text-deep-blue font-poppins text-2xl sm:text-4xl font-bold dark:text-gray`}
      >
        Skills
      </p>
      <div
        className={`grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:w-[90%] md:w-[80%] m-auto`}
      >
        {Skills.map((skill) => (
          <div key={skill.id} className="flex items-center">
            <img src={skill.icon} alt={skill.text} className="w-24" />
            <p className={`${section.textLgDefault} ${section.textLarge}`}>
              {skill.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* <img src={divider} alt="" className='absolute -left-80'/> */}
  </section>
);

export default About;
