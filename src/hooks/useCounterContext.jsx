import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const useCounterContext = () => {
	const context = useContext(CounterContext);

	if (!context) {
		console.log("Context not found");
	}
	return context;
};

export default useCounterContext;

//Hook personalizado para fazer o context
