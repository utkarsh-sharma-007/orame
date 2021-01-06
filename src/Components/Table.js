import React, { useState } from "react";
import MaterialTable from 'material-table';

function Table() {

  return (
    <>
        <MaterialTable
            title="Remote Data Preview"
            columns={[
                {
                title: 'Avatar',
                field: 'avatar',
                render: rowData => (
                    <img
                    style={{ height: 36, borderRadius: '50%' }}
                    src={rowData.avatar}
                    />
                ),
                },
                { title: 'Id', field: 'id' },
                { title: 'First Name', field: 'first_name' },
                { title: 'Last Name', field: 'last_name' },
            ]}
            data={query =>
                new Promise((resolve, reject) => {
                let url = 'http://jsonplaceholder.typicode.com/photos?'
                url += '_start=' + query.page
                url += '&_limit=' + query.pageSize
                fetch(url)
                    .then(response => response.json())
                    .then(result => {
                    resolve({
                        data: result.data,
                        page: result.page - 1,
                        totalCount: result.total,
                    })
                    })
                })
            }
            />
    </>
  );
}

export default Table;
