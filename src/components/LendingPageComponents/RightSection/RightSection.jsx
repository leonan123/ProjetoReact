import React from 'react';

import InputGroup from '../../InputGroup/InputGroup.jsx';

const RightSection = () => {
	const inputFocus = (e) => {
		console.log(InputGroup.labelId);
		// let labelInput = document.querySelector(InputGroup.labelText);
		// labelInput.classList.add('active');
	};

	const inputBlur = (e) => {
		// let labelInput = document.querySelector('.label-input');
		// if (e.target.value.length <= 0) {
		// 	labelInput.classList.remove('active');
		// }
		// validator(e);
	};
	return (
		<div>
			<div className="form">
				<form>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'label-cpf'}
							labelText={'Digite seu CPF'}
							errorText={'Por favor insira um CPF válido!'}
							inputId={'cpf'}
							inputType={'text'}
							// value={value}
							// onChange={inputChange}
							onBlur={inputBlur}
							onFocus={inputFocus}
						/>
					</div>

					<div className="container-inputGroup">
						<InputGroup
							labelId={'label-emprestimo'}
							labelText={'Valor do empréstimo'}
							errorText={'Insira um valor válido!'}
							inputId={'valor'}
							inputType={'number'}
							// value={value}
							// onChange={inputChange}
							onBlur={inputBlur}
							onFocus={inputFocus}
						/>
					</div>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'teste'}
							labelText={'Valor do empréstimo'}
							errorText={'Insira um valor válido!'}
							inputId={'valor'}
							inputType={'number'}
							// value={value}
							// onChange={inputChange}
							onBlur={inputBlur}
							onFocus={inputFocus}
						/>
					</div>
					<div className="container-inputGroup">
						<InputGroup
							labelId={'teste2'}
							labelText={'Valor do empréstimo'}
							errorText={'Insira um valor válido!'}
							inputId={'valor'}
							inputType={'number'}
							// value={value}
							// onChange={inputChange}
							onBlur={inputBlur}
							onFocus={inputFocus}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RightSection;
