/**
 * StructuredData Component
 * 
 * Renders JSON-LD structured data for SEO purposes.
 * Supports Restaurant, Organization, and LocalBusiness schemas.
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Schema type: 'restaurant', 'organization', or 'localBusiness'
 * @param {Object} props.data - Schema data object
 */
export default function StructuredData({ type, data }) {
  if (!type || !data) {
    return null;
  }

  // Base schema structure
  let schema = {};

  switch (type) {
    case "restaurant":
      schema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        ...data,
      };
      break;

    case "organization":
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        ...data,
      };
      break;

    case "localBusiness":
      schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        ...data,
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
