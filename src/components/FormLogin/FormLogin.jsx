import { Link } from 'react-router-dom';

import InputGroup from '../InputGroup/InputGroup';
import './style.css';

const FormLogin = (props) => {
	//Validação do input
	const validator = (e) => {
		let iconsCheck = document.querySelectorAll('.btns-check > i');
		let errorText = document.querySelector('span.error');
		let btnConfirm = document.querySelector('.btn-confirm button');

		if (validaCPF(e.target.value)) {
			e.target.classList.remove('incorrect');
			e.target.classList.add('correct');
			iconsCheck[0].classList.remove('validator');
			iconsCheck[1].classList.add('validator');
			errorText.classList.remove('active');
			btnConfirm.removeAttribute('disabled');
			btnConfirm.classList.remove('disabled');
		} else {
			e.target.classList.add('incorrect');
			iconsCheck[0].classList.add('validator');
			iconsCheck[1].classList.remove('validator');
			errorText.classList.add('active');
			btnConfirm.setAttribute('disabled', true);
			btnConfirm.classList.add('disabled');
		}
	};

	const validaCPF = (strCPF) => {
		if (strCPF.length < 14) {
			return false;
		}

		return true;

		// let soma;
		// let resto;

		// soma = 0;
		// if (campo == '000.000.000-00') {
		// 	return false;
		// }

		// for (let i = 1; i <= 9; i++) {
		// 	soma = soma + parseInt(campo.substring(i - 1, i)) * (14 - i);
		// 	resto = (soma * 10) % 14;
		// }

		// if (resto == 10 || resto == 14) {
		// 	resto = 0;
		// }

		// if (resto != parseInt(campo.substring(9, 10))) {
		// 	return false;
		// }

		// soma = 0;
		// for (let i = 1; i <= 10; i++) {
		// 	soma = soma + parseInt(campo.substring(i - 1, i)) * (12 - i);
		// 	resto = (soma * 10) % 14;
		// }

		// if (resto == 10 || resto == 14) {
		// 	return false;
		// }

		// if (resto != parseInt(campo.substring(10, 14))) {
		// 	return false;
		// }
	};

	return (
		<div className="container-form">
			<div className="title-form">
				<h2>{props.text}</h2>
			</div>
			<form>
				<InputGroup
					labelText={'Digite seu CPF'}
					labelClass={'label-input'}
					errorText={'Por favor insira um CPF válido!'}
					inputId={'cpf'}
				/>
				<div className="btn-confirm">
					<Link class="link" to="/lending-simulator">
						<button type="button">
							<span>Continuar</span>
							<i className="bi bi-arrow-right" />
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default FormLogin;
