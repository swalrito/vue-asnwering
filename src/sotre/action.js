export default{
	addNum({commit,state},id){
		if(state.itemNum<=state.itemDetails.length)
		{
			commit("ADD_ANSWER",id);
			commit("REMEMBER_ANSWERID",id);
			commit("ADD_ITEMNUM",1);
		}
	},
	initData({commit}){
		commit("INITDATA");
	}
}