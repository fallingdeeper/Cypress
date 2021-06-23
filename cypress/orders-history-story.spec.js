context('Story - observing recently purchased products', () => {
	beforeEach(()) => {
		cy.visit('https://my-non-existing-alegro.com')

	}

	it('logged user can go to order history page', () => {

		cy.get('.login-form')
		.find('.login')
		.type('existinguser@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('Theb3stCorrectpassword.')

		cy.get('.login-form')
		.submit()

		cy.get('.personal-history-button')
		.click()

		cy.url().should('eq', 'https://my-non-existing-alegro.com/history')
	})

	it('User that did not purchase any items have empty history page', () => {

		cy.get('.login-form')
		.find('.login')
		.type('user_without_orders@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('Theb3stCorrectpassword.')


		cy.get('.login-form')
		.submit()

		cy.get('.personal-history-button')
		.click()

		cy.get('.orders-list')
		.should('not be.visible')

		cy.get('.no-orders-yet')
		.should('contain', 'You have not purchased any items yet. Start now!')
	})

	it('User can sort his order history by purchase date', () => {


		cy.get('.login-form')
		.find('.login')
		.type('user_with_2_orders@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('Theb3stCorrectpassword.')


		cy.get('.login-form')
		.submit()

		cy.get('.date-of-transaction-sort')
		.click()

		cy.get('.orders-list')
		.children()
		.eq(0)
		.should('contain', '2021-05-28 19:00')

		cy.get('.orders-list')
		.children()
		.eq(1)
		.should('contain', '2021-05-30 17:00')

		cy.get('.date-of-transaction-sort')
		.click()

		cy.get('.orders-list')
		.children()
		.eq(0)
		.should('contain', '2021-05-30 17:00')

		cy.get('.orders-list')
		.children()
		.eq(1)
		.should('contain', '2021-05-28 19:00')
	})

	it('User can go to order details', () => {

		cy.get('.login-form')
		.find('.login')
		.type('user_with_2_orders@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('Theb3stCorrectpassword.')


		cy.get('.login-form')
		.submit()

		cy.get('.orders-list')
		.children()
		.eq(0)
		.get('.go-to-details')
		.click()

		cy.url().should('eq', 'https://my-non-existing-alegro.com/history/order-details/1123')
	})

	it('User can go to recently pruchased product page', () => {

		cy.get('.login-form')
		.find('.login')
		.type('user_with_2_orders@gmail.com')

		cy.get('.login-form')
		.find('.password')
		.type('Theb3stCorrectpassword.')


		cy.get('.login-form')
		.submit()

		cy.get('.orders-list')
		.children()
		.eq(0)
		.get('.visit-product-page-button')
		.click()

		cy.url().should('eq', 'https://my-non-existing-alegro.com/history/products/some-product1')
	})
})