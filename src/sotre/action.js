export default{
	addNum({commit,state},id){
		if(state.itemNum<state.itemDetails.length)
		{
			commit("REMEMBER_ANSWERID",id),
			commit("ADD_ITEMNUM",1);
		}
	}
}