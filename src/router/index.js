import App from '../App'

const home= r=> require.ensure([],() => r(require("../page/home")),'home')
const details= r => require.ensure([],() => r(require('../page/details')),'details')
const score= r => require.ensure([],() => r(require('../page/score')),'score')
export default[
{
	path:'/',
	component:App,
	children:[
	{
		path:'',
		component:home
	},
	{
		path:'/details',
		component:details
	},
	{
		path:'/score',
		component:score
	}
	]
}]