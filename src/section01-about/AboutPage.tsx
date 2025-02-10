import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import SectionHeader from "../section-features/SectionHeader";

export default function AboutPage(props: any) {
    return (
        <div id="about" className="flex flex-row justify-between items-center">
            <SectionHeader className="about" entryNumber={1} titleLabel={(props.width > 1200) ? "About" : ""} />
            <div className="about-description flex flex-col justify-start">
                <div className="about-description-heading flex flex-row whitespace-pre">
                    <div className="about-description-h1 allura text-64xl">Hey,</div>
                    <div className="flex flex-col justify-center">
                        <span className="about-description-h2">I'm <span className="about-description-h2-name">Kelvin</span></span>
                        <span className="about-description-h3"> NY-based Software Engineer</span>
                    </div>
                </div>

                <div className="about-description-paragraph">
                    My personal passions in the Software Engineering field are <span className="about-description-paragraph-ul">Game Development</span> and <span className="about-description-paragraph-ul">Web Development</span>.
                    Besides these two focuses, I have also dabbled in <span className="about-description-paragraph-ul">Natural Language Processing</span> over the course of my academic career.
                </div><br />

                <div className="about-description-paragraph">
                    Having double majored in both <span className="about-description-paragraph-ul">Computer Science</span> and <span className="about-description-paragraph-ul">Applied Mathematics and Statistics</span>,
                    I'm open to exploring various fields and always excited to learn new technologies and frameworks.
                </div><br />

                <div className="about-description-paragraph">
                    Currently seeking an entry-level position or internship.
                    Feel free to contact me or browse some of my past projects below!
                </div>
            </div>
            <div className="contact-details">
                <img src="https://github.com/klin2003.png" alt="GitHub Avatar" className="about-avatar" />
                <ContactDetails />
            </div>
        </div>
    );
}

function ContactDetails() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="contact-entry w-fit">
                <div className="flex flex-row items-center justify-center">
                    <BsEnvelopeFill className="contact-entry-icon" />
                    <span className="contact-entry-title"><b>Email</b></span>
                </div>
                <a className="contact-entry-text classic-anchor2" href="mailto:kelvinlin2003@gmail.com" target="_blank">kelvinlin2003@gmail.com</a>
            </div>

            <div className="pb-6"></div>

            <div className="contact-entry w-fit">
                <div className="flex flex-row items-center justify-center">
                    <BsLinkedin className="contact-entry-icon" />
                    <span className="contact-entry-title"><b>LinkedIn</b></span>
                </div>
                <a className="contact-entry-text classic-anchor2" href="https://www.linkedin.com/in/kelvin-lin-J2003/" target="_blank">in/kelvin-lin-J2003</a>
            </div>

            <div className="pb-6"></div>

            <div className="contact-entry w-fit">
                <div className="flex flex-row items-center justify-center">
                    <BsGithub className="contact-entry-icon" />
                    <span className="contact-entry-title"><b>GitHub</b></span>
                </div>
                <a className="contact-entry-text classic-anchor2" href="https://github.com/klin2003" target="_blank">gh/klin2003</a>
            </div>
        </div>
    );
}