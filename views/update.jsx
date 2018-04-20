import React from 'react';
import App from './layouts/app';
import connect from '../src/helpers/connector';

import { Button } from 'govuk-react-components/components/button';
import Input from 'govuk-react-components/components/forms/input-text';

import Diff from './components/diff';

class Update extends React.Component {

  render() {

    const {
      store,
      changeset,
      establishment: { name }
    } = this.props;
    return <App
      store={store}
      crumbs={[{ label: 'Licensed premises', href: '/places' }, 'Update']}
      scripts={['/public/js/pages/update.js']}
    >
      <h2 className="headline">{name}</h2>
      <h1>Update licensed premises</h1>

      { changeset.length && <h3>Showing { changeset.length } updated record(s)</h3> }
      { changeset.map((record) => <Diff { ...record } key={ record.id } />) }

      <form method="post" action="" encType="multipart/form-data">
        <Input type="file" name="csv" label="Select a file" />
        <Button type="submit">Upload</Button>
      </form>
    </App>;
  }

}

export default connect(Update, 'changeset');
