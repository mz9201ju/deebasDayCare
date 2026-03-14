import { useState } from "react";
import Section from "../components/Section";
import Seo from "../components/Seo";
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
        const to = "info@deebasdaycare.com";

        // opens default mail app with prefilled fields
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    };

    const phoneHref = `tel:${SITE.contact.phone.replace(/[^\d+]/g, "")}`;

    return (
        <>
            <Seo
                title="Contact"
                description="Contact Deeba's Daycare in Bellevue to schedule a visit or learn more about enrollment and programs."
                path="/contact"
            />
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
                        Or reach us at{" "}
                        <a
                            href={phoneHref}
                            className="font-semibold text-brand-700 underline decoration-brand-400 underline-offset-2 hover:text-brand-800"
                        >
                            {SITE.contact.phone}
                        </a>
                    </p>
                </form>
            </div>
            </Section>

            {/* Enrollment Forms Section */}
            <Section title="Enrollment Forms" subtitle="Download and complete the required forms to enroll your child.">
                <div className="card mt-8">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <a
                                href="/assets/CertificateImmunizationStatusForm%20348-013.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-700 underline hover:text-brand-800"
                            >
                                Certificate of Immunization Status (Form 348-013)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/assets/Child%20Care%20Agreement%2015-943.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-700 underline hover:text-brand-800"
                            >
                                Child Care Agreement (Form 15-943)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/assets/Child%20Care%20Parent%20Guardian%20Permissions%2015-897.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-700 underline hover:text-brand-800"
                            >
                                Child Care Parent/Guardian Permissions (Form 15-897)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/assets/Child%20Care%20Registration%20Form%2015-879.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-700 underline hover:text-brand-800"
                            >
                                Child Care Registration Form (Form 15-879)
                            </a>
                        </li>
                    </ul>
                    <p className="mt-4 text-sm text-brand-700/80">
                        Please download, fill out, and return the completed forms to
                        <span className="block my-3">
                            <a
                                href="mailto:info@deebasdaycare.com"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 border border-yellow-400 text-brand-900 font-bold shadow-sm hover:bg-yellow-200 transition-colors duration-150"
                                style={{ textDecoration: 'none' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                                </svg>
                                info@deebasdaycare.com
                            </a>
                        </span>
                        or bring them in person.
                    </p>
                </div>
            </Section>
        </>
    );
}
