import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { User } from '../interfaces/User';
import instance from '../apis/index';
import { useNavigate } from 'react-router-dom';

const userSchema = Joi.object({
	email: Joi.string().email({ tlds: false }).required(),
	password: Joi.string().required().min(6).max(255),
});

const Register = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: joiResolver(userSchema),
	});
	const onSubmit = (user: User) => {
		(async () => {
			const { data } = await instance.post('/register', user);
			if (data.user) {
				window.confirm('Register success, switch login page?') &&
					navigate('/login');
			}
		})();
	};
	return (
		<>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Register</h1>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							className="form-control"
							{...register('email', {
								required: true,
							})}
						/>
						{errors.email && (
							<div className="text-danger">{errors.email.message}</div>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							className="form-control"
							{...register('password', {
								required: true,
								minLength: 6,
							})}
						/>
						{errors.password && (
							<div className="text-danger">{errors.password.message}</div>
						)}
					</div>
					<button className="btn btn-primary w-100">Submit</button>
				</form>
			</div>
		</>
	);
};

export default Register;
