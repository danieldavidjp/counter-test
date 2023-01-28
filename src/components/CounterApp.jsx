import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	function handleAdd() {
		setCounter(counter + 1);
	}
	function handleSubtract() {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	}

	function handleReset() {
		setCounter(0);
	}
	return (
		<>
			<h1>CounterApp</h1>
			<h2> {counter} </h2>
			<button onClick={handleAdd}>+1</button>
			<button onClick={handleSubtract}>-1</button>
			<button onClick={handleReset}>Reset</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
