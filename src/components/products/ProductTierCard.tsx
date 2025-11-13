import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface ProductTierCardProps {
  tier: string;
  title: string;
  description: string;
  features: string[];
  onStartOrder: () => void;
}

export function ProductTierCard({ tier, title, description, features, onStartOrder }: ProductTierCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">{tier}</Badge>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button onClick={onStartOrder} className="w-full">
          Start order – {title}
        </Button>
      </CardContent>
    </Card>
  );
}
