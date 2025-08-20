'use client';

import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react/dist/ssr';
import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef } from 'react';

interface ProfileCardProps {
    name: string;
    role: string;
    image: StaticImageData;
    socialLinks?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    role,
    image,
    socialLinks = {}
}) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            className="relative w-80 h-96 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.1s ease'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl shadow-2xl transform transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-800 border border-neutral-800">
                {/* Conteúdo do card */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">

                    <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center p-1">
                            <Image
                                src={image}
                                alt={name}
                                className="w-full h-full rounded-full object-top object-cover border-4 border-neutral-900"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col items-center mb-6'>
                        <h2 className="text-2xl font-bold text-white text-center">
                            {name}
                        </h2>
                        <p className="text-neutral-400 text-center">
                            {role}
                        </p>
                    </div>


                    {/* Links sociais */}
                    <div className="flex space-x-4">
                        {socialLinks.github && (
                            <a
                                href={socialLinks.github}
                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors duration-300 hover:scale-110 transform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubLogoIcon size={22} />
                            </a>
                        )}

                        {socialLinks.linkedin && (
                            <a
                                href={socialLinks.linkedin}
                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors duration-300 hover:scale-110 transform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedinLogoIcon size={22} />
                            </a>
                        )}

                    </div>
                </div>
            </div>

            <div
                className="absolute inset-0 bg-white/10 rounded-3xl blur-xl -z-10 transition-all duration-300"
                style={{
                    transform: `translate(${rotate.y * 0.5}px, ${rotate.x * 0.5}px)`
                }}
            />
        </div>
    );
};

export default ProfileCard;