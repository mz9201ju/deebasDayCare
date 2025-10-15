import Section from '../components/Section'
import { SITE } from '../lib/config'


export default function ContactUs() {
    return (
        <Section title="Contact Us" subtitle="We’d love to meet your family.">
            <div className="card">
                <form className="grid gap-4">
                    <div className="grid gap-1">
                        <label className="text-sm font-medium text-brand-800">Parent Name</label>
                        <input className="border rounded-lg px-3 py-2" placeholder="Your name" />
                    </div>
                    <div className="grid gap-1">
                        <label className="text-sm font-medium text-brand-800">Email</label>
                        <input type="email" className="border rounded-lg px-3 py-2" placeholder="you@email.com" />
                    </div>
                    <div className="grid gap-1">
                        <label className="text-sm font-medium text-brand-800">Message</label>
                        <textarea className="border rounded-lg px-3 py-2" rows={4} placeholder="Tell us about your kiddo :)" />
                    </div>
                    <button type="button" className="px-4 py-2 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700">
                        Send
                    </button>
                    <p className="text-sm text-brand-700/80">
                        Or reach us at {SITE.contact.phone}
                    </p>
                </form>
            </div>
        </Section>
    )
}