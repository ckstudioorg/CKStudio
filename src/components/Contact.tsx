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
        <Section className="section-gradient noise-overlay">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-red/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="text-center mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    Get In Touch
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4"
                >
                    <span className="heading-gradient">Reach</span>{' '}
                    <span className="heading-red">Us At</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-lg text-gray-500"
                >
                    Let's create something extraordinary together with AI.
                </motion.p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-stretch relative">
                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Address */}
                    <div className="glass-card-hover p-6 flex items-start gap-5 group">
                        <div className="p-3 rounded-xl bg-primary-red/10 border border-primary-red/20 text-primary-red group-hover:bg-primary-red/20 transition-colors flex-shrink-0">
                            <LocationIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-display font-bold text-white mb-1">Address</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">CK STUDIO, 11-008 N/R, Gajularamaram,<br />IDA Jeedimetla, Hyderabad.</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="glass-card-hover p-6 flex items-start gap-5 group">
                        <div className="p-3 rounded-xl bg-primary-red/10 border border-primary-red/20 text-primary-red group-hover:bg-primary-red/20 transition-colors flex-shrink-0">
                            <PhoneIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-display font-bold text-white mb-1">Phone</h3>
                            <a href="tel:9700970762" className="text-gray-400 hover:text-primary-red transition-colors text-base font-medium">9700 970 762</a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="glass-card-hover p-6 flex items-start gap-5 group">
                        <div className="p-3 rounded-xl bg-primary-red/10 border border-primary-red/20 text-primary-red group-hover:bg-primary-red/20 transition-colors flex-shrink-0">
                            <MailIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-display font-bold text-white mb-1">Email</h3>
                            <a href="mailto:ckstudio.org@gmail.com" className="text-gray-400 hover:text-primary-red transition-colors text-base font-medium">ckstudio.org@gmail.com</a>
                        </div>
                    </div>
                </motion.div>

                {/* Social / Connect Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-10 flex flex-col items-center justify-center space-y-8"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-red/20 rounded-full blur-3xl" />
                        <div className="relative w-32 h-32 rounded-full border-2 border-white/10 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&h=300&fit=crop"
                                alt="Connect with CK Studio"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="font-display font-bold text-lg text-white mb-2">Connect With Us</h3>
                        <p className="text-sm text-gray-500">Follow our AI filmmaking journey</p>
                    </div>

                    <div className="flex gap-4">
                        {socialLinks.map(({ Icon, href, name }, index) => (
                            <motion.a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-primary-red hover:border-primary-red/30 hover:bg-primary-red/10 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
