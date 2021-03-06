import React from "react";
import {makeStyles} from "@material-ui/core";

import Colors from "../../styles/Colors";
import Social from "../SocialLinks/socialMobile";

const styles = makeStyles((theme) => ({
	outerSurface: {
		width: "100%",
		height: "20vh",
		padding: "0px 5% 0px 5%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		backgroundColor: Colors.mediumDarkNavy,
	},

	social: {
		width: "100%",
		marginBottom: 15,

		[theme.breakpoints.down("md")]: {
			display: "flex",
		},

		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},

	ack: {
		width: "100%",
		color: Colors.motoColor,

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		textAlign: "center",
		fontSize: "16px",
	},

	link: {
		textDecoration: "none",
		color: Colors.motoColor,

		"&:hover": {
			color: Colors.themeFontColor,
		},
	},
}));

const Footer = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.social}>
				<Social />
			</div>
			<div className={classes.ack}>
				<a className={classes.link} href="https://github.com/arpitgupta1014" target="blank">
					By arpitgupta1014
				</a>
			</div>
		</div>
	);
};

export default Footer;
