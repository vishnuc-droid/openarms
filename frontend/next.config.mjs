/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/blog', destination: '/blogs', permanent: true },
      { source: '/adult-counseling', destination: '/adult-counseling-oklahoma-city', permanent: true },
      { source: '/child-adolescent-counseling', destination: '/child-counseling-services-oklahoma-city', permanent: true },
      { source: '/family-counseling', destination: '/family-therapy-oklahoma-city', permanent: true },
      { source: '/marriage-couples-therapy', destination: '/marriage-counseling-oklahoma-city', permanent: true },
      { source: '/grief-and-loss-counseling', destination: '/grief-counseling-oklahoma-city', permanent: true },
      { source: '/depression-anxiety-counseling', destination: '/depression-anxiety-counseling-oklahoma', permanent: true },
      { source: '/foster-care-adoption-counseling', destination: '/services/foster-care-adoption-counseling', permanent: true },
      { source: '/pro-bono-therapy-services', destination: '/pro-bono-counseling-okc', permanent: true },
      { source: '/community-outreach-support-programs', destination: '/services/community-outreach-support', permanent: true },
      { source: '/trauma-informed-care-training', destination: '/training-speaking/trauma-mental-health-training', permanent: true },
      { source: '/parenting-skills-development', destination: '/parenting-classes-okc', permanent: true },
    ];
  },
};

export default nextConfig;
