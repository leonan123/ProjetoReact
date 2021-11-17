import React, {useState} from 'react';

import {mask, unMask} from 'remask';

import './style.css';

const InputGroup = (props) => {

	const [ value, setValue ] = useState('');

	//Eventos do input
	const inputChange = (e) => {
	
		switch (props.inputId){
			case 'cpf':
				setValue(mask(unMask(e.target.value), [ '999.999.999-99' ]));
			break;
			case 'valor':
				setValue(mask(unMask(e.target.value), [ '99.99']));
			break;
		
			default:

		}
	};

	const inputFocus = (e) => { 
		let labelInput = document.querySelector(`label#${props.labelId}`);
		labelInput.classList.add('active');
	}

	const inputBlur = (e) => {
		let labelInput = document.querySelector(`label#${props.labelId}`);

		if(e.target.value.length <= 0){
			labelInput.classList.remove('active');
		}
	} 

	return (
		<div className="input-group">
			<div className="btns-check">
				<i id="correct" className="bi bi-check-lg validator" />
				<i id="incorrect" className="bi bi-x-lg validator" />
			</div>
			<label id={props.labelId}>{props.labelText}</label>
			<input 
			type={props.inputType} 
			value={value} 
			onFocus={inputFocus} 
			onBlur={inputBlur} 
			onChange={inputChange}
			
			/>
			<span className="error">{props.errorText}</span>
		</div>
	);
};

export default InputGroup;
