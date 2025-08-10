import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";


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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-2 md:px-12 lg:px-6 2xl:px-52">
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
                                    <Mail size={24} className="text-cyan-300" />
                                    <span className="text-cyan-300">Naturecuresnaturally1@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone size={24} className="text-cyan-300" />
                                    <span className="text-cyan-300">+1 (929) 900 6536</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MapPin size={24} className="text-cyan-300" />
                                    <span className="text-cyan-300">Rooted in New York & Derby, Connecticut 🌿</span>
                                </div>

                            </div>
                        </div>
                        {/* 2nd Box */}
                        <div className="relative bg-button p-8 border border-primary rounded-2xl">
                            <h2 className="text-3xl text-background mb-4 font-extrabold">Follow My Jouney</h2>
                            <div className="grid grid-cols-3 gap-4">
                                <a href="https://www.facebook.com/Nicolewynaar1" target="_blank">
                                    <Facebook size={24} className="text-cyan-300" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="relative bg-button border border-primary rounded-2xl">

                    </div>

                </div>


            </div>
        </section>
    );
}