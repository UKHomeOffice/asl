import React from 'react';

const Diff = ({
  before,
  after
}) => {
  if (!Array.isArray(before)) {
    return <React.Fragment>
      <span className={ after !== undefined ? 'before' : '' }>{ before.toString() }</span>
      {
        after !== undefined && <span className="after">{ after }</span>
      }
    </React.Fragment>;
  }
  return <span className="array">
    {
      before.map(a => {
        return !after || after.includes(a) ? <span key={ a }>{ a }</span> : <span className="before" key={ a }>{ a }</span>;
      })
    }
    {
      after && after.map(a => {
        return before.includes(a) ? null : <span className="after" key={ a }>{ a }</span>;
      })
    }
  </span>;
};

const DiffTable = ({
  existing,
  changes,
  id
}) => {
  return <tr>
    {
      Object.keys(existing).map(key => {
        return <td key={key}>
          <Diff before={existing[key]} after={changes[key]} />
        </td>;
      })
    }
    <td>
      <form action={`/places/update/${id}`} method="post">
        <button type="submit" className="button">Remove</button>
      </form>
    </td>
  </tr>
};

module.exports = DiffTable;
