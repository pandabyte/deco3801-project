import * as React from 'react';
import { Header, Search, Divider } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import ChemicalSearchStore from './ChemicalSearchStore';

@observer
export default class ChemicalSearch extends React.Component {


    handleSearchChange = () => {

    }
    render() {
        const { isLoading, results } = ChemicalSearchStore;
        return (
            <div>

                <Header> Perform global chemical search </Header>
                <Search
                    loading={isLoading}
                    results={results}
                />

                <Header> Results of Search </Header>

                <Divider />
            </div>
        )
    }
}
