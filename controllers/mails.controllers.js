const transporter = require("../config/nodemailer.config");
const MAIL_USER = process.env.MAIL_USER;

module.exports.home = (req, res, next) => {
	res.status(200).json("This is the api working");
};

module.exports.sendEmail = (req, res, next) => {
	const { name, email, subject, message } = req.body;
	console.log(req.body);

	const mailOptions = {
		from: MAIL_USER,
		to: MAIL_USER,
		subject: subject,
		text: message,
		html: `
		<h3>email: ${email}</h3>
		<h3>name: ${name}</h3>
		<h3>subject: ${subject}</h3>

		<p>${message}</p>`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log(info, "Your email has been sent");
			res.status(202).send("Your email has been sent");
		}
	});

	console.log(req.body);
};
