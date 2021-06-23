context('Story - available filters', () => {
	beforeEach(()) => {
		cy.visit('https://my-non-existing-alegro.com/search-Products')


	}

	it('user has to fill all required fields before submitting search form', () => {

		cy.get('.filters-input')
		.find('.productName-container')
		.type('some product')

		cy.get('.filters-input')
		.get('.submit-button')
		.should('be.disabled')

		cy.get('.filters-input')
		.find('.productCategory-container')
		.type('some category')

		cy.get('.filters-input')
		.get('.submit-button')
		.should('be.enabled')
	})

	it('user can reset all filled search inputs', () => {

		cy.get('.filters-input')
		.find('.productName-container')
		.type('some product')

		cy.get('.filters-input')
		.find('.productCategory-container')
		.type('some category')

		cy.get('.reset-button')
		.click()

		cy.get('.filters-input')
		.find('.productName-container')
		.should('have.value', '')

		cy.get('.filters-input')
		.find('.productCategory-container')
		.should('have.value', '')
	})

	it('user can click Search button with valid form which will show search results page', () => {

		cy.get('.filters-input')
		.find('.productName-container')
		.type('some product')

		cy.get('.filters-input')
		.find('.productCategory-container')
		.type('some category')

		cy.get('.submit-button')
		.click()

		cy.url().should('eq', 'https://my-non-existing-alegro.com/search-Products/results?=name=some-product&category=some-category')
	})

	it('User can verify filtered products count', () => {

		cy.get('.filters-input')
		.find('.productName-container')
		.type('some product')

		cy.get('.filters-input')
		.find('.productCategory-container')
		.type('some category')

		cy.get('.submit-button')
		.click()

		cy.get('.filter-results-count')
		.should('be.visible')
	})

	it('User can select some of the found products', () => {

		cy.get('.filters-input')
		.find('.productName-container')
		.type('some product')

		cy.get('.filters-input')
		.find('.productCategory-container')
		.type('some category')

		cy.get('.submit-button')
		.click()

		cy.get('.search-result-open-button')
		.first()
		.click()

		cy.url().should('eq', 'https://my-non-existing-alegro.com/products/some-product1')
	})
})