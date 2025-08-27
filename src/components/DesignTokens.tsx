import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface ColorToken {
  name: string;
  value: string;
  usage: string;
}

interface TypographyToken {
  element: string;
  size: string;
  weight: string;
  usage: string;
}

const colorTokens: ColorToken[] = [
  { name: 'Primary', value: 'var(--primary)', usage: 'Main brand color, CTAs' },
  { name: 'Secondary', value: 'var(--secondary)', usage: 'Supporting elements' },
  { name: 'Accent', value: 'var(--accent)', usage: 'Highlights, hover states' },
  { name: 'Muted', value: 'var(--muted)', usage: 'Backgrounds, disabled states' },
  { name: 'Destructive', value: 'var(--destructive)', usage: 'Error states, warnings' },
];

const typographyTokens: TypographyToken[] = [
  { element: 'H1', size: 'text-2xl', weight: 'font-medium', usage: 'Page titles' },
  { element: 'H2', size: 'text-xl', weight: 'font-medium', usage: 'Section headings' },
  { element: 'H3', size: 'text-lg', weight: 'font-medium', usage: 'Subsection headings' },
  { element: 'Body', size: 'text-base', weight: 'font-normal', usage: 'Main content' },
  { element: 'Caption', size: 'text-sm', weight: 'font-normal', usage: 'Supporting text' },
];

const spacingScale = [
  { name: 'xs', value: '0.25rem', usage: 'Minimal spacing' },
  { name: 'sm', value: '0.5rem', usage: 'Small gaps' },
  { name: 'md', value: '1rem', usage: 'Standard spacing' },
  { name: 'lg', value: '1.5rem', usage: 'Section spacing' },
  { name: 'xl', value: '2rem', usage: 'Large sections' },
  { name: '2xl', value: '3rem', usage: 'Major sections' },
];

export function DesignTokens() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Design System Tokens</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Foundational design tokens that ensure consistency across all components and layouts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Color Palette */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {colorTokens.map((token) => (
                <div key={token.name} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg border"
                    style={{ backgroundColor: token.value }}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{token.name}</div>
                    <div className="text-sm text-muted-foreground">{token.usage}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Typography Scale */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Typography Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {typographyTokens.map((token) => (
                <div key={token.element} className="space-y-1">
                  <div className={`${token.size} ${token.weight}`}>
                    {token.element} Sample
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{token.size}</Badge>
                    <Badge variant="outline">{token.weight}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{token.usage}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Spacing System */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Spacing System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {spacingScale.map((space) => (
                <div key={space.name} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-primary h-4 rounded"
                      style={{ width: space.value }}
                    />
                    <div className="flex gap-2">
                      <Badge variant="secondary">{space.name}</Badge>
                      <span className="text-sm text-muted-foreground">{space.value}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{space.usage}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Additional Design Tokens */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Border Radius</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Small', class: 'rounded-sm', usage: 'Subtle rounding' },
                { name: 'Medium', class: 'rounded-md', usage: 'Standard rounding' },
                { name: 'Large', class: 'rounded-lg', usage: 'Prominent rounding' },
                { name: 'Extra Large', class: 'rounded-2xl', usage: 'Cards, major elements' },
              ].map((radius) => (
                <div key={radius.name} className="flex items-center gap-3">
                  <div className={`w-12 h-8 bg-primary ${radius.class}`} />
                  <div className="flex-1">
                    <div className="font-medium">{radius.name}</div>
                    <div className="text-sm text-muted-foreground">{radius.usage}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Shadow System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Small', class: 'shadow-sm', usage: 'Subtle elevation' },
                { name: 'Medium', class: 'shadow-md', usage: 'Cards, dropdowns' },
                { name: 'Large', class: 'shadow-lg', usage: 'Modals, overlays' },
                { name: 'Extra Large', class: 'shadow-2xl', usage: 'Major elevation' },
              ].map((shadow) => (
                <div key={shadow.name} className="flex items-center gap-3">
                  <div className={`w-12 h-8 bg-card rounded-md ${shadow.class}`} />
                  <div className="flex-1">
                    <div className="font-medium">{shadow.name}</div>
                    <div className="text-sm text-muted-foreground">{shadow.usage}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}