require('dotenv').config();

const nodemailer = require('nodemailer');

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '50mb',
		},
	},
  }

export default function mailer (req, res) {
	const { 
        email,
        km,
        phone,
        year,
        brand,
        files
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

	const attachments = files.map((file) => {
		return { path: file };
	});

	try {
		transporter.sendMail({
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: `Отчет по автомобилю от <${email}>`,
            text: `Здравствуйте! Присылаю отчет по автомобилю ${brand} с пробегом ${km} км, ${year} года. Мой номер телефона для связи - ${phone}.`,
			attachments: attachments
		})
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() })
	};

	return res.status(200).json({ error: '' })
}
