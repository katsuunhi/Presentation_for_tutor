function output(){
	alert(document.getElementById("pmid").innerHTML);
	var str;
	str = "C:\\Users\葛云飞\\Desktop\\计算机资料\\前端\\presentation\\js\\" + document.getElementById("pmid").innerHTML + ".txt";
	var fso=new ActiveXObject("Scripting.FileSystemObject");
 	var f = fso.OpenTextFile(src,ForReading);
//	Var fso = new ActiveXObject(Scripting.FileSystemObject);
//	var openf1 = fso.OpenTextFile("C:\\Users\葛云飞\\Desktop\\计算机资料\\前端\\presentation\\js\\" + document.getElementById("pmid").innerHTML + ".txt", 1, true);
	alert(f.ReadAll());

}