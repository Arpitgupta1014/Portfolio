import React from "react";

import TitleHead from "../../../components/TitleHead/TitleHead";
import DP from "../../../assets/Selfphoto.jpg";
import styles from "./AboutMeStyles";

const AboutMe = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="01." caption="About Me" />
			</div>

			<div className={classes.content}>
				<div className={classes.left}>
					Hi! I'm Sagar. I am sophomore student pursuing my B.Tech. from{" "}
					<a className={classes.link} href="http://www.mnnit.ac.in" target="blank">
						NIT Allahabad
					</a>{" "}
					in {" "}
					<a className={classes.link} href="http://www.mnnit.ac.in/index.php/department/engineering/ee" target="blank">
						Electrical engineering.
					</a>{" "}
					<br />
					<br />
					I enjoy coding in C & C++ . I also do web development using MERN Stack.
					<br />
					<br />
					Here are few technologies I have been working with,
					<br />
					<ul className={classes.techs}>
						<li className={classes.lst}>C++</li>
						<li className={classes.lst}>C</li>
						<li className={classes.lst}>GIT</li>
						<li className={classes.lst}>JavaScript</li>
						<li className={classes.lst}>CSS</li>
						<li className={classes.lst}>HTML</li>
						<li className={classes.lst}>Gatsby</li>
						{/* <li className={classes.lst}>MySQL</li> */}
					</ul>
				</div>
				<div className={classes.right}>
					<div className={classes.imageContainer}>
						<img className={classes.dp} src={DP} alt="" />
						<div className={classes.dpCover}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
