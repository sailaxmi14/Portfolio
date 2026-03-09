import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 bg-primary text-primary-foreground">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="font-body text-sm opacity-80 mb-8">
        I'm open to opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-body">
        <a href="mailto:sailaxmisatyavarapu2006@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail size={16} /> sailaxmisatyavarapu2006@gmail.com
        </a>
        <span className="flex items-center gap-2">
          <Phone size={16} /> 8143093908
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={16} /> Vizianagaram, India
        </span>
      </div>
    </div>
  </section>
);

export default Contact;
