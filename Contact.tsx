
import React from 'react';
import Section from './Section';
import { LocationIcon, PhoneIcon, MailIcon, FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';

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
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Reach <span className="text-red-600">Us At</span></h2>
                <p className="mt-4 text-lg text-gray-700">Let's create something extraordinary together.</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                     <div className="flex items-start">
                        <LocationIcon className="w-8 h-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p className="text-gray-700">CK STUDIO, 11-008 N/R, Gajularamaram, IDA Jeedimetla, Hyderabad.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <PhoneIcon className="w-8 h-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <a href="tel:9700970762" className="text-gray-700 hover:text-red-500 transition-colors">9700 970 762</a>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MailIcon className="w-8 h-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <a href="mailto:ckstudio.org@gmail.com" className="text-gray-700 hover:text-red-500 transition-colors">ckstudio.org@gmail.com</a>
                        </div>
                    </div>
                </div>
                 <div className="flex flex-col items-center justify-center space-y-4">
                     <img src="https://picsum.photos/seed/connect/300/300" alt="Global Connection" className="rounded-full w-48 h-48 object-cover border-4 border-red-800/50" />
                     <div className="flex space-x-6 mt-6">
                         {socialLinks.map(({ Icon, href, name }) => (
                            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-gray-700 hover:text-red-500 transition-colors">
                                <Icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                 </div>
            </div>
        </Section>
    );
};

export default Contact;
