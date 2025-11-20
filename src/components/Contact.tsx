
import React from 'react';
import Section from './Section';
import { LocationIcon, PhoneIcon, MailIcon, FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';
import { motion } from 'framer-motion';

const socialLinks = [
    { Icon: FacebookIcon, href: "https://www.facebook.com/CKStudio.org/", name: "Facebook" },
    { Icon: TwitterIcon, href: "https://x.com/CKStudio_Music", name: "X (Twitter)" },
    { Icon: YoutubeIcon, href: "https://www.youtube.com/@CKStudio-Music", name: "YouTube" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/ckstudio_music/", name: "Instagram" },
];

const Contact: React.FC = () => {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black tracking-tight text-black sm:text-6xl mb-4"
                >
                    Reach <span className="text-red-600">Us At</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-xl text-gray-600"
                >
                    Let's create something extraordinary together.
                </motion.p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="flex items-start group">
                        <div className="p-3 bg-red-50 rounded-full mr-4 group-hover:bg-red-100 transition-colors">
                            <LocationIcon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Address</h3>
                            <p className="text-gray-600 leading-relaxed">CK STUDIO, 11-008 N/R, Gajularamaram,<br />IDA Jeedimetla, Hyderabad.</p>
                        </div>
                    </div>
                    <div className="flex items-start group">
                        <div className="p-3 bg-red-50 rounded-full mr-4 group-hover:bg-red-100 transition-colors">
                            <PhoneIcon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Phone</h3>
                            <a href="tel:9700970762" className="text-gray-600 hover:text-red-600 transition-colors text-lg font-medium">9700 970 762</a>
                        </div>
                    </div>
                    <div className="flex items-start group">
                        <div className="p-3 bg-red-50 rounded-full mr-4 group-hover:bg-red-100 transition-colors">
                            <MailIcon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Email</h3>
                            <a href="mailto:ckstudio.org@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors text-lg font-medium">ckstudio.org@gmail.com</a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-8 bg-gray-50 p-10 rounded-3xl border border-gray-100"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-20 animate-pulse" />
                        <img src="https://picsum.photos/seed/connect/300/300" alt="Global Connection" className="relative rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl" />
                    </div>

                    <div className="flex space-x-6">
                        {socialLinks.map(({ Icon, href, name }, index) => (
                            <motion.a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="text-gray-500 hover:text-red-600 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <Icon className="w-8 h-8" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
