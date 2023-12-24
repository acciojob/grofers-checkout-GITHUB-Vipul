const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.getElementsByClassName("price");
	let n=prices.length;
	let ans=0;
	for(let i=0;i<n;i++)
		{
			let price=(Number)(prices.item(i).innerText);
			ans+=price;
        }
	
	return ans;
  
};

getSumBtn.addEventListener("click", getSum);

