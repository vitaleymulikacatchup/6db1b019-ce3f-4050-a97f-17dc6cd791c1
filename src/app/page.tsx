"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Link, Star } from 'lucide-react';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "High-End Gaming PC Interior with Colorful RGB Lights" },
  { "id": "feature-image", "url": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman with digital code projections on her face, representing technology and future concepts." },
  { "id": "team-image", "url": "https://images.pexels.com/photos/7640798/pexels-photo-7640798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Dynamic office setting with diverse team members actively engaged in a discussion." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="YourStartup"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-blue-50">
          <HeroBillboard
            title="Welcome to AI SaaS"
            description="Pioneering the Future of Technology"
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "features" }
            ]}
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-blue-50">
          <TextSplitAbout
            title="About Us"
            description={["We create tech solutions that empower companies.", "Our mission is to lead in AI technology."]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-blue-50">
          <FeatureCardTwo
            title="Features"
            description="Discover our groundbreaking features"
            features={[
              { title: "Advanced AI", description: "Sophisticated AI tools", icon: Zap },
              { title: "Seamless Integration", description: "Easy to integrate", icon: Link }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-blue-50">
          <PricingCardTwo
            title="Choose Your Plan"
            plans={[
              {
                id: "basic",
                badge: "Starter",
                price: "$99/month",
                subtitle: "For small teams",
                buttons:[
                  { text: "Subscribe", href: "https://example.com" },
                  { text: "Contact Sales", href: "contact" }
                ],
                features: ["5 users", "Basic support"],
              },
              {
                id: "pro",
                badge: "Most Popular",
                price: "$199/month",
                subtitle: "For larger teams",
                buttons:[
                  { text: "Subscribe", href: "https://example.com" },
                  { text: "Contact Sales", href: "contact" }
                ],
                features: ["Unlimited users", "Priority support"],
                badgeIcon: Star
              }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-blue-50">
          <TeamCardOne
            title="Meet the Team"
            members={[
              { id: "1", name: "Alex G.", role: "Developer", imageSrc: assetMap.find(a => a.id === "team-image")?.url },
              { id: "2", name: "Jamie L.", role: "Designer", imageSrc: assetMap.find(a => a.id === "team-image")?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-blue-50">
          <ContactCenterForm
            title="Get in Touch"
            description="We'd love to hear from you."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Message", rows: 5, required: true }}
            buttonText="Submit"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-blue-50">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "About", items: [{ label: "About Us", href: "about" }, { label: "Team", href: "team" }] }
            ]}
            copyrightText="© 2025 | YourStartup"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}