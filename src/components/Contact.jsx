import { Mail, Phone, MapPin, Send } from "lucide-react";


export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 relative bg-secondary/30">
            <div className="px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-card">
                    Get In Touch 💌
                </h2>
                <p className="text-center text-pretty text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm here to listen, guide, and support you on your wellness journey. 
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-2 md:px-12 lg:px-6 2xl:px-64">
                    {/* Left Side */}
                    <div className="space-y-10">
                        {/* 1st Box */}
                        <div className="relative bg-button p-8 border border-primary rounded-2xl">
                            <h2 className="text-3xl text-background mb-4 font-extrabold ">Let's Connect</h2>
                            <p className="text-pretty text-md mb-10">Whether you're seeking natural solutions, 
                                nutritional guidance, let's take the next step together.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <Mail size={24} className="text-[hsl(37,66%,64%)]" />
                                    <span className="text-[hsl(37,66%,64%)]">Naturecuresnaturally1@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone size={24} className="text-[hsl(98,48%,61%)]" />
                                    <span className="text-[hsl(98,48%,61%)]">+1 (929) 900 6536</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MapPin size={24} className="text-[hsl(91,20%,63%)]" />
                                    <span className="text-[hsl(91,20%,63%)]">Rooted in New York & Derby, Connecticut 🌿</span>
                                </div>

                            </div>
                        </div>
                        {/* 2nd Box */}
                        <div className="relative bg-button p-8 border border-primary rounded-2xl">
                            <h2 className="text-3xl text-background mb-4 font-extrabold text-center">Follow My Jouney</h2>
                            {/* div of the links */}
                            <div className="flex justify-center gap-4">
                                <a href="https://www.facebook.com/Nicolewynaar1" target="_blank" 
                                className="relative w-40 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <svg role="img" className="w-8 h-8 text-primary mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/nicole-wynaar-465a6b364/" target="_blank" 
                                className="relative w-40 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-500 hover:to-cyan-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-500 mx-auto" fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                    {/* Contact Side */}
                    <div className="relative bg-button border border-primary rounded-2xl p-10">
                        <form action="">
                            <h2 className="text-3xl text-background mb-4 font-extrabold text-center">Start A Conversation</h2>
                            <p className="text-primary text-center text-lg mb-8">Fill out the form below and I'll get back to you soon</p>
                            {/* top fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div>
                                    <label htmlFor="name" className="text-sm font-bold text-primary mb-2 block">Full Name</label>
                                    <input type="text" placeholder="Your Name..." id="name" name="name" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:primary/70" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-bold text-primary mb-2 block">Email</label>
                                    <input type="email" placeholder="Your Name..." id="email" name="email" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:primary/70" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="subject" className="text-sm font-bold text-primary mb-2 block">Subject</label>
                                <input type="text" placeholder="Subject" id="subject" name="subject" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:primary/70" />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="message" className="text-sm font-bold text-primary mb-2 block">Message</label>
                                <textarea type="text" placeholder="Your Message..." id="message" name="message" required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:primary/70" />
                            </div>
                            <button 
                            type="submit" 
                            required
                            className="bg-background px-4 py-6 w-[50%] flex items-center justify-center gap-2 cursor-pointer mx-auto rounded-2xl hover:bg-primary hover:text-black transition-colors duration-300 font-bold text-lg"
                            >
                                Send Message <Send size={16} />
                            </button>
                            
                        </form>
                        

                    </div>

                </div>


            </div>
        </section>
    );
}