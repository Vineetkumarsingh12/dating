import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pb-10  pt-16">
      <div className="max-w-4xl w-full px-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-600 leading-8 mb-6">
          Welcome to MindFulAi, a place where genuine connections are made. We believe that everyone deserves to find love and companionship, and our mission is to help you do just that. Our platform is designed with you in mind, providing a safe, inclusive, and enjoyable experience for all our users.
        </p>
        <p className="text-lg text-gray-600 leading-8 mb-6">
          Our team is passionate about bringing people together and creating lasting relationships. We use advanced algorithms to match you with compatible partners based on your interests, values, and preferences. With a user-friendly interface and robust features, we make it easy for you to connect, chat, and meet new people.
        </p>
        <p className="text-lg text-gray-600 leading-8 mb-6">
          At MindFulAi, we value your privacy and safety. We employ strict security measures to protect your personal information and ensure that your online dating experience is secure and enjoyable. Our community guidelines are designed to foster a respectful and positive environment for all members.
        </p>
        <p className="text-lg text-gray-600 leading-8 mb-6">
          Thank you for choosing MindFulAi. We are excited to be a part of your journey to finding love and happiness.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
        <div className="flex flex-wrap justify-around">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=John+Doe&background=random&size=300" alt="Team Member" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Jane+Smith&background=random&size=300" alt="Team Member" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
