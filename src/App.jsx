import { useState, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [lenght, setLenght] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charactersAllowed, setCharactersAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const generatePassword = useCallback(() => {
		let pass = "";
		let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numberAllowed) string += "123456789";
		if (charactersAllowed) string += "!@#$%&*()_-+=<>?/{}[]";

		for (let i = 1; i < lenght; i++) {
			const index = Math.floor(Math.random() * string.length + 1);
			pass += string.charAt(index);
		}

		setPassword(pass);
	}, [lenght, numberAllowed, charactersAllowed]);

	useEffect(() => {
		generatePassword();
	}, [lenght, numberAllowed, charactersAllowed]);

	return (
		<div className="w-full max=w=md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
			<h1 className="text-white text-center my-3">Password Generator</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<input
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3"
					placeholder="Password"
					readOnly
				/>
				<button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
					Copy
				</button>
			</div>
			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<input
						type="range"
						min={6}
						max={30}
						value={lenght}
						className="cursor-pointer"
						onChange={(e) => setLenght(e.target.value)}
						name=""
						id=""
					/>
					<label htmlFor="lenght">Lenght: {lenght}</label>
				</div>

				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						defaultChecked={numberAllowed}
						onChange={() => {
							setNumberAllowed((prev) => !prev);
						}}
						name=""
						id=""
					/>
					<label htmlFor="number">Numbers</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						defaultChecked={charactersAllowed}
						onChange={() => {
							setCharactersAllowed((prev) => !prev);
						}}
						name=""
						id=""
					/>
					<label htmlFor="charInput">Characters</label>
				</div>
			</div>
		</div>
	);
}

export default App;
