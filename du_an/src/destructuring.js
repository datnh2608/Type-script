const myFamily = {
	father: 'John',
	mother: 'Jane',
	sister: 'Lolit',
	son: 'Jack',
};

const { father, mother, ongHangXom } = myFamily;
console.log(father, mother, ongHangXom);

const myHobbies = ['an', 'ngu', 'choi game'];
const [hobby1, hobby2] = myHobbies;

console.log(hobby1);

function useState(initialState) {
	// lan dau tien:
	let state = initialState;
	function setState(newState) {
		state = newState;
		// re-render giua vao react.
	}
	return [state, setState];
} // khi khao bao

const [state, setState] = useState(initialState); // khi dung