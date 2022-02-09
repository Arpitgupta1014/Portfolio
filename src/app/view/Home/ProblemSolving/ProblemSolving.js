import React from "react";
// import {Grid} from "@material-ui/core";

// import data from "./data";
import TitleHead from "../../../components/TitleHead/TitleHead";
// import OjBox from "../../../components/ProblemSolving/OjBox";
import styles from "./ProblemSolvingStyles";

const ProblemSolving = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="04." caption="Problem Solving" />
			</div>

			<div className={classes.content}>
				<div>
					I am currently doing competitive programming in C++ in various platforms. Mostly I participated in 
					contests at{" "}
					<a className={classes.link} href="https://codeforces.com/" target="blank">
						Codeforces
					</a>{" "}
					and{" "}
					<a className={classes.link} href="https://codechef.com/" target="blank">
						CodeChef
					</a>
					.Also I am doing web developement continuously.<br />
					{/* <br />I have participated in <span className={classes.stats}>88</span> contests and solved */}
					<br />I have solved
					upto <span className={classes.stats}>200</span> problems in various platforms, with a max rating of{" "}
					<span className={classes.stats}>1876</span> at CodeChef. In codeforces I have participated
					in <span className={classes.stats}>8</span> contests with the max rating of{" "}
					<span className={classes.stats}>958</span>.Also I have {" "}
					<span className={classes.stats}>1516</span>rating at hackerearth.
					<br />
					{/* <br />I have also participated in{" "}
					<a className={classes.link} href="./hashcode_2019_certificate.pdf" target="blank">
						Google HashCode 2019
					</a>
					<br />
					<br />I used to practice at LightOj, HackerRank and Uva too. Currently I'm concentrating
					on leetcode for my interview preparation. */}
				</div>

				{/* <div className={classes.head}>My Codes</div>
				<Grid
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justify="center"
					alignContent="flex-start"
					alignItems="flex-start">
					{data.data.map((obj, idx) => (
						<Grid item xl={4} lg={4} md={6} sm={6} xs={12} key={idx}>
							<OjBox data={obj} />
						</Grid>
					))}
				</Grid> */}
			</div>
		</div>
	);
};

export default ProblemSolving;
