import React from 'react';
import MarkdownHeader from '../MarkdownHeader';
import Section from '../Section';
import Comment from '../Comment';
import Text from '../Text';
import MarkdownButton from '../MarkdownButton';

function ProjectText({ title, technologies, description, githubLink, devpostLink, liveLink, youtubeLink }) {
  const paragraphs = description.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <Section className="max-w-[900px]">
      <MarkdownHeader headingLevel="2" text={title} className="text-xl md:text-3xl mb-3" />
      <Comment>{technologies}</Comment>
      {paragraphs.map((paragraph, index) => (
        <Text key={index} className="mb-4">{paragraph}</Text>
      ))}
      <div className="flex">
        {githubLink &&
          <MarkdownButton as="a" href={githubLink} target="_blank" rel="noreferrer" className="mr-4">
            [GitHub]
          </MarkdownButton>
        }
        {devpostLink &&
          <MarkdownButton as="a" href={devpostLink} target="_blank" rel="noreferrer" className="mr-4">
            [Devpost]
          </MarkdownButton>
        }
        {youtubeLink &&
          <MarkdownButton as="a" href={youtubeLink} target="_blank" rel="noreferrer" className="mr-4">
            [YouTube]
          </MarkdownButton>
        }
        {liveLink &&
          <MarkdownButton as="a" href={liveLink} target="_blank" rel="noreferrer">
            [Live Preview]
          </MarkdownButton>
        }
      </div>
    </Section>
  );
}

export default ProjectText;
