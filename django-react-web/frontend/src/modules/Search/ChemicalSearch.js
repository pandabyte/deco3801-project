import * as React from 'react';
import _ from 'lodash'
import faker from 'faker'

import { Header, Search, Divider } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import ChemicalSearchStore from './ChemicalSearchStore';

/* TODO: change to chemical compounds when we have model*/
const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}));

@observer
export default class ChemicalSearch extends React.Component {

    componentWillMount = () => {
        ChemicalSearchStore.clear();
    }

    handleResultSelect = (e, { result }) => {
        ChemicalSearchStore.value = result.title;
    }

    handleSearchChange = (e, { value }) => {
        ChemicalSearchStore.isLoading = true;
        ChemicalSearchStore.value = value;

        setTimeout(() => {
            if (ChemicalSearchStore.value.length < 1) {
                return ChemicalSearchStore.clear();
            }

            const re = new RegExp(_.escapeRegExp(ChemicalSearchStore.value), 'i')
            const isMatch = result => re.test(result.title)

            ChemicalSearchStore.isLoading = false;
            ChemicalSearchStore.results = _.filter(source, isMatch);
        }, 300)
    }

    render() {
        const { isLoading, results, value } = ChemicalSearchStore;
        return (
            <div>

                <Header> Perform global chemical search </Header>

                <Search
                    fluid
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    results={results}
                    value={value}
                />

                <Header> Results of Search </Header>

                <Divider />
            </div>
        )
    }
}
