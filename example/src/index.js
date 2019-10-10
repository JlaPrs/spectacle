import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';
import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.gif'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  mediaQueriesMixin: require('../assets/mixin_media_queries.png'),
  mediaQueriesMixinUsage: require('../assets/mixin_media_queries_usage.png')
};

preloader(images);

const theme = createTheme({
  primary: '#1ee6fa',
  editorBg: '#2b2b2b',
  white: '#fff'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide transition={['zoom']} bgColor="editorBg">
          <Heading size={1} fit caps textColor="">
           Design & Frontend Rest Meeting
          </Heading>
          <div className="itl-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 24.4">
              <path className="branding" fill="#1EE6FA" d="M5.8 24.4V13.7c0-4.8 3.4-8 7.8-8 4.5 0 7.8 3.2 7.8 8v10.7H18V13.7c0-2.8-2.1-4.8-4.5-4.8S9 10.9 9 13.7v10.7H5.8zM33.8 9.3h-6.6v9.6c0 1.7.8 2.3 2.5 2.3h4v3.2h-4.5c-3.4 0-5.4-2.3-5.4-5.9V0h3.4v6.1h6.6v3.2zM56.7 24.4V12c0-3.6 2-5.9 5.4-5.9h3.5v3.2h-3c-1.7 0-2.5.6-2.5 2.3v12.8h-3.4zM39.3 19.1c1.1 1.5 2.8 2.5 4.9 2.5 4 0 5.4-2.4 6.1-5.7l3.4.4c-.4 4.8-4.3 8.5-9.5 8.5-5.1 0-9.5-3.9-9.5-9.5s4.4-9.5 9.5-9.5c4.3 0 7.1 2.2 8.8 5.8l-13.7 7.5zm9.1-8.4c-1.1-1.1-2.1-1.8-4.2-1.8-3.5 0-6 2.6-6 6.3 0 .3 0 .7.1 1l10.1-5.5zM67.8 24.4V0h3.4v24.4h-3.4zM89.3 6.1v10.7c0 4.8-3.4 8-7.8 8-4.5 0-7.8-3.2-7.8-8V6.1H77v10.7c0 2.8 2.1 4.8 4.5 4.8s4.5-2 4.5-4.8V6.1h3.3zM101.7 9.3h-6.5v9.6c0 1.7.8 2.3 2.5 2.3h4v3.2h-4.5c-3.4 0-5.4-2.3-5.4-5.9V0h3.4v6.1h6.5v3.2zM104.1 24.4V6.1h3.4v18.3h-3.4zM119.2 5.7c5.1 0 9.5 3.9 9.5 9.5s-4.4 9.5-9.5 9.5-9.5-3.9-9.5-9.5 4.4-9.5 9.5-9.5zm0 15.9c3.5 0 6-2.6 6-6.3 0-3.7-2.5-6.3-6-6.3s-6 2.6-6 6.3c0 3.7 2.5 6.3 6 6.3zM130.9 24.4V13.7c0-4.8 3.4-8 7.8-8 4.5 0 7.8 3.2 7.8 8v10.7h-3.3V13.7c0-2.8-2.1-4.8-4.5-4.8s-4.5 2-4.5 4.8v10.7h-3.3zM0 24.4V0h3.4v24.4H0zM157.4 14.2s-.1 0-.1-.1h-.1c-1.9-.8-4.5-1.3-4.4-3.2.1-1.3 1.1-2 2.8-2.1 1.4 0 2.7.6 3.8 1.9l2.8-1.7c-1.5-2.1-3.9-3.3-6.2-3.3H155.7c-3.9 0-6 2-6.2 5-.1 2.8 1.8 4.3 4.5 5.4 0 0 .3.1.5.2 0 0 .1 0 .1.1h.1c2 .8 3.6 1.2 3.6 3.1 0 1.3-1.4 2-3 2.1-1.8 0-3.4-.7-4.4-1.9l-2.8 1.7c1.8 2.4 4.3 3.3 7 3.3H155.4c3.9 0 6.2-2.2 6.2-5.3 0-2.9-1.6-4.2-4.2-5.2z"></path>
              <circle className="branding" fill="#1EE6FA" cx="167.7" cy="22.5" r="2.2"></circle>
            </svg>
          </div>

          <Notes>Let's get started!</Notes>
        </Slide>

        {/* WAS'N DAS THEMA ÜBERHAUPT SLIDE */}
        <Slide
            transition={['slide']}
            bgImage={images.city.replace('/', '')}
            bgDarken={0.75}
        >
          <Anim
              onAnim={(forwards, animIndex) => {
                /* eslint-disable */
                console.log('forwards ', forwards);
                console.log('animIndex ', animIndex);
                /* eslint-enable */
              }}
              fromStyle={{
                opacity: 0,
                transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)'
              }}
              toStyle={[
                {
                  opacity: 1,
                  transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)'
                }
              ]}
              easing={'linear'}
              transitionDuration={500}
          >
            <div>
              <Heading size={1} caps fit textColor="primary">
                SCSS Mixins
              </Heading>
              <Text caps fit textColor="tertiary">
                some useful mixins
              </Text>
            </div>
          </Anim>

        </Slide>

        {/* UND WAS SOLLEN MIXINS JETZT SEIN? */}
        <Slide transition={['slide']} bgColor="editorBg">
          <Anim
              onAnim={(forwards, animIndex) => {
                /* eslint-disable */
                console.log('forwards ', forwards);
                console.log('animIndex ', animIndex);
                /* eslint-enable */
              }}
              toStyle={[
                {
                  opacity: 1,
                  transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)'
                },
                {
                  opacity: 1,
                  transform:
                      'translate3d(0px, -100px, 0px)  scale(0.8) rotate(0deg)'
                }
              ]}
              easing={'bounce'}
              transitionDuration={500}
          >
            <div>
              <Heading size={3} caps textColor="white">
                Was'n das?
              </Heading>
            </div>
          </Anim>
          <Anim
              onAnim={(forwards, animIndex) => {
                /* eslint-disable */
                console.log('forwards ', forwards);
                console.log('animIndex ', animIndex);
                /* eslint-enable */
              }}
              fromStyle={{
                opacity: 0,
                transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)'
              }}
              toStyle={[
                {
                  opacity: 1,
                  transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)'
                }
              ]}
              easing={'bounce'}
              transitionDuration={500}
          >
              <BlockQuote>
                <Quote style="font-size:2.9rem;line-height:3rem;letter-spacing:">
                  Mixins allow you to define styles that can be re-used throughout your stylesheet.
                </Quote>
                <Cite>sass-lang.com</Cite>
              </BlockQuote>
          </Anim>
          <Notes textColor="white">They make it easy to avoid using non-semantic classes like .float-left, and to distribute collections of styles in libraries.</Notes>
        </Slide>

        {/* ERKLÄR MA: Media queries Mixins */}
        <Slide transition={['zoom', 'fade']} bgColor="editorBg">
          <Heading caps fit margin="0 0 60px 0">
            Media Queries Mixin
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.mediaQueriesMixin.replace('/', '')} margin="0px auto 40px" />
            </Fill>
            <Fill>
              <Image src={images.mediaQueriesMixinUsage.replace('/', '')} margin="0px auto 40px" />
            </Fill>
          </Layout>
        </Slide>

        {/* ERKLÄR MA: FONT Mixins */}
        <Slide transition={['zoom', 'fade']} bgColor="editorBg">
          <Heading size={5} caps margin="0 0 60px 0">
            Font Mixin
          </Heading>
          <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/mixinFont.example')}
              margin="20px auto"
              overflow="overflow"
          />
        </Slide>

        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="editorBg"
        >
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            overflow="overflow"
          />
          <Notes>
            <List>
              <ListItem>talk about that</ListItem>
              <ListItem>and that</ListItem>
              <ListItem>and then this</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide goTo={3}>
          <ComponentPlayground theme="dark" />
        </Slide>
        {/* Next slide */}


        <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
            Mix it up!
          </Heading>
          <Heading size={6} textColor="tertiary">
            You can even jump to different slides with a standard button or
            custom component!
          </Heading>
          <GoToAction margin="1em" slide={8}>
            Jump to Slide 8
          </GoToAction>
          <GoToAction
            render={goToSlide => (
              <select
                defaultValue=""
                style={{
                  background: '#000',
                  color: '#fff',
                  fontFamily: theme.print.fonts.primary,
                  fontSize: '1.1em'
                }}
                onChange={({ target }) => goToSlide(target.value)}
              >
                <option value="" disabled>
                  Custom Slide Picker
                </option>
                <option value="wait-what">Wait What!? Slide</option>
                <option value={3}>Slide 3</option>
              </select>
            )}
          />
          <Notes>Doesn't work in export view, though</Notes>
        </Slide>
        <Slide
          transition={['slide']}
          bgDarken={0.75}
          getAnimStep={this.updateSteps}
        >
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {this.state.steps}
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            Flexible Layouts
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Right
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
          </Markdown>
          <Notes>Who doesn't love markdown?</Notes>
        </Slide>
        {MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
          <Notes>So smooth</Notes>
        </Slide>
        <SlideSet
          style={{ backgroundColor: 'blue', border: '10px solid cyan' }}
        >
          <Slide transition={['fade']} textColor="tertiary">
            <List>
              <Appear>
                <ListItem>Inline style based theme system</ListItem>
              </Appear>
              <Appear>
                <ListItem>Autofit text</ListItem>
              </Appear>
              <Appear>
                <ListItem>Flexbox layout system</ListItem>
              </Appear>
              <Appear>
                <ListItem>PDF export</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="greenCheck">Customized bullets</ListItem>
              </Appear>
              <Appear>
                <ListItem>And...</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive />
          </Slide>
        </SlideSet>
        <Slide transition={['slide']} bgColor="primary">
          <Heading
            size={4}
            caps
            textColor="secondary"
            bgColor="white"
            margin={10}
          >
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
          <Notes>Hard to find cities without any pizza</Notes>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="https://www.formidable.com">
            <Image width="100%" src={images.logo} />
          </Link>
          <Notes>Check us out → https://www.formidable.com</Notes>
        </Slide>
      </Deck>
    );
  }
}
