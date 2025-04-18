
interface SectionTitleProps {
    title: string
    highlight: string
    subtitle?: string
    center?: boolean
}

const SectionTitle = ({ title, highlight, subtitle, center = true }: SectionTitleProps) => {
    return (
      <div className={`mb-16 ${center ? 'text-center' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          {title} <span className="text-primary">{highlight}</span>
        </h2>
        {subtitle && (
          <p className={`max-w-2xl ${center ? 'mx-auto' : ''} text-gray-600 dark:text-gray-300`}>
            {subtitle}
          </p>
        )}
      </div>
    );
  };
  
  export default SectionTitle;