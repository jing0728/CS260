//定义全局变量来接受标记对象
var nameObj;
var wordObj;

var submitButton;

var nameInfo;
var wordInfo;

//获取标记对象
window.onload=function()
{	
    //获取输入控件的标记对象
	nameObj=document.getElementById("name");
	wordObj=document.getElementById("word");
	
    //获取错误信息的标记对象
	nameInfo=document.getElementById("name_info");
	wordInfo=document.getElementById("word_info");
	
	//表单提交按钮
	submitButton=document.getElementById("submit");
	
	function checkName()
	{		
		var msg="";
		if(!nameObj.value) msg="昵称必须填写";
		nameInfo.innerHTML=msg;
		nameObj.parentNode.parentNode.style.color=msg==""?"black":"#fca1aa";
		
		return msg=="";
	}

	function checkWord()
	{
		var msg="";
		if(!wordObj.value) msg="密码必须填写";
		wordInfo.innerHTML=msg;
		wordObj.parentNode.parentNode.style.color=msg==""?"black":"#fca1aa";
		
		return msg=="";
	}
	
	//验证整个表单
	submitButton.onclick=function()
	{			
		var bName=checkName();
		var bWord=checkWord();
		
		return bName&&bWord;
	}
};