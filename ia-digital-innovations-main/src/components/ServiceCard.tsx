
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick: () => void;
  className?: string;
  isActive?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  onClick,
  className,
  isActive = false,
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "service-card cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg p-4 flex flex-col items-center justify-center transition-all", 
        isActive && "border-primary border-2",
        className
      )}
      onClick={onClick}
    >
      <Icon className="h-10 w-10 mb-2 text-primary" />
      <h3 className="font-medium text-center text-secondary-foreground">{title}</h3>
      {description && (
        <p className="text-secondary-foreground/70 text-sm text-center mt-1">{description}</p>
      )}
    </div>
  );
};

export default ServiceCard;
