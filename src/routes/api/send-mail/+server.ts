import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
    const { name, email, message } = await request.json();

    if (!(name && email && message)) {
        return json({ message: "Email could not be sent" }, { status: 400 });
    }

    const msg = {
        to: "sittingpilgrim@gmail.com",
        from: "sittingpilgrim@outlook.com",
        subject: "New message from portfolio",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await sgMail.send(msg);
        return json({ emailSentSuccessfully: true });
    } catch (error) {
        console.error(error);
        return json({ message: "Email could not be sent" }, { status: 500 });
    }
}
