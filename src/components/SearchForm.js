import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	// Let's use uncontrolled inputs
	const searchValue = React.useRef('');
	const searchCocktail = () => {
		setSearchTerm(searchValue.current.value);
	};

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);
	return (
		<section className='section search'>
			<form
				action=''
				className='search-form'
				onSubmit={(e) => e.preventDefault()}
			>
				<div className='form-control'>
					<label htmlFor='name'>Search your favorite cocktail</label>
					<input
						type='text'
						id='name'
						ref={searchValue}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
