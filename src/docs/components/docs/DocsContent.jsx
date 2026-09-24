// Data imports
import { getDocsData } from '@/docs/data/docsData';

// UI Components
import { Section, SectionTitle, SectionDescription, Grid, DemoBox, CodeBlock, Label } from '@/docs/components/ui/Section';

// Documentation Pages
import GettingStarted from '@/docs/components/docs/GettingStarted';

export default function DocsContent({ activeTab, language, animation, selectedVariant, setSelectedVariant }) {
  if (activeTab === 'getting-started') {
    return <GettingStarted language={language} />;
  }

  const docsData = getDocsData(language, animation);
  const currentDoc = docsData[activeTab];

  if (!currentDoc) {
    return <GettingStarted language={language} />;
  }

  return (
    <Section>
      <SectionTitle>{currentDoc.title}</SectionTitle>
      <SectionDescription>{currentDoc.description}</SectionDescription>
      
      {currentDoc.variants[selectedVariant] && (
        <CodeBlock style={{ marginBottom: '32px' }}>
          {currentDoc.variants[selectedVariant].code}
        </CodeBlock>
      )}

      <Grid gap="24px" minWidth="300px">
        {currentDoc.variants.map((variant, index) => (
          <DemoBox 
            key={index}
            isActive={selectedVariant === index}
            onClick={() => setSelectedVariant(index)}
          >
            <Label>{variant.label}</Label>
            {variant.render}
          </DemoBox>
        ))}
      </Grid>
    </Section>
  );
}
