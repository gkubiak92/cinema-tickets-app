import React from 'react'
import { Link } from 'react-router-dom'
import { IMenuItemProps } from './types';

const MenuItem = ({ to, title }: IMenuItemProps) => (
    <Link to={to} >
        <span>{title}</span>
    </Link>
)

export default MenuItem;