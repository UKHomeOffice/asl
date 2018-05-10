import React from 'react';
import GovUK from 'govuk-react-components/components/layout';
import PhaseBanner from 'govuk-react-components/components/phase-banner';

import StatusBar from '../containers/status-bar';
import Breadcrumbs from '../components/breadcrumbs';

const Layout = ({
  children,
  scripts,
  crumbs
}) => (
  <GovUK
    propositionHeader="Research and testing with animals"
    stylesheets={['/public/css/app.css']}
    scripts={scripts}
    headerContent={<StatusBar />}
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
