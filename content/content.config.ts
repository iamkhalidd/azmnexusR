export interface StatBlock {
  value: string;
  label: string;
}

export interface PortfolioCard {
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
  iconName: string;
}

export interface OperationsCard {
  title: string;
  description: string;
  status: "Active" | "In Progress";
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
}

export const COMMON_CONTENT = {
  wordmark: "AZM Nexus",
  copyright: "© 2025 AZM Nexus Limited. All rights reserved.",
};

export const NAV_CONTENT = {
  ctaText: "Partner With Us",
  links: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Operations", href: "#operations" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};

export const HERO_CONTENT = {
  label: "DIVERSIFIED. EXECUTION-DRIVEN. NATIONAL.",
  headline: "Building Enterprises That Move Nigeria Forward",
  subtext: "AZM Nexus Limited is a diversified holding company with active operations across technology, digital health, agriculture, trade, and digital asset sectors — delivering measurable progress across Nigerian markets.",
  ctaPrimary: "Explore Our Portfolio",
  ctaSecondary: "Contact Our Team",
  stats: [
    { value: "6", label: "Business Sectors" },
    { value: "National", label: "Operating Footprint" },
    { value: "Active", label: "Operations Status" },
  ],
  // TODO: replace with actual image
  backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071",
};

export const PORTFOLIO_CONTENT = {
  label: "WHAT WE DO",
  title: "Our Business Portfolio",
  subtext: "We strategically operate across high-impact sectors, ensuring stability, compliance, and growth in every venture.",
  cards: [
    {
      title: "Technology Services",
      description: "Delivering robust digital infrastructure and enterprise solutions. We build scalable technology to support modern business operations.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000",
      badge: "Active Sector",
      iconName: "Monitor",
    },
    {
      title: "Digital Health",
      description: "Innovating healthcare delivery through digital platforms. Enhancing accessibility and operational efficiency in medical services.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
      badge: "Active Sector",
      iconName: "Stethoscope",
    },
    {
      title: "Agriculture & Agribusiness",
      description: "Investing in sustainable farming and agricultural processing. Securing food supply chains and driving rural economic growth.",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000",
      badge: "Active Sector",
      iconName: "Sprout",
    },
    {
      title: "General Trade & Household Retail",
      description: "Managing diverse retail operations and household goods distribution. Meeting consumer needs with reliable supply networks.",
      imageUrl: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=2072",
      badge: "Active Sector",
      iconName: "Store",
    },
    {
      title: "Bulk Agricultural Trade",
      description: "Facilitating large-scale movement of agricultural commodities. Ensuring efficient logistics and market access.",
      imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=2070",
      badge: "Active Sector",
      iconName: "Truck",
    },
    {
      title: "P2P Digital Asset Trading",
      description: "Providing secure platforms for peer-to-peer asset exchange. Navigating the digital economy with compliance and trust.",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
      badge: "Active Sector",
      iconName: "RefreshCw",
    },
  ],
};

export const OPERATIONS_CONTENT = {
  label: "OPERATIONAL PROGRESS",
  title: "Visible Progress Across Every Sector",
  subtext: "We maintain transparent tracking of our operational status to ensure stakeholder alignment and project execution.",
  cards: [
    { title: "Agriculture", description: "Supply chain established and initial harvests processed.", status: "Active" },
    { title: "Trade", description: "Distribution networks operational across key regions.", status: "Active" },
    { title: "Tech/Health", description: "Platform development and partner onboarding phases.", status: "In Progress" },
    { title: "Digital Assets", description: "Trading protocols live and compliance frameworks instituted.", status: "Active" },
  ] as OperationsCard[],
};

export const TICKER_CONTENT = [
  "Technology Services",
  "Digital Health",
  "Agriculture & Agribusiness",
  "General Trade",
  "Bulk Agricultural Trade",
  "P2P Digital Asset Trading",
  "Lagos & Beyond",
  "Execution-Driven",
];

export const TEAM_CONTENT = {
  label: "OUR PEOPLE",
  title: "Leadership & Key Contributors",
  subtext: "A capable, experienced team managing AZM Nexus's diversified operations with focus and accountability.",
  members: [
    { name: "[Executive Name]", role: "Chief Executive Officer", bio: "Strategic direction and corporate governance oversight.", imageUrl: "" },
    { name: "[Executive Name]", role: "Head of Technology", bio: "Managing digital infrastructure and tech service deployment.", imageUrl: "" },
    { name: "[Executive Name]", role: "Head of Agriculture & Trade", bio: "Directing supply chains and agricultural bulk logistics.", imageUrl: "" },
    { name: "[Executive Name]", role: "Digital Asset Operations Lead", bio: "Overseeing P2P trading platforms and compliance protocols.", imageUrl: "" },
  ],
  footerText: "More team members coming soon →",
};

export const CONTACT_CONTENT = {
  title: "Let's Build Something Together",
  subtext: "Whether you are a partner, investor, institution, or client — we welcome serious inquiries across all our business sectors.",
  details: [
    { icon: "MapPin", label: "Corporate Office", value: "Lagos, Nigeria" },
    { icon: "Mail", label: "Email Inquiries", value: "contact@azmnexus.com" },
    { icon: "Phone", label: "Direct Line", value: "+234 (0) 123 456 7890" },
  ],
  form: {
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    companyLabel: "Company / Organisation",
    companyPlaceholder: "Organization name",
    inquiryTypeLabel: "Inquiry Type",
    inquiryTypeOptions: ["Partnership", "Investment", "Service Request", "General"],
    messageLabel: "Message",
    messagePlaceholder: "How can we assist you?",
    submitButton: "Send Inquiry",
  },
};

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
