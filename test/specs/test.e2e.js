//const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')


// describe('My Login application', () => {
//    it('should login with valid credentials', async () => {
//        await LoginPage.open()

//        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//        await expect(SecurePage.flashAlert).toBeExisting()
//        await expect(SecurePage.flashAlert).toHaveTextContaining(
//            'You logged into a secure area!')
//    })
//}) 
describe('Swag Labs', () => {
    it('Should login with standard_user credential', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage
    })
    it('Should get login with locked_out_user credential', async () => {
        // ToDo : akan dibuatkan skenario negatif case
    })

    it('Should get login with problem_user credential', async () => {
        // ToDo : akan dibuatkan skenario negatif case
    })
    it('Should get login with performance_glitch_user credential', async () => {
        // ToDo : akan dibuatkan skenario negatif case
    })
    it('Should get login with error_user credential', async () => {
        // ToDo : akan dibuatkan skenario negatif case
    })
    it('Should get login with visual_user credential', async () => {
        // ToDo : akan dibuatkan skenario negatif case
    })
})

    

