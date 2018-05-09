const React = require('react');
const GovUK = require('govuk-react-components/components/layout');
const PhaseBanner = require('govuk-react-components/components/phase-banner');

const Breadcrumbs = require('../components/breadcrumbs');

const StatusBar = () => ({
  __html: `&lt;span&gt;Hi Joe&lt;/span&gt;`
});

const Layout = ({
  children,
  scripts,
  crumbs
}) => (
  <GovUK
    propositionHeader="Research and testing with animals"
    stylesheets={['/public/css/app.css']}
    scripts={scripts}
    statusBar={StatusBar}
  >
    <main className="main" id="content">
      <PhaseBanner phase="prototype" />
      <Breadcrumbs crumbs={crumbs} />
      <div className="grid-row">
        <div className="column-full">
          <div id="page-component">
            { children }
          </div>
        </div>
      </div>
    </main>
  </GovUK>
);

module.exports = Layout;
