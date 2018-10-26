import React from "react";
import { shallow } from "enzyme";
import { Divider, Header, Grid, Search, Segment, Menu, Icon, Container } from 'semantic-ui-react';
import { Provider } from 'mobx-react';


import AppHeader from '../modules/Layout/AppHeader';
import AppFooter from '../modules/Layout/AppFooter';
import ChemicalSearch from "../modules/Search/ChemicalSearch";
import Error404 from '../modules/Error/Error404';
import Dashboard from '../modules/Dashboard/Dashboard';
import RootContainer from '../RootContainer';
import App from '../App';

describe('Set: Test shallow rendering of React component', () => {
    /* Configure local storage */
    beforeAll(() => {
        var localStorageMock = (function () {
            var store = {};
            return {
            getItem: function (key) {
                return store[key];
            },
            setItem: function (key, value) {
                store[key] = value.toString();
            },
            clear: function () {
                store = {};
            },
            removeItem: function (key) {
                delete store[key];
            }
            };
        })();
      
      Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    });

    test("Shallow Test: App Component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Provider).length).toEqual(1);
        expect(wrapper.find(RootContainer).length).toEqual(1);
    });

    test("Shallow Test: Error Component", () => {
        const wrapper = shallow(<Error404 />);
        expect(wrapper.find(Divider).length).toEqual(1);
        expect(wrapper.find('p').length).toEqual(2);
        expect(wrapper.find('div').length).toEqual(3);
    });

    test("Shallow Test: AppHeader Component", () => {
        const wrapper = shallow(<AppHeader />);
        expect(wrapper.find(Header).length).toEqual(1);
        expect(wrapper.find('div').length).toEqual(1);
    });

    test("Shallow Test: AppFooter Component", () => {
        const wrapper = shallow(<AppFooter />);
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('br').length).toEqual(1);
        expect(wrapper.find(Grid).length).toEqual(1);
        expect(wrapper.find(Grid.Column).length).toEqual(2);
    });

    test("Shallow Test: Search Component", () => {
        const wrapper = shallow(<ChemicalSearch />);
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find(Header).length).toEqual(1);
        expect(wrapper.find(Search).length).toEqual(1);
        expect(wrapper.find(Divider).length).toEqual(1);
        expect(wrapper.find(Segment).length).toEqual(1);
    });

    test("Shallow Test: Dashboard Component", () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Container).length).toEqual(1);
        expect(wrapper.find(Grid).length).toEqual(1);
        expect(wrapper.find(Grid.Column).length).toEqual(8);
        expect(wrapper.find(Icon).length).toEqual(8);
        expect(wrapper.find(Header).length).toEqual(8);
        expect(wrapper.find(Menu.Item).length).toEqual(8);
    });
});




