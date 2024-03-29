//这里是对3D模型的配置

(function(win){
	
	win.zdwconfig = {
		stageW:600,//舞台的宽度
		stageH:400,//舞台的高度
		bgcolor:0xffffff,//舞台颜色
		
		//配置边
		//[长,半径,x,y,z,color,Rx,Ry,Rz]
		line:[
			[100,0.5,50,50,50,0x000000,0,0,90],
			[100,0.5,50,50,-50,0x000000,0,0,90],
			[100,0.5,0,50,0,0x000000,90,0,0],
			[100,0.5,100,50,0,0x000000,90,0,0],
			[100,0.5,0,-50,0,0x000000,90,0,0],
			[100,0.5,-100,-50,0,0x000000,90,0,0],
			[100,0.5,-50,-50,50,0x000000,0,0,90],
			[100,0.5,-50,-50,-50,0x000000,0,0,90],
			[141.421,0.5,-50,0,50,0x000000,0,0,-45],
			[141.421,0.5,-50,0,-50,0x000000,0,0,-45],
			[141.421,0.5,50,0,-50,0x000000,0,0,-45],
			[141.421,0.5,50,0,50,0x000000,0,0,-45],
			[100,0.5,100,0,50,0xcccccc,0,0,0],
			[100,0.5,50,-50,50,0xcccccc,0,0,90],
		],
		
		
		//配置面
		//[坐标点数组,x,y,z,color,Rx,Ry,Rz,opacity]
		plane:[
			[ [[-100,-50],[0,50],[100,50],[0,-50],[-100,-50]], 0,0,-50,0xff0000,0,0,0,0],
			[ [[-100,-50],[0,50],[100,50],[0,-50],[-100,-50]], 0,0,50,0x0066CC,0,0,0,0],
			[ [[-50,-70.7105],[-50,70.7105],[50,70.7105],[50,-70.7105],[-50,-70.7105]], -50,0,0,0xFF9933,90,45,90,0],
			[ [[-50,-70.7105],[-50,70.7105],[50,70.7105],[50,-70.7105],[-50,-70.7105]], 50,0,0,0x7FCCB2,90,45,90,0],
			[ [[-50,-50],[-50,50],[50,50],[50,-50],[-50,-50]], 50,50,0,0x666666,90,0,0,0],
			[ [[-50,-50],[-50,50],[50,50],[50,-50],[-50,-50]], -50,-50,0,0xD4D4D4,90,0,0,0],
		],
		
		
		//配置文字
		//["文字内容",文字大小,文字颜色 ,x,y,z]
		txt:[
			["2",18,0x000000,-115,-65,0],
			["2",18,0x000000,-50,-65,60],
			["2",18,0x000000,50,-65,60],
			["||h",18,0x000000,105,0,50],
			["√2",18,0x000000,55,0,50],
		],
		
		//配置直角
		// 0 1   2  3  4 5 6 7  8  9
		//[宽,高,线宽,颜色,x,y,z,Rx,Ry,Rz]
		zhianlge:[
			[10,10,0.5,0xcccccc,90,-50,50,0,0,0],
			[10,10,0.5,0x000000,0,50,40,90,0,0],
			[10,10,0.5,0x000000,-100,-50,40,90,0,0],
		],
		
		//配置角度\
		// 0   1   2   3  4 5 6 7 8   9
		//[角度,半径,粗细,颜色,x,y,z,Rx,Ry,Rz]
		anlge:[
//			[90,10,0.5,0x000000,0,0,0,0,0,0]
		],
		
	}
	
	
	
})(window)
