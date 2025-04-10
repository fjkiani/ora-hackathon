import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string; // Placeholder path for image
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Placeholder data - Replace with actual team information
const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Fahad Kiani',
    title: 'Founder & Chief AI Officer',
    bio: 'Passionate about integrating AI and blockchain for Sharia-compliant finance. Experienced in leading tech startups and building intelligent financial solutions.',
    image: '/images/team/placeholder.png', // Example placeholder path
    socials: {
      linkedin: 'https://linkedin.com/in/fjkiani',
      github: 'http://fahadkiani.com/',
    },
  },
  {
    id: 'member-2',
    name: 'Ahmed Javaid',
    title: 'Founding Engineer',
    bio: 'Expert in AI/ML and blockchain architecture. Driving the technical vision and ORA Framework implementation.',
    image: '/images/team/placeholder.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ahmed-javaid-4841a9207/',

    },
  },
  {
    id: 'member-3',
    name: 'Hammad ',
    title: 'Head of Design',
    bio: 'Specialist in design and branding for the DefiKSA brand.',
    image: '/images/team/placeholder.png',
    socials: {
    //   linkedin: '#',
    },
  },
  {
    id: 'member-3',
    name: 'Jedi Labs ',
    title: 'AI Research Lab',
    bio: 'Research Lab providing AI solutions across building AI agents and ensuring all platform operations adhere to Sharia principles.',
    image: '/images/team/placeholder.png',
    socials: {
      linkedin: 'https://jedilabs.org/',
    },
    
  },
  // Ad more team members as needed
    {
        id: 'member-5',
        name: 'Waqas Arain',
        title: 'Founding Engineer',
        bio: 'Specialist across building on-chain solutions and ensuring all platform operations adhere to blockchain principles.',
        image: '/images/team/placeholder.png',
        socials: {
            linkedin: 'https://www.linkedin.com/in/waqas-arain/',
        },
    },
    {
        id: 'member-5',
        name: 'Talha Gondal',
        title: 'Founding Strategist',
        bio: 'Specialist across all strategic operations and GTM research.',
        image: '/images/team/placeholder.png',
        socials: {
            linkedin: 'https://www.linkedin.com/in/talha-g/',
        },
    }
      // Ad more team members as needed
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet the <span className="text-gradient-blue">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The dedicated individuals behind DefiKSA, committed to building the future of intelligent, compliant finance in the KSA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="glass-dark p-6 rounded-xl text-center border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-gray-700"
                  // Note: Ensure placeholder image exists at public/images/team/placeholder.png
                  // Or use a proper image source
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzk5OTk5OSI+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHJ4PSI2MCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSI0MCIgZmlsbD0iI2NjYyI+PzwvdGV4dD48L3N2Zz4=';
                  }}
                /> */}
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-400 font-medium mb-3">{member.title}</p>
              <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 010 10.64v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 19.008a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 