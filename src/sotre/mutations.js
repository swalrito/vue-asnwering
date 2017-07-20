const ADD_ITEMNUM="ADD_ITEMNUM"
const REMEMBER_ANSWERID="REMEMBER_ANSWERID"

export default{
	//进入下一题，题目ID加1
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
	},
	//记录选择的选项
	[REMEMBER_ANSWERID](state,id){
		state.answer_id.push(id);
	}
}