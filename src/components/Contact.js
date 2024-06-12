import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import Link from './Link';

function Contact() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Contact" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          If you're interested in reaching out and want to chat, please just reach out via any of the links below!
        </Text>
      </Section>

      <Section>
        <Text className="text-lg">
          [<span className="text-pink">Email</span>] (<Link targetBlank href="mailto:marcgavvid@gmail.com">mailto:marcgavvid@gmail.com</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Github</span>] (<Link targetBlank href="https://github.com/MarcVidalCodes">https://github.com/MarcVidalCodes</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">LinkedIn</span>] (<Link targetBlank href="https://www.linkedin.com/in/marc-vidal-979148278/">https://www.linkedin.com/in/marc-vidal-979148278/</Link>)
        </Text>
      </Section>
    </div>
  )
}

export default Contact;
