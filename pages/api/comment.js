require('dotenv').config();

const nodemailer = require('nodemailer');

export default async function mailer (req, res) {
	const { 
        name,
        phoneNumber,
        more
    } = req.body;

	const transporter = nodemailer.createTransport({
		host: 'smtp.mail.ru',
        secure: true,
        port: 465,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
        tls: {
            rejectUnauthorized: false,
        }
	});

	const mailData = {
		from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: `Отзыв от ${name}. Номер телефона ${phoneNumber}`,
            text: more
	};

	await new Promise((resolve, reject) => {
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});
	return res.status(200).json({ error: '' })
}
