import React from "react";
import {makeStyles} from "@material-ui/core";

import Colors from "../../../styles/Colors";

const styles = makeStyles((theme) => ({
	outerSurface: {
		width: "100%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	heading: {
		width: "100%",

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		fontSize: "20px",
		fontWeight: "400",

		color: Colors.themeFontColor,
	},

	head2: {
		width: "100%",
		marginBottom: 20,

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		fontSize: "50px",
		fontWeight: "600",

		color: Colors.nameColor,
	},

	kotha: {
		marginBottom: 50,
		lineHeight: 1.3,

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		fontSize: 18,
		textAlign: "center",
		fontWeight: 300,

		color: Colors.motoColor,

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("md")]: {
			width: "75%",
		},
	},

	mailMe: {
		width: "150px",
		height: "60px",
		marginBottom: 70,

		border: "solid 1px #64FFDA",
		color: "#64FFDA",
		fontSize: "18px",
		cursor: "pointer",

		"&:hover": {
			backgroundColor: "#293d5a",
		},
	},

	mailLink: {
		width: "100%",
		height: "100%",
		textDecoration: "none",
		userSeclect: "none",
		color: "#64FFDA",

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},
}));

const Contact = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.heading}>05. What's Next?</div>
			<div className={classes.head2}>Get In Touch</div>
			<div className={classes.kotha}>
				I am looking for internships opportunities in Software-Dev domain. If you think I am the good match
			 	for your company then drop a mail. :)
				<br />
				My Inbox is always opened. You can communicate with me through email or linkedIn if you
				want. I'll try my best to answer back.
			</div>
			<div className={classes.mailMe}>
				<a className={classes.mailLink} href="mailto:arpitgupta1014@gmail.com">
					Say Hello
				</a>
			</div>


			<section class="w3l-simple-contact-form1">
    <div class="contact-form section-gap">
      <div class="wrapper">
        <div class="text-center">
        <h1 style="font-size: 40px; " >Contact Us</h1>
      </div>
        <div class="contact-form" style="max-width: 450px; margin: 0 auto;">
          <div class="form-mid">
            <form action="javascript:sendmail()" method="post">
              <div class="field">
                <input type="text" class="form-control" name="Name" id="Name" placeholder="Name" required="">
              </div>
              <div class="field">
                <input type="email" class="form-control" name="Sender" id="Sender" placeholder="Email"
                  required="">
              </div>
              <div class="field">
                <input type="text" class="form-control" name="Subject" id="Subject" placeholder="Subject"
                  required="">
              </div>
              <textarea name="Message" class="form-control" id="Message" placeholder="Message"
                required=""></textarea>
              <button type="submit" class="btn btn-contact">Send Message</button>
              <!-- <input type="button" class="btn btn-contact" onclick="sendmail();"  value="Send Message"> -->

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /contact1 -->
  
 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> 
<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script src="https://smtpjs.com/v3/smtp.js"></script>
 
<script>  

     function sendmail(){
    
			var name = $('#Name').val();
			var email = $('#Sender').val();
			var subject = $('#Subject').val();
      var message = $('#Message').val();

			// var body = $('#body').val();

			var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
			//console.log(name, phone, email, message);

			Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				To: 'informativeapproach@gmail.com',
				From: "arpitgupta1014@gmail.com",
				Subject: "New message on contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);



		}


    </script>
 </script>


		</div>
	);
};

export default Contact;
