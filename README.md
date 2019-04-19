# Tutorial
This tutorial will help you get up and running the React app using the new SDK.

## Setting Up the Application

### Installing initial dependencies
After create a new React app using `create-react-app` we still need to install some dependencies that doesn't come with the boilerplate. These dependencies will help us with things like routing, styling and font icons. But, before that we need to move the current `dependencies` to `devDependencies` this is because we will be using a server to run the built app.

```json
- "dependencies": {
+ "devDependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "2.1.8"
  }
```

After that we can install the new dev dependencies.

```bash
npm i -D react-router-dom highlight.js reactstrap samples-bootstrap-theme \
@fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```
### Create the Home view and initial components
We are going to create a serie of components in order to build our initial welcome page. Create a folder called `views` and then a Compoment called `Home.js`. This component will show a welcome message and some information. 

```jsx
// src/views/Home.js
import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
```

As you can see our `Home.js` component is build with other component pieces. Create a folder called `Compoments` and inside create two new components called `Hero.js`, and `Content.js`.

For our `Hero.js` compoment we need to move the `logo.svg` inside a folder called `assets`.

```jsx
// src/components/Hero.js
import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
```

Since we want to load the content more dinamically, we are going to create a file called `contentData.js` inside a new folder called `utils`. This data will be used inside the `Content.js` component.
```js
// utils/contentData.js
const contentData = [
  {
    title: "Configure other identity providers",
    link: "https://auth0.com/docs/connections",
    description:
      "Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."
  },
  {
    title: "Enable Multifactor Authentication",
    link: "https://auth0.com/docs/multifactor-authentication",
    description:
      "Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."
  },
  {
    title: "Anomaly Detection",
    link: "https://auth0.com/docs/anomaly-detection",
    description:
      "Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."
  },
  {
    title: "Learn About Rules",
    link: "https://auth0.com/docs/rules",
    description:
      "Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."
  }
];

export default contentData;
```

```jsx
// src/components/Content.js
import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps">
        <h2 className="mt-5 text-center">What can I do next?</h2>
          <Row className="d-flex justify-content-between">
            {contentData.map((col, i) => (
              <Col key={i} md={5}>
                <h6 className="mb-3">
                  <a href={col.link}>
                    <FontAwesomeIcon icon="link" />
                    {col.title}
                  </a>
                </h6>
                <p>{col.description}</p>
              </Col>
            ))}
          </Row>
      </div>
    );
  }
}

export default Content;

```

Another component that we need to create for our welcome page is the is the `Footer.js` component:

```jsx
// src/components/Footer.js
import React from "react";

const Footer = () => (
  <footer>
    <div className="logo" />
    <p>
      Sample project provided by <a href="https://auth0.com">Auth0</a>
    </p>
  </footer>
);

export default Footer;
```

### Editing the App component
At the moment we have created our initial components but we need to use them. For that, we need to modify our `App.js` to look like the following code.

```jsx
// src/App.js
import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

import Footer from "./components/Footer";
import Home from "./views/Home";

// styles
import "samples-bootstrap-theme/dist/css/auth0-theme.css";
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

class App extends Component {
  render() {
    return (
      <div id="app">
        <Container className="mt-5">
          <Home/>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;

```

We are almost ready for our first checkpoint. We need to setting up a few styles overrides, so replace the `App.css` with the following code.

```css
/* src/App.css */
.next-steps .fa-link {
  margin-right: 5px;
}

/* Fix for use only flexbox in content area */
.next-steps .row {
  margin-bottom: 0;
}

.next-steps .col-md-5 {
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .next-steps .col-md-5 {
    margin-bottom: 0;
  }
}

.spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

and let's create a file called `initFontAwesome.js` inside our `utils` folder. This file will help us to initialize the Font Awesome library in React properly.

```js
/// src/utils/initFontAwesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(faLink);
}

export default initFontAwesome;
```

**Checkpoint 1:** At this point you can start testing how it looks so far. To start the app, run `npm run start` from the terminal to start the application.

Now go and access it at [http://localhost:3000](http://localhost:3000). You should see the welcome message and a footer.