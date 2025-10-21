import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import {
  SkeletonText,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonCard,
  SkeletonList,
  SkeletonTable,
  SkeletonProfile,
  SkeletonForm,
  SkeletonButton,
  SkeletonBlog,
  SkeletonCommentList,
  SkeletonGrid,
} from './components/skeletons';
import { CardExample, ProfileExample, ListExample, TableExample } from './components/examples';
import { Section, SectionTitle, SectionDescription, Grid, DemoBox, Label } from './components/ui/Section';
import { ControlPanel, ControlGroup, Button, Select, Toggle } from './components/ui/Controls';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  padding: 20px 16px;
  
  @media (min-width: 768px) {
    padding: 40px 24px;
  }
  
  @media (min-width: 1024px) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 60px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, ${props => props.theme.accentPrimary} 0%, ${props => props.theme.accentSecondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 40px;
    margin: 0 0 16px 0;
  }
  
  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.text};
  opacity: 0.8;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
  
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background: linear-gradient(135deg, ${props => props.theme.accentPrimary}, ${props => props.theme.accentSecondary});
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin: 0 4px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${props => props.theme.border};
  margin: 48px 0;
  opacity: 0.3;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 80px;
  padding: 40px 20px;
  color: ${props => props.theme.text};
  opacity: 0.7;
  font-size: 14px;
  border-top: 2px solid ${props => props.theme.border};
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const [animation, setAnimation] = useState('shimmer');
  const [showExamples, setShowExamples] = useState(true);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Container>
          <Header>
            <Title>Skeleton Loader UI</Title>
            <Subtitle>
              Beautiful skeleton components with smooth animations
            </Subtitle>
            <div style={{ marginTop: '20px' }}>
              <Badge>React</Badge>
              <Badge>Styled Components</Badge>
              <Badge>CSS Animations</Badge>
            </div>
          </Header>

          <ControlPanel>
            <ControlGroup>
              <Toggle>
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={() => setIsDark(!isDark)}
                />
                Dark Mode
              </Toggle>

              <Select value={animation} onChange={(e) => setAnimation(e.target.value)}>
                <option value="shimmer">Shimmer Animation</option>
                <option value="pulse">Pulse Animation</option>
              </Select>

              <Toggle>
                <input
                  type="checkbox"
                  checked={showExamples}
                  onChange={() => setShowExamples(!showExamples)}
                />
                Show Real Content After Loading
              </Toggle>
            </ControlGroup>
          </ControlPanel>

          {/* Text Skeletons */}
          <Section>
            <SectionTitle>Text Skeletons</SectionTitle>
            <SectionDescription>
              Versatile text loading placeholders with customizable lines and widths.
            </SectionDescription>
            <Grid gap="24px">
              <DemoBox>
                <Label>Single Line</Label>
                <SkeletonText lines={1} animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Multiple Lines</Label>
                <SkeletonText lines={3} animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Custom Width</Label>
                <SkeletonText lines={3} lastLineWidth="50%" animation={animation} />
              </DemoBox>
            </Grid>
          </Section>

          {/* Avatar Skeletons */}
          <Section>
            <SectionTitle>Avatar Skeletons</SectionTitle>
            <SectionDescription>
              Profile picture placeholders with optional text labels.
            </SectionDescription>
            <Grid gap="24px">
              <DemoBox>
                <Label>Circle Avatar</Label>
                <SkeletonAvatar size="60px" animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Square Avatar</Label>
                <SkeletonAvatar size="60px" shape="square" animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Avatar with Text</Label>
                <SkeletonAvatar size="60px" withText textLines={2} animation={animation} />
              </DemoBox>
            </Grid>
          </Section>

          {/* Image Skeletons */}
          <Section>
            <SectionTitle>Image Skeletons</SectionTitle>
            <SectionDescription>
              Image loading placeholders with responsive dimensions.
            </SectionDescription>
            <Grid minWidth="250px" gap="24px">
              <DemoBox>
                <Label>Standard Image</Label>
                <SkeletonImage height="180px" animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Wide Image</Label>
                <SkeletonImage height="120px" animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Square Image</Label>
                <SkeletonImage aspectRatio="1" animation={animation} />
              </DemoBox>
            </Grid>
          </Section>

          <Divider />

          {/* Card Skeletons */}
          <Section>
            <SectionTitle>Card Skeletons</SectionTitle>
            <SectionDescription>
              Complete card layouts with various configurations for different use cases.
            </SectionDescription>
            <Grid minWidth="300px" gap="24px">
              <div>
                <Label>Default Card</Label>
                {showExamples ? (
                  <CardExample variant="default" />
                ) : (
                  <SkeletonCard variant="default" animation={animation} />
                )}
              </div>
              <div>
                <Label>Card with Image</Label>
                {showExamples ? (
                  <CardExample variant="with-image" />
                ) : (
                  <SkeletonCard variant="with-image" animation={animation} />
                )}
              </div>
              <div>
                <Label>Card with Avatar</Label>
                {showExamples ? (
                  <CardExample variant="with-avatar" />
                ) : (
                  <SkeletonCard variant="with-avatar" animation={animation} />
                )}
              </div>
            </Grid>
          </Section>

          {/* Profile Skeletons */}
          <Section>
            <SectionTitle>Profile Skeletons</SectionTitle>
            <SectionDescription>
              User profile loading states with different detail levels.
            </SectionDescription>
            <Grid minWidth="350px" gap="24px">
              <div>
                <Label>Simple Profile</Label>
                {showExamples ? (
                  <ProfileExample variant="default" />
                ) : (
                  <SkeletonProfile variant="default" animation={animation} />
                )}
              </div>
              <div>
                <Label>Detailed Profile</Label>
                {showExamples ? (
                  <ProfileExample variant="detailed" />
                ) : (
                  <SkeletonProfile variant="detailed" animation={animation} />
                )}
              </div>
            </Grid>
          </Section>

          {/* List Skeletons */}
          <Section>
            <SectionTitle>List Skeletons</SectionTitle>
            <SectionDescription>
              List item placeholders perfect for feeds and directories.
            </SectionDescription>
            <Grid minWidth="350px" gap="24px">
              <div>
                <Label>Default List</Label>
                {showExamples ? (
                  <ListExample variant="default" />
                ) : (
                  <SkeletonList items={5} variant="default" animation={animation} />
                )}
              </div>
              <div>
                <Label>List with Avatars</Label>
                {showExamples ? (
                  <ListExample variant="with-avatar" />
                ) : (
                  <SkeletonList items={5} variant="with-avatar" animation={animation} />
                )}
              </div>
            </Grid>
          </Section>

          {/* Table Skeleton */}
          <Section>
            <SectionTitle>Table Skeleton</SectionTitle>
            <SectionDescription>
              Data table loading placeholders with multiple variants and configurations.
            </SectionDescription>
            <Grid minWidth="350px" gap="24px">
              <div>
                <Label>Default Table</Label>
                {showExamples ? (
                  <TableExample />
                ) : (
                  <SkeletonTable rows={5} columns={4} animation={animation} />
                )}
              </div>
              <div>
                <Label>Table with Actions</Label>
                <SkeletonTable rows={4} columns={3} variant="with-actions" animation={animation} />
              </div>
              <div>
                <Label>Table with Avatars</Label>
                <SkeletonTable rows={4} columns={3} variant="with-avatars" animation={animation} />
              </div>
              <div>
                <Label>Compact Table</Label>
                <SkeletonTable rows={6} columns={4} variant="compact" animation={animation} />
              </div>
              <div>
                <Label>Table with Pagination</Label>
                <SkeletonTable rows={5} columns={4} variant="with-pagination" animation={animation} />
              </div>
            </Grid>
          </Section>

          {/* Form Skeleton */}
          <Section>
            <SectionTitle>Form Skeleton</SectionTitle>
            <SectionDescription>
              Form loading states with input fields and buttons.
            </SectionDescription>
            <Grid minWidth="350px" gap="24px">
              <div>
                <Label>Contact Form</Label>
                <SkeletonForm fields={3} animation={animation} />
              </div>
              <div>
                <Label>Registration Form</Label>
                <SkeletonForm fields={5} animation={animation} />
              </div>
            </Grid>
          </Section>

          {/* Button Skeleton */}
          <Section>
            <SectionTitle>Button Skeleton</SectionTitle>
            <SectionDescription>
              Loading states for buttons and action elements.
            </SectionDescription>
            <Grid minWidth="200px" gap="24px">
              <DemoBox>
                <Label>Primary Button</Label>
                <SkeletonButton width="140px" height="44px" animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Small Button</Label>
                <SkeletonButton width="100px" height="32px" animation={animation} />
              </DemoBox>
              <DemoBox>
                <Label>Full Width Button</Label>
                <SkeletonButton height="48px" fullWidth animation={animation} />
              </DemoBox>
            </Grid>
          </Section>

          <Divider />

          {/* Blog Skeleton */}
          <Section>
            <SectionTitle>Blog Post Skeleton</SectionTitle>
            <SectionDescription>
              Complete blog post layouts with different configurations.
            </SectionDescription>
            <Grid minWidth="350px" gap="24px">
              <div>
                <Label>Simple Blog Post</Label>
                <SkeletonBlog variant="default" animation={animation} />
              </div>
              <div>
                <Label>Blog with Image</Label>
                <SkeletonBlog variant="with-image" animation={animation} />
              </div>
              <div>
                <Label>Full Blog Post</Label>
                <SkeletonBlog variant="full" animation={animation} />
              </div>
            </Grid>
          </Section>

          {/* Comment Skeleton */}
          <Section>
            <SectionTitle>Comment Skeleton</SectionTitle>
            <SectionDescription>
              Comment section loading states with nested replies support.
            </SectionDescription>
      <div>
              <Label>Comment Thread</Label>
              <SkeletonCommentList items={4} withReplies animation={animation} />
      </div>
          </Section>

          {/* Grid Skeleton */}
          <Section>
            <SectionTitle>Grid Skeleton</SectionTitle>
            <SectionDescription>
              Pre-built grid layouts for product galleries, portfolios, and more.
            </SectionDescription>
            <div>
              <Label>Product Grid (3 columns)</Label>
              <SkeletonGrid items={6} minWidth="250px" cardVariant="with-image" animation={animation} />
      </div>
          </Section>

          <Footer>
            <p>Made by Mikens</p>
          </Footer>
        </Container>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
