import { Card } from "@/components/ui/card";
import { ContentCard } from "./ContentCard";
import { SocialLinksGrid, FooterSocialLinks } from "./SocialLinks";
import { socialLinks, contactInfo, contentCards } from "@/lib/constants";

export function ProfileCard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden profile-container">
        {/* Profile Header Section */}
        <div className="md:flex">
          <div className="w-full md:w-1/3 bg-gradient-to-br from-primary to-secondary p-6 md:p-8 flex flex-col justify-center items-center">
            <div className="rounded-full w-48 h-48 overflow-hidden border-4 border-white shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white text-2xl md:text-3xl font-bold text-center">BRAVEZM</h1>
            <p className="text-white/80 text-center mt-2">Content Creator & Gamer</p>
          </div>
          
          <div className="w-full md:w-2/3 p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">About Me</h2>
              <p className="text-dark-gray leading-relaxed">
                Welcome to my profile page! I'm a passionate content creator focused on gaming and entertainment. 
                Join me on my social channels to stay updated with my latest content and connect with the community.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fa fa-phone text-primary w-6"></i>
                  <span className="ml-3 text-dark-gray">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-whatsapp text-green-500 w-6"></i>
                  <span className="ml-3 text-dark-gray">WhatsApp: {contactInfo.whatsapp}</span>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">Find Me Online</h2>
              <SocialLinksGrid 
                facebookUrl={socialLinks.facebook}
                youtubeUrl={socialLinks.youtube}
                whatsappUrl={socialLinks.whatsapp}
                whatsappChannelUrl={socialLinks.whatsappChannel}
                discordUrl={socialLinks.discord}
              />
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-dark mb-6">Latest Content</h2>
          
          {/* Content Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentCards.map((card) => (
              <ContentCard
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                linkText={card.linkText}
                linkUrl={card.linkUrl}
              />
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 bg-dark text-center">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} BRAVEZM. All rights reserved.</p>
          <FooterSocialLinks
            facebookUrl={socialLinks.facebook}
            youtubeUrl={socialLinks.youtube}
            discordUrl={socialLinks.discord}
            whatsappChannelUrl={socialLinks.whatsappChannel}
          />
        </div>
      </Card>
    </div>
  );
}
