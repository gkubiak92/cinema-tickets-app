import React from 'react';
import { render, fireEvent } from 'tests/test-utils';
import Tab from './Tab';
import Tabs from './Tabs';
import { ITabData } from './types';

describe('Tab component', () => {
    const name = 'testTab';
    let isActive = false;
    const onClick = jest.fn();

    beforeEach(() => {
        let isActive = false;
    })

    test('render tab component', () => {
        const { container } = render(
            <Tab name={name} isActive={isActive} onClickHandler={onClick} />
        );
        expect(container).toBeInTheDocument();
    })

    test('tab has proper name uppercased', () => {
        const { container } = render(
            <Tab name={name} isActive={isActive} onClickHandler={onClick} />
        );
        expect(container.firstChild?.textContent).toBe(name.toUpperCase());
    });

    test('tab triggers passed method to onClickHandler', () => {
        const { container } = render(
            <Tab name={name} isActive={isActive} onClickHandler={onClick} />
        );
        const tab = container.firstChild;
        fireEvent.click(tab!);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('inactive tab doesnt have class active', () => {
        const { container } = render(
            <Tab name={name} isActive={isActive} onClickHandler={onClick} />
        );
        expect(container.querySelector('.active')).toBeNull();
    });

    test('active tab has class active', () => {
        isActive = true;
        const { container } = render(
            <Tab name={name} isActive={isActive} onClickHandler={onClick} />
        );
        expect(container.querySelector('.active')).not.toBeNull();
    })
});

describe('Tabs component', () => {
    const firstTabContent = () => (<div>first tab</div>);
    const secondTabContent = () => (<div>second tab</div>);
    const thirdTabContent = () => (<div>third tab</div>);
    const tabs: ITabData[] = [
        { name: 'tab1', content: firstTabContent },
        { name: 'tab2', content: secondTabContent },
        { name: 'tab3', content: thirdTabContent },
    ]

    test('render tabs component', () => {
        const { container } = render(<Tabs tabs={tabs} />);
        expect(container).toBeInTheDocument();
    });

    test('tabs component render proper count of tabs', () => {
        const { container } = render(<Tabs tabs={tabs} />);
        const tabsCount = container.querySelector('.tabs')?.children.length;
        expect(tabsCount).toBe(tabs.length);
    });

    test('there is always only 1 tab active', () => {
        const { container } = render(<Tabs tabs={tabs} />);
        const activeTab = container.querySelectorAll('.active');
        expect(activeTab.length).toBe(1);
    });

    test('clicking tab changing active tab', () => {
        const { container } = render(<Tabs tabs={tabs} />);
        const tabsContainer = container.querySelector('.tabs');
        fireEvent.click(tabsContainer!.children[1]);
        expect(tabsContainer!.children[1].className).toContain('active');
    });

    test('clicking tab changing active content', () => {
        const { container } = render(<Tabs tabs={tabs} />);
        const tabsContainer = container.querySelector('.tabs');
        fireEvent.click(tabsContainer!.children[1]);
        const activeTabContent = container.querySelector('.tab-content');
        expect(activeTabContent!.firstChild).toHaveTextContent('second tab');

    })
})