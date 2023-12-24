const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.getElementsByClassName("price");
	let n=prices.length;
	let sum=0;
	for(let i=0;i<n;i++)
		{
			let price=(Number)(prices.item(i).innerText);
			sum+=price;
        }
	
	return sum;
  
};

getSumBtn.addEventListener("click", getSum);

