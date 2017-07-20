const ADD_ITEMNUM="ADD_ITEMNUM"
const REMEMBER_ANSWERID="REMEMBER_ANSWERID"
const ADD_ANSWER="ADD_ANSWER"
const INITDATA='INITDATA'

export default{
	//进入下一题，题目ID加1
	[ADD_ITEMNUM](state, num) {
		if(state.itemNum<state.itemDetails.length)
		state.itemNum += num;
	},
	//记录选择的答案对象
	[ADD_ANSWER](state,num){
		state.answer.push(state.itemDetails[state.itemNum-1].topic_answer[num-1]);
	},
	//记录选择的选项
	[REMEMBER_ANSWERID](state,id){
		state.answer_id.push(id);
	},
	//初始化数据//
	[INITDATA](state){
		state.level="第一周";
		state.itemNum=1;
		state.answer_id=[];//用户选择的答案序号
		state.answer=[];//用户选择答案
	}
}