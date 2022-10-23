import React, { useState } from 'react'
import Nav from "./Nav"
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Navs({isOpen}) {
	const navs = [
		{
			icon : <HomeIcon/>,
			link : "Home",
			active : true,
		},
		{
			icon : <BarChartIcon/>,
			link : "Analytics",
			active : false,
		}
	]


  return (
	<div className="navs">
		{navs.map(nav => (
			<Nav icon={nav.icon} link={nav.link} active={nav.active}  isOpen={isOpen}/>
		))}
	</div>
  )
}
