import { Dispatch, SetStateAction, useEffect, useState } from "react";


export function useDebounce<T>(value: T, delay): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(
		() => {
			// Set debouncedValue to value (passed in) after the specified delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);

			// Return a cleanup function that will be called every time ...
			// ... useEffect is re-called. useEffect will only be re-called ...
			// ... if value changes (see the inputs array below). 
			// This is how we prevent debouncedValue from changing if value is ...
			// ... changed within the delay period. Timeout gets cleared and restarted.
			// To put it in context, if the user is typing within our app's ...
			// ... search box, we don't want the debouncedValue to update until ...
			// ... they've stopped typing for more than 500ms.
			return () => {
				clearTimeout(handler);
			};
		},
		// Only re-call effect if value changes
		// You could also add the "delay" var to inputs array if you ...
		// ... need to be able to change that dynamically.
		[value]
	);

	return debouncedValue;
}

export function useDebouncedState<T>(value: T, delay): [T | undefined, T | undefined, Dispatch<SetStateAction<T | undefined>>] {
	const [v, changeV] = useState(value);

	const debouncedV = useDebounce<T>(v, delay);

	return [v, debouncedV, changeV];
}

const isChanged = (a, b) => {
	const aType = typeof a
	const bType = typeof b

	if (aType !== bType) {
		return true
	}

	if (aType === "object") {
		const aPropsLen = Object.keys(a).length
		const bPropsLen = Object.keys(b).length

		if (aPropsLen !== bPropsLen) {
			return true
		}

		for (const key of Object.keys(a)) {
			const av = a[key]
			const bv = b[key]

			const changed = isChanged(av, bv)

			if (changed === true) {
				return true
			}
		}

		return false
	}

	return a != b
}

export const useAutoUpdateValue = <T>(serverValue: T, update: (s: T) => Promise<void>): [T, (s: Partial<T>) => void] => {
	const [value, setValue] = useState(serverValue)
	const dvalue = useDebounce(value, 400)
	const [updating, setUpdating] = useState(false)
	const [dirty, setDirty] = useState(false)

	useEffect(() => {
		if (updating === true) {
			return
		}
 
		const changed = isChanged(dvalue, serverValue) 

		if (changed === false) {
			return
		}

		// handler = setTimeout(() => {

		// }, 400);

		if (dirty == true) {
			setDirty(false)
			setUpdating(true)

			console.log("updateValue", dvalue)

			update(dvalue).then(() => {
				setUpdating(false)
			})

			return
		}

		setValue(serverValue)

		return () => {
			// clearTimeout(handler);
		};
	}, [serverValue, updating, dirty, dvalue])



	return [
		value, 
		(s: Partial<T>) => {
			setValue({
				...value,
				...s
			})
			setDirty(true)
		}
	]
}