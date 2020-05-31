import React from 'react'
import { createStructuredSelector } from 'reselect'
import { ISideDrawerProps } from './types'
import './sidedrawer.styles.scss';
import { selectIsSideDrawerShown } from '../../redux/ui/ui.selectors';
import { IRootState } from '../../redux/types';
import { connect } from 'react-redux';

const SideDrawer = ({ show }: ISideDrawerProps) => (
    <div className={`sidedrawer ${show ? 'show' : ""}`}>
        <button className="close-button" />
    </div>
)

const mapStateToProps = createStructuredSelector<IRootState, ISideDrawerProps>({
    show: selectIsSideDrawerShown
})

export default connect(mapStateToProps)(SideDrawer);