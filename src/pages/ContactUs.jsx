import { useState } from "react";
import Section from "../components/Section";
import { SITE } from "../lib/config";

export default function ContactUs() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSend = () => {
        const subject = encodeURIComponent(`Message from Parent: ${form.name}`);
        const body = encodeURIComponent(
            `Parent Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );

        // 👇 Replace this email with your daycare email address
        const to = "deebaqadri@hotmail.com";

        // opens default mail app with prefilled fields
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    };

    return (
        <Section title="Contact Us" subtitle="We’d love to meet your family.">
            <div className="card">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSend();
                    }}
                    className="grid gap-4"
                >
                    <div className="grid gap-1">
                        <label className="text-sm font-medium text-brand-800">
                            Parent Name
                        </label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div className="grid gap-1">
                        <label className="text-sm font-medium text-brand-800">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="border rounded-lg px-3 py-2"
                            placeholder="you@email.com"
                            required
                        />
                    </div>

                    <div className="grid gap-1">
                        <label className="text-sm font-medium text-brand-800">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="border rounded-lg px-3 py-2"
                            rows={4}
                            placeholder="Tell us about your kiddo :)"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700"
                    >
                        Send
                    </button>

                    <p className="text-sm text-brand-700/80 mt-2">
                        Or reach us at {SITE.contact.phone}
                    </p>
                </form>
            </div>
        </Section>
    );
}
