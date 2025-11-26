import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppWidget: React.FC = () => {
    const phoneNumber = "919700970762"; // Adding 91 for India
    const message = "Hi! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[999] flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-sm font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Chat with us!
            </span>

            {/* WhatsApp Icon SVG */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382C17.112 14.022 16.602 13.842 16.092 13.842C15.582 13.842 15.072 14.022 14.712 14.382L14.172 14.922C14.052 15.042 13.872 15.102 13.722 15.042C13.542 14.982 12.822 14.742 11.952 13.872C10.992 12.912 10.752 12.102 10.692 11.922C10.632 11.772 10.692 11.592 10.812 11.472L11.352 10.932C12.072 10.212 12.072 9.072 11.352 8.352L9.73201 6.732C9.37201 6.372 8.86201 6.192 8.35201 6.192C7.84201 6.192 7.33201 6.372 6.97201 6.732L6.37201 7.332C5.95201 7.752 5.74201 8.322 5.80201 8.922C5.98201 10.602 7.00201 14.322 12.492 19.812C16.842 24.162 19.872 24.162 20.142 24.162C20.152 24.162 20.162 24.162 20.172 24.162C20.742 24.132 21.282 23.892 21.672 23.502L22.272 22.902C22.992 22.182 22.992 21.042 22.272 20.322L17.472 14.382Z" />
                <path d="M12.012 0C5.382 0 0.0119934 5.37 0.0119934 12C0.0119934 14.29 0.661993 16.42 1.79199 18.26L0.601993 22.66C0.541993 22.88 0.601993 23.11 0.761993 23.27C0.891993 23.4 1.062 23.47 1.242 23.47C1.322 23.47 1.412 23.45 1.492 23.43L6.082 22.18C7.842 23.23 9.882 23.83 12.012 23.83C18.642 23.83 24.012 18.46 24.012 11.83C24.012 5.2 18.642 0 12.012 0ZM12.012 21.83C10.182 21.83 8.432 21.31 6.922 20.41L6.592 20.21L2.902 21.21L3.952 17.65L3.742 17.31C2.782 15.75 2.272 13.95 2.272 12.07C2.272 6.63 6.632 2.27 12.012 2.27C17.392 2.27 21.752 6.63 21.752 12.07C21.752 17.51 17.392 21.83 12.012 21.83Z" fill="white" />
            </svg>
        </motion.a>
    );
};

export default WhatsAppWidget;
