const Binaryvalues=['0000', '0001', '0010', '0011', '0100', 
  '0101', '0110', '0111', '1000', '1001'];
const BCD=(binary)=>{
	const A=Number(binary[0]);
	const B=Number(binary[1]);
	const C=Number(binary[2]);
	const D=Number(binary[3]);
	const booleanLogic = [
		    A || !B || ((C || !D) && (!C || D)),
		    A || B || !C || D,
		    A || ((B || C || !D) && (!B || ((C || D) && !(C && D)))),
		    !(((A || (B && !(B && C))) && (!A || B || C)) || D),
		    A || ((B || ((C || !D) && (!C || D) && !(C && D))) &&
		      !(B && C && D)),
		    A || C || ((B || !D) && (!B || D)),
		    A || ((B || C) && !(B && C && D))
		  ];
	return booleanLogic.map(exp=>Number(exp));
}

const handelchangeincoming=()=>{
	const decimal=Number(document.getElementById("decimalincoming").value);
	console.log(decimal)
	//Convert to binary
	const binary=Binaryvalues[decimal];
	console.log(binary)
	//Input in BCDdecoder
	const abcdefg=BCD(binary);
	console.log(abcdefg);
	//get value of abcdefg
	//change classname to elumunate the led
	const target=["seg_a","seg_b","seg_c","seg_d","seg_e","seg_f","seg_g"]
	for(let i=0;i<abcdefg.length;++i){
		const element=document.getElementById(target[i]);
		if(abcdefg[i]==1){
			element.classList.add("segLit")
		}
		else{
			element.classList.remove("segLit")
		}
	}

}


const handelchangeoutgoing=()=>{
	const decimal=Number(document.getElementById("decimaloutgoing").value);
	console.log(decimal)
	//Convert to binary
	const binary=Binaryvalues[decimal];
	console.log(binary)
	//Input in BCDdecoder
	const abcdefg=BCD(binary);
	console.log(abcdefg);
	//get value of abcdefg
	//change classname to elumunate the led
	const target=["segi_a","segi_b","segi_c","segi_d","segi_e","segi_f","segi_g"]
	for(let i=0;i<abcdefg.length;++i){
		const element=document.getElementById(target[i]);
		if(abcdefg[i]==1){
			element.classList.add("segLitO")
		}
		else{
			element.classList.remove("segLitO")
		}
	}

}
