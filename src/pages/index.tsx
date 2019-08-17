import * as React from 'react'
import Layout from '../components/layout/layout'
import { Portrait } from '../components/Portrait'
import { FancyIntroduction } from '../components/FancyIntroduction'

const IndexPage: React.FC = (props) => {
	return (
		<Layout>
			<div id="content">
				<FancyIntroduction />
				<Portrait />
			</div>
		</Layout>
	)
}

export default IndexPage
