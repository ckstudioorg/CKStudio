
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-neutral-800 py-6">
            <div className="container mx-auto px-6 text-center text-gray-700">
                <p className="mb-2 text-lg">
                    <a href="http://www.ckstudio.org" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                        www.ckstudio.org
                    </a>
                </p>
                <p>&copy; {new Date().getFullYear()} CK Studio. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
