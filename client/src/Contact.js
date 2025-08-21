import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "your_service_id",   // 🔹 replace with EmailJS service ID
                "your_template_id",  // 🔹 replace with EmailJS template ID
                e.target,
                "your_public_key"    // 🔹 replace with EmailJS public key
            )
            .then(
                (result) => {
                    alert("Message Sent Successfully!");
                },
                (error) => {
                    alert("Failed to send. Please try again later.");
                }
            );
    };

    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
