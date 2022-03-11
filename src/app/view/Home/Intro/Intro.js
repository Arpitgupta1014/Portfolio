import React from "react";

import Colors from "../../../styles/Colors";
import styles from "./IntroStyles";

const Intro = () => {
	const classes = styles();
	return (
		<div className={classes.intro}>
			<div
				style={{color: Colors.themeFontColor}}
				className={classes.hi}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1100"
				data-aos-easing="ease-in-out">
				Hi, my name is
			</div>

			<div
				style={{color: Colors.nameColor}}
				className={classes.name}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1200"
				data-aos-easing="ease-in-out">
				Arpit Gupta
			</div>

			<div
				style={{color: Colors.motoColor}}
				className={classes.moto}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1300"
				data-aos-easing="ease-in-out">
			     I'm
				<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
				
	<script>
		var typing=new Typed(".text", {
			strings: [ "Web Designer", "Freelancer", "Graphics Designer", "Web Developer"],
			typeSpeed: 100,
			backSpeed: 40,
			loop: true,
		});
	 </script>
	 Syntaxing Success :)
	 </div>

			<div
				style={{color: Colors.shortDescriptionColor}}
				className={classes.shortDescription}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1400"
				data-aos-easing="ease-in-out">
				I am an undergraduate student pursuing B.Tech. in Electrical Engineering from NIT Allahabad.
			</div>

			<div
				className={classes.mailMe}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1500"
				data-aos-easing="ease-in-out">
				<a className={classes.mailLink} href="mailto:arpitgupta1014@gmail.com">
					Get in Touch
				</a>
			</div>
		</div>
	);
};

export default Intro;
