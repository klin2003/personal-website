import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import SectionHeader from "../section-features/SectionHeader";

export default function ContactPage(props: any) {
    return (
        <div id="contact" className="relative">
            <SectionHeader className="contact absolute top-1/2" entryNumber={4} titleLabel={(props.width > 1200) ? "Contact" : ''} />
            <div className="contact-div flex align-center">
                <div>
                    <div className="contact-entry w-fit">
                        <BsEnvelope className="contact-entry-icon"/>
                        <span className="contact-entry-text source-code-pro">Email: <a className="classic-anchor2" href="mailto:kelvinlin2003@gmail.com" target="_blank">kelvinlin2003@gmail.com</a></span>
                    </div>

                    <div className="pb-6"></div>

                    <div className="contact-entry w-fit">
                        <BsLinkedin className="contact-entry-icon"/>
                        <span className="contact-entry-text source-code-pro">LinkedIn: <a className="classic-anchor2" href="https://www.linkedin.com/in/kelvin-lin-J2003/" target="_blank">in/kelvin-lin-J2003/</a></span>
                    </div>

                    <div className="pb-6"></div>

                    <div className="contact-entry w-fit">
                        <BsGithub className="contact-entry-icon"/>
                        <span className="contact-entry-text source-code-pro">GitHub: <a className="classic-anchor2" href="https://github.com/klin2003" target="_blank">gh/klin2003</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}