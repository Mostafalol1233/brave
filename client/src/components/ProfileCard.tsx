import { SocialLinksGrid } from "./SocialLinks";
import { socialLinks } from "@/lib/constants";
import bravezm_logo from "@/assets/bravezm_logo.png";

export function ProfileCard() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative">
      {/* Background with logo pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `url(${bravezm_logo})`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 z-10 flex flex-col items-center justify-center">
        {/* Logo Centered */}
        <div className="mb-16 flex flex-col items-center">
          <img 
            src={bravezm_logo} 
            alt="BRAVEZM Logo" 
            className="w-64 h-64 md:w-80 md:h-80 object-contain mb-8 drop-shadow-2xl"
          />
        </div>
        
        {/* Social Media Links */}
        <div className="max-w-2xl w-full">
          <SocialLinksGrid 
            facebookUrl={socialLinks.facebook}
            youtubeUrl={socialLinks.youtube}
            whatsappUrl={socialLinks.whatsapp}
            whatsappChannelUrl={socialLinks.whatsappChannel}
            discordUrl={socialLinks.discord}
          />
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-sm">© {new Date().getFullYear()} BRAVEZM. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
