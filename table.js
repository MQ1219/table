$(function(){
	let table = $('tbody')[0];
	let button = $('button')[4];

	table.ondblclick = function(e){
		let ele = e.target;
		if(ele.nodeName == 'TD' && ele.className != 'del'){
			let input = document.createElement('input');			
			let old = ele.innerText;
			ele.innerText = '';
			ele.appendChild(input);
			input.value = old;
			input.onblur = function(){
				let news = input.value;
				ele.innerText = news;
			} 
		}else if(ele.className == 'del'){
			let trs = ele.parentNode.parentNode;
			table.removeChild(trs);
		}
	}
	button.onclick = function(){
		table.innerHTML = table.innerHTML +
				 `<tr>
				<td class="td-1"></td>
				<td class="td-1"></td>
				<td class="td-1"></td>
				<td class="td-1"></td>
				<td class="td-1"></td>
				<td><button class="del">删除</button></td>
				</tr>`
	}

})