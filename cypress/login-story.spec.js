context('Story - Login', () => {
	beforeEach(()) => {
		cy.visit('https://my-non-existing-alegro.com')


	}

	it('password is required to login', () => {

		cy.get('.login-form')
		.find('.login')
		.type('goodemail@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('')


		cy.get('.login-form')
		.submit()
		.next().should('contain', 'Provide password to login')
	})

	it('email is required to login', () => {

		cy.get('.login-form')
		.find('.login')
		.type('')

		cy.get('.login-form')
		.find('.password')
		.type('Somepassword123!@')


		cy.get('.login-form')
		.submit()
		.next().should('contain', 'Provide email to login')
	})

	it('invalid password leads to login failure', () => {

		cy.get('.login-form')
		.find('.login')
		.type('existinguser@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('someincorrectpassword')


		cy.get('.login-form')
		.submit()
		.next().should('contain', 'Password is incorrect')
	})

	it('User can go to register page', () => {

		cy.get('.register-button')
		.should('be.visible')
		.click()

		cy.url().should('eq', 'https://my-non-existing-alegro.com/create-account')
	})


	it('after providing correct credentials user is redirected to home page', () => {

		cy.get('.login-form')
		.find('.login')
		.type('existinguser@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('Theb3stCorrectpassword.')


		cy.get('.login-form')
		.submit()
		
		cy.url().should('eq', 'https://my-non-existing-alegro.com/home')
	})
})