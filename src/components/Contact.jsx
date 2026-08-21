import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from '../hooks/useT';
import { useState } from "react";


export const ContactSection = () => {

    const {toast} = useToast();
    const [inSubmission, setSubmission] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();

    setSubmission(true);

    const form = e.target;

    emailjs.sendForm(
        'service_bhjoiah',
        'template_yo9b2wt',
        form,
        'cUOI3JuKmxe5PWMEV'
    ).then(() => {
        toast({
            title: 'Message sent successfully ✅',
            description: 'We will get back to you soon!',
        });
        form.reset();
        setSubmission(false);
    }).catch((error) => {
        toast({
            title: 'Error sending message',
            description: 'Please try again later.',
            variant: 'destructive'
        });
        setSubmission(false);
        console.error(error);
    });
}
    return (
        <section id="contact" className="py-24 relative bg-secondary/30">
            <div className="px-4">
                <h2 className="text-4xl font-bold mb-4 text-center text-header">
                    Get In Touch 💌
                </h2>
                <p className="text-center text-pretty text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                    I'm here to listen, guide, and support you on your wellness journey. 
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-2 md:px-12 lg:px-16 2xl:px-40">
                    {/* Left Side */}
                    <div className="space-y-10">
                        {/* 1st Box */}
                        <div className="relative bg-contact p-6 sm:p-8 border border-primary rounded-2xl">
                            <h2 className="text-3xl text-header mb-4 font-extrabold ">Let's Connect</h2>
                            <p className="text-pretty text-md mb-10 text-foreground opacity-80">Whether you're seeking natural solutions, 
                                nutritional guidance, let's take the next step together.
                            </p>
                            <div className="space-y-6">
                                <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
                                    <Mail size={24} className="mt-0.5 shrink-0 text-email sm:mt-0" />
                                    <span className="min-w-0 break-all text-xs text-email sm:text-sm md:text-base xl:text-lg">Naturecuresnaturally1@gmail.com</span>
                                </div>
                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                    <Phone size={24} className="shrink-0 text-num" />
                                    <span className="text-sm text-num md:text-base xl:text-lg">+1 (929) 900 6536</span>
                                </div>
                                <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
                                    <MapPin size={27} className="shrink-0 text-location" />
                                    <span className="text-sm text-location md:text-base xl:text-lg">Rooted in New York & Connecticut</span>
                                </div>

                            </div>
                        </div>
                        {/* 2nd Box */}
                        <div className="relative bg-contact p-6 sm:p-8 border border-primary rounded-2xl">
                            <h2 className="text-3xl text-header mb-2 font-extrabold text-center">Follow My Journey</h2>
                            <p className="mb-6 text-center text-sm text-foreground/70">Fresh recipes, natural living, and everyday wellness.</p>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                <a
                                    href="https://www.facebook.com/Nicolewynaar1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow Nature Cures Naturally on Facebook (opens in a new tab)"
                                    className="social-link social-link--facebook"
                                >
                                    <svg aria-hidden="true" className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                                    </svg>
                                    <span>Facebook</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/naturecuresnaturally/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow Nature Cures Naturally on Instagram (opens in a new tab)"
                                    className="social-link social-link--instagram"
                                >
                                    <svg aria-hidden="true" className="social-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
                                    </svg>
                                    <span>Instagram</span>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@nicole.wynaar22"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow Nicole Wynaar on TikTok (opens in a new tab)"
                                    className="social-link social-link--tiktok"
                                >
                                    <svg aria-hidden="true" className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267A5.14 5.14 0 0 1 14.252.718h-3.27v13.653a2.86 2.86 0 1 1-2.86-2.86c.287 0 .563.043.824.122V8.305a6.199 6.199 0 0 0-.824-.055A6.121 6.121 0 1 0 14.243 14.371V7.436a8.358 8.358 0 0 0 5.078 1.702V5.562Z" />
                                    </svg>
                                    <span>TikTok</span>
                                </a>
                            </div>

                        </div>
                    </div>
                    {/* Contact Side */}
                    <div className="relative bg-contact border border-primary rounded-2xl p-6 sm:p-7">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-3xl text-header mb-4 font-extrabold text-center text-pretty">Start A Conversation</h2>
                            <p className="text-foreground opacity-80 text-center text-lg mb-8">Fill out the form below and I'll get back to you soon!</p>
                            {/* top fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div>
                                    <label htmlFor="name" className="text-sm font-bold text-primary mb-2 block">Full Name</label>
                                    <input type="text" placeholder="Your Name..." id="name" name="name" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-bold text-primary mb-2 block">Email</label>
                                    <input type="email" placeholder="Your Name..." id="email" name="email" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="subject" className="text-sm font-bold text-primary mb-2 block">Subject</label>
                                <input type="text" placeholder="Subject" id="subject" name="subject" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70" />
                            </div>
                            <div className="mb-20">
                                <label htmlFor="message" className="text-sm font-bold text-primary mb-2 block">Message</label>
                                <textarea type="text" placeholder="Your Message..." id="message" name="message" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70" />
                            </div>
                            <button 
                            type="submit" 
                            disabled={inSubmission}
                            className="bg-background px-4 py-6 w-[80%] md:w-[60%] flex items-center justify-center gap-2 cursor-pointer mx-auto rounded-2xl hover:bg-primary hover:text-black transition-colors duration-300 font-bold text-lg"
                            >
                                {inSubmission ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                            
                        </form>
                        

                    </div>

                </div>


            </div>
        </section>
    );
}
