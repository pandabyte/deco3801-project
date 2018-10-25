import * as React from 'react';
import _ from 'lodash'

import { Header, Search, Divider, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import Mock from './Mock';
import ChemicalSearchStore from './ChemicalSearchStore';


@observer
export default class ChemicalSearch extends React.Component {

    /* Set initial states */
    componentWillMount = () => {
        ChemicalSearchStore.clear();
    }

    /* Event handler for selecting element from search bar */
    handleResultSelect = (e, { result }) => { ChemicalSearchStore.value = result.title; }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        ChemicalSearchStore.updateStateKeyValue('isLoading', true);
        ChemicalSearchStore.updateStateKeyValue('value', value);

        setTimeout(() => {
            if (ChemicalSearchStore.state.value.length < 1) return ChemicalSearchStore.clear()

            const re = new RegExp(_.escapeRegExp(ChemicalSearchStore.state.value), 'i')
            const isMatch = (result) => re.test(result.title)


            ChemicalSearchStore.updateStateKeyValue('isLoading', false);
            ChemicalSearchStore.updateStateKeyValue('results', _.filter(Mock.chemicals.slice(), isMatch));
        }, 300)
    }


    render() {
        const { isLoading, value, results } = ChemicalSearchStore.state;

        return (
            <div className='p-5'>
                <Segment>
                    <Header> Perform a global search for a chemical compound </Header>
                    <Divider />
                    <Search
                        input={{ fluid: true }}
                        placeholder={'Please insert the identifier of your chemical (e.g. name, CAS, SMILES)'}
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={results}
                        value={value}
                    />
                </Segment>
            </div>
        )
    }
}
