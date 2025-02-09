import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    try {
        // Verify API key is available
        if (!SENDGRID_API_KEY) {
            console.error("SendGrid API key is not defined");
            return json(
                { error: "Email service not configured" },
                { status: 500 }
            );
        }
        sgMail.setApiKey(SENDGRID_API_KEY);

        const { name, email, message } = await request.json();

        if (!(name && email && message)) {
            return json(
                { message: "Email could not be sent" },
                { status: 400 }
            );
        }

        const msg = {
            to: "sittingpilgrim@gmail.com",
            from: "sittingpilgrim@outlook.com",
            subject: "New message from portfolio",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await sgMail.send(msg);
        return json({ success: true });
    } catch (error) {
        console.error("Server error: ", error);
        return json(
            {
                error: "Email could not be sent",
                details: error.message,
            },
            { status: 500 }
        );
    }
}
