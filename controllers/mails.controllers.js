const transporter = require("../config/nodemailer.config");

module.exports.home = (req, res, next) => {
	res.status(200).json("This is the api working");
};

module.exports.sendEmail = (req, res, next) => {
	const { name, email, subject, message } = req.body;

	const mailOptions = {
		from: `${name} <${email}>`,
		to: "angelluishernandezherrero@gmail.com",
		subject: subject,
		text: message,
		html: `<p>${message}</p>`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log(info);
		}
	});

	console.log(req.body);
};