import App from '../App'

const home= r=> require.ensure([],() => r(require("../page/home/")),'home')
const details=r => require.ensure([],() => r(require('../page/details/')),'details')
const score= r => require.ensure([],() => r(require('../page/score/')),'score')
export default[
{
	path:'/',
	comment:App,
	children:[
	{
		path:'',
		comment:home
	},
	{
		path:'/details',
		comment:details
	},
	{
		path:'/score',
		comment:score
	}
	]
}]