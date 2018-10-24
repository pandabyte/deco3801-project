import React from 'react'
import renderer from 'react-test-renderer'

import Help from '../modules/Help/Help';
import Acquisition from '../modules/Acquisition/Acquisition';
import Error404 from '../modules/Error/Error404';
import Home from '../modules/Home/Home';
import AppHeader from '../modules/Layout/AppHeader';
import AppFooter from '../modules/Layout/AppFooter';
import Process from '../modules/Process/Process';
import ReportView from '../modules/Report/ReportView';
import ChemicalSearch from '../modules/Search/ChemicalSearch';

/**
 * Test suite for checking UI does not change unexpectedly.
 * Test suite runs unit test for each major UI react component.
 * Test fails if the images do not match.
 */
describe('Set: Rendering react components', () => {

    it('Help component', () => {
        const tree = renderer
            .create(<Help />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('Acquisition component', () => {
        const tree = renderer
            .create(<Acquisition />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('Error component', () => {
        const tree = renderer
            .create(<Error404 />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('Home component', () => {
        const tree = renderer
            .create(<Home />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('Header component', () => {
        const tree = renderer
            .create(<AppHeader />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('Footer component', () => {
        const tree = renderer
            .create(<AppFooter />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('Process component', () => {
        const tree = renderer
            .create(<Process />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });
 

    it('Report component', () => {
        const tree = renderer
            .create(<ReportView />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    it('Search component', () => {
        const tree = renderer
            .create(<ChemicalSearch />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });
});