export const site = {
  name: "Tanot Solutions",
  url: "https://tanotsolutions.com",
  email: "info@tanotsolutions.com",
  tagline: "SEO services for Google, AI search, and revenue growth",
} as const;

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
] as const;

export const proofStats = [
  { value: "150+", label: "Clients served" },
  { value: "98%", label: "Client satisfaction" },
  { value: "11+", label: "Years of SEO experience" },
  { value: "2+", label: "Years average client retention" },
] as const;

export const clientLogos = [
  { src: "/images/clients/lt.png", alt: "L&T", width: 216, height: 34 },
  { src: "/images/clients/stationx.png", alt: "StationX", width: 198, height: 37 },
  { src: "/images/clients/gravyty.png", alt: "Gravyty", width: 165, height: 46 },
  { src: "/images/clients/beamjobs.png", alt: "BeamJobs", width: 141, height: 31 },
  { src: "/images/clients/tracefuse.png", alt: "Tracefuse", width: 206, height: 36 },
  { src: "/images/clients/movinnza.png", alt: "Movinnza", width: 207, height: 54 },
  { src: "/images/clients/cpraed.png", alt: "CPRaed Course", width: 161, height: 49 },
  { src: "/images/clients/logo-a.png", alt: "Client brand", width: 200, height: 58 },
  { src: "/images/clients/logo-b.png", alt: "Client brand", width: 250, height: 79 },
  { src: "/images/clients/logo-c.png", alt: "Client brand", width: 199, height: 50 },
  { src: "/images/clients/logo-d.png", alt: "Client brand", width: 229, height: 49 },
] as const;

export type Service = {
  id: string;
  number: string;
  name: string;
  description: string;
  features: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const services: Service[] = [
  {
    id: "link-building",
    number: "01",
    name: "Link Building",
    description:
      "We earn high-quality, white-hat backlinks from trusted websites in your industry. These links show Google your business is credible, helping you rank higher and stay there.",
    features: [
      "High-authority guest posts",
      "Contextual niche edit links",
      "Industry-relevant websites only",
      "Site approval before placement",
      "White-label agency solutions",
      "Pay for live links",
    ],
    primaryCta: { label: "Get a link building plan", href: "#strategy" },
    secondaryCta: { label: "Learn more", href: "#strategy" },
  },
  {
    id: "technical-seo",
    number: "02",
    name: "Technical SEO",
    description:
      "We fix the hidden issues that stop Google and AI from finding, understanding, and ranking your website. A faster, healthier site means better rankings, more AI visibility, and a smoother path from visitor to customer.",
    features: [
      "Complete website SEO audits",
      "Faster page load speed",
      "Core Web Vitals optimization",
      "Crawling and indexing fixes",
      "Schema markup implementation",
      "Mobile and AI-ready setup",
    ],
    primaryCta: { label: "Get a free technical SEO audit", href: "#strategy" },
    secondaryCta: { label: "Learn more", href: "#strategy" },
  },
  {
    id: "ai-seo",
    number: "03",
    name: "AI SEO",
    description:
      "Your customers now ask ChatGPT, Perplexity, and Google AI Overviews for recommendations. We optimize your brand so these tools mention, cite, and recommend your business when buyers are searching.",
    features: [
      "Google AI Overviews visibility",
      "ChatGPT and Perplexity mentions",
      "Answer engine optimization (AEO)",
      "AI-friendly content structure",
      "AI-ready structured data",
      "AI visibility performance tracking",
    ],
    primaryCta: { label: "Get a free AI SEO audit", href: "#strategy" },
    secondaryCta: { label: "Learn more", href: "#strategy" },
  },
  {
    id: "local-seo",
    number: "04",
    name: "Local SEO",
    description:
      "We help nearby customers find you on Google Search and Maps the moment they need your services. More local visibility means more calls, direction requests, and visits from ready-to-buy customers.",
    features: [
      "Google Business Profile optimization",
      "Higher Google Maps rankings",
      "Local keyword targeting",
      "Consistent directory listings",
      "Local community backlinks",
      "Review and reputation management",
    ],
    primaryCta: { label: "Get a free local SEO audit", href: "#strategy" },
    secondaryCta: { label: "Learn more", href: "#strategy" },
  },
  {
    id: "saas-seo",
    number: "05",
    name: "SaaS SEO",
    description:
      "SaaS growth needs a different SEO playbook. We help software companies rank for the searches buyers make right before choosing a tool, driving more trials, demos, and recurring revenue.",
    features: [
      "More demo requests",
      "Steady monthly sign-up growth",
      "Revenue-focused SEO strategy",
      "AI search visibility",
      "Topical authority building",
      "Links from top SaaS websites",
    ],
    primaryCta: { label: "Get a free SaaS SEO audit", href: "#strategy" },
    secondaryCta: { label: "Learn more", href: "#strategy" },
  },
  {
    id: "content-marketing",
    number: "06",
    name: "Content Marketing",
    description:
      "We create content that answers your customers' questions, ranks on Google, and guides readers toward becoming buyers. Every piece is planned around what your audience is actually searching for.",
    features: [
      "Keyword and intent research",
      "AI-citation-ready content",
      "Content gap analysis",
      "E-E-A-T content strategy",
      "Conversion-focused SEO copywriting",
      "Content refresh and updates",
    ],
    primaryCta: {
      label: "Get a free content marketing audit",
      href: "#strategy",
    },
    secondaryCta: { label: "Learn more", href: "#strategy" },
  },
];

export const reviews = [
  {
    quote:
      "After we started link building with Tanot Solutions, they helped our CRM’s high-converting product page rank higher with an impressive 80% increase in traffic and an equally exceptional 80% increase in the total number of sign-ups every day.",
    name: "Sandeep Das",
    role: "Marketing Manager, CRM SaaS company",
  },
  {
    quote:
      "We’ve been impressed by their ability to consistently build high-quality backlinks, which are very challenging to achieve. We work with highly reputed brands, where quality guidelines are stringent. Tanot Solutions consistently meets these standards.",
    name: "Michael Dunlop",
    role: "Director of LinkBuilder.io",
  },
  {
    quote:
      "Since we started working with Tanot Solutions on our link-building efforts, we’ve seen steady increases in our organic traffic month over month. Renu and the team are very responsive and punctual, something I really appreciate from our partners.",
    name: "Marko Spasic",
    role: "Marketing Manager, hosting company",
  },
  {
    quote:
      "Tanot Solutions helped us grow from almost no organic presence into a consistent source of qualified traffic. The team is clear, accountable, and easy to work with.",
    name: "Lisa Warren",
    role: "Content Manager, HR company",
  },
] as const;

export const partnerPoints = [
  {
    title: "Results, not vanity metrics",
    body: "Every campaign is tied to rankings, AI visibility, leads, sales, and revenue.",
  },
  {
    title: "Performance-based pricing",
    body: "No upfront payment. Pay only for verified deliverables.",
  },
  {
    title: "Enterprise-grade quality",
    body: "Links and strategy that meet global brand standards, at scale.",
  },
  {
    title: "100% transparent process",
    body: "You approve content, links, and technical changes before we go ahead.",
  },
  {
    title: "AI-first SEO",
    body: "Visible in AI Overviews, ChatGPT, and Perplexity — not just Google.",
  },
  {
    title: "An extension of your team",
    body: "Dedicated specialists, clear communication, and a genuine relationship.",
  },
] as const;

export const awards = [
  {
    src: "/images/awards/rajasthan-women-leaders.jpg",
    alt: "Renu Sharma receiving the Rajasthan Women Leaders Award",
    title: "Rajasthan Women Leaders Award",
  },
  {
    src: "/images/awards/global-seo-provider.jpg",
    alt: "Most Trusted Global SEO Solutions Provider recognition",
    title: "Most Trusted Global SEO Solutions Provider",
  },
  {
    src: "/images/awards/best-roi-agency.png",
    alt: "Certificate for Best ROI-Focused SEO Agency 2026",
    title: "Best ROI-Focused SEO Agency 2026",
  },
  {
    src: "/images/awards/clutch-badges.jpg",
    alt: "Clutch badges for top link building and SEO company",
    title: "Clutch Top Link Building & SEO Company",
  },
] as const;

export const team = [
  {
    name: "Vikas Sharma",
    role: "Co-Founder and Head of Operations",
    initials: "VS",
  },
  { name: "Pradeep", role: "Content Manager", initials: "PR" },
  { name: "Ravina Jangid", role: "Link Building Expert", initials: "RJ" },
  { name: "Aniket Mukherjee", role: "Link Building Expert", initials: "AM" },
] as const;

export const featuredOn = [
  { name: "Search Engine Journal", mark: "SEJ" },
  { name: "HubSpot", mark: "HubSpot" },
  { name: "Forbes", mark: "Forbes" },
  { name: "Entrepreneur", mark: "Entrepreneur" },
] as const;

export const faqs = [
  {
    question: "How will working with Tanot Solutions help grow my business?",
    answer:
      "We focus on qualified traffic, leads, and revenue — not just rankings. From technical SEO and content strategy to high-authority link building, every campaign is built around your goals and designed to attract real buyers.",
  },
  {
    question: "Are your link building services safe and Google-friendly?",
    answer:
      "Yes. We never use private blog networks, bulk link packages, or spammy directories. Every link is earned through genuine outreach on relevant, high-quality websites with real audiences and traffic.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most businesses start seeing early improvements within 3 to 6 months, with stronger compounding growth over 6 to 12 months. Timelines depend on your industry, competition, website health, and starting point.",
  },
  {
    question: "Do you offer complete SEO services or only link building?",
    answer:
      "We offer end-to-end SEO: technical audits, on-page optimization, keyword research, content strategy, local SEO, and link building. You can work with us on a full strategy or choose specific services.",
  },
  {
    question: "Will I have visibility into the work being done?",
    answer:
      "Yes. You receive clear reports showing completed work, links built, rankings, traffic, and progress toward your goals, plus a dedicated point of contact.",
  },
  {
    question: "Do you work with agencies on a white-label basis?",
    answer:
      "Yes. We partner with agencies worldwide to deliver white-label SEO and link building under their brand, with unbranded reports, flexible packages, and complete confidentiality.",
  },
] as const;

export const insights = [
  {
    title: "11 Best GEO Agencies Helping B2B Brands Win AI Search",
    href: "https://tanotsolutions.com/blog/best-geo-agencies/",
    category: "SEO",
    author: "Renu Sharma",
    date: "October 16, 2026",
    image: "/images/insights/geo-agencies.jpg",
    imageWidth: 768,
    imageHeight: 768,
  },
  {
    title: "Link Building for Startups: How to Get Quality Backlinks on a Budget",
    href: "https://tanotsolutions.com/blog/link-building-for-startups/",
    category: "Link Building",
    author: "Renu Sharma",
    date: "October 6, 2026",
    image: "/images/insights/startups.jpg",
    imageWidth: 768,
    imageHeight: 768,
  },
  {
    title:
      "13 White Hat SEO Techniques: How to Rank Higher on Google & AI Search",
    href: "https://tanotsolutions.com/blog/white-hat-seo-techniques/",
    category: "SEO",
    author: "Renu Sharma",
    date: "October 2, 2026",
    image: "/images/insights/white-hat.jpg",
    imageWidth: 768,
    imageHeight: 492,
  },
] as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Link building", href: "#services" },
      { label: "Technical SEO", href: "#services" },
      { label: "AI SEO", href: "#services" },
      { label: "Local SEO", href: "#services" },
      { label: "SaaS SEO", href: "#services" },
      { label: "Content marketing", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Results", href: "#results" },
      { label: "Reviews", href: "#reviews" },
      { label: "Insights", href: "#insights" },
      { label: "FAQ", href: "#faq" },
    ],
  },
] as const;
