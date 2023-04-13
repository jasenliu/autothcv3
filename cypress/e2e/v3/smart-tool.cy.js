//const path = require('path')
import { login, selectBankByNameAndABA, selectBankCycle, BSISThreeNext, doubleClickNext, openSmartToolPageInCurrentPage,
clickLinkByName, copyAndCompareExcel } from './utils'

//const downloadsFolder = Cypress.config('downloadsFolder')
//const fixturesFolder = Cypress.config('fixturesFolder')
//const benchmarkPath = path.join(fixturesFolder.replace(/\\/g, '/'), 'report/benchmark_report/smart_tool')
//const generatePath = path.join(fixturesFolder.replace(/\\/g, '/'), 'report/generate_report')
//const diffPath = path.join(fixturesFolder.replace(/\\/g, '/'), 'result')

//console.log(`fixtureFolder:${fixturesFolder}`)
//console.log(`benchmarkPath:${benchmarkPath}`)
//console.log(`generatePath:${generatePath}`)
//console.log(`downloadsFolder:${downloadsFolder}`)


describe('smart tool', () => {

  beforeEach(() => {

    if (Cypress.env('isCnSite')) {
        login(Cypress.env('v3_cn_username'), Cypress.env('v3_cn_password'))
    } else {
        login(Cypress.env('v3_com_username'), Cypress.env('v3_com_password'))
    }
    //go to Generate/View Reports page
    clickLinkByName('Port Analytics & Reporting')
    clickLinkByName('Generate/View Reports')

  })

  it('qtestbank1 smart tool', () => {
    //cy.visit('/Account/Login')
    //cy.get('#Login').type('v3_ljs')
    //cy.get('#Password').type('1')
    //cy.get('#rm_submit_btn').click()

    // select bank:QTestBank1
    //cy.get('.nirastateF').click({ force:true })
    //cy.get('#abaIdDOM').type('761')
    //cy.get('#searchDOM').click()
    //cy.get('[title="QTestBank1"]').click()
    selectBankByNameAndABA('QTestBank1', '761')

    //select cycle:202206
    //cy.get('#app > section > div > div > span > i').click()
    //cy.get('.el-icon--right').last().click() //get total 2 elements and the second is needed
    //cy.contains('Jun 2022').click()
    selectBankCycle('Dec 2022')

    //go to Generate/View Reports page
    //cy.contains('Port Analytics & Reporting').click()
    //cy.contains('Generate/View Reports').click({ force:true })
    //clickLinkByName('Port Analytics & Reporting')
    //clickLinkByName('Generate/View Reports')

    //open smart tool page in current page(not open the new page)
    //cy.contains('Smart Pathbook Tool').invoke('removeAttr', '_blank').click()

    /*
    cy.window().then(win => {
      cy.stub(win, 'open').callsFake((url, target) => {
        // call the original `win.open` method
        // but pass the `_self` argument
        return win.open.wrappedMethod.call(win, url, '_self')
      }).as('open')
    })
    cy.contains('Smart Pathbook Tool').click({ force:true })
    cy.get('@open').should('have.been.calledOnce')
    */
    openSmartToolPageInCurrentPage()

    //click root node
    //cy.visit('https://thcdecisions.cn/tlink/external/smartpathfiletool')
    cy.get('#id0').click()

    //open GL(BS) page
    //cy.contains('Upload GL(BS)').click()
    clickLinkByName('Upload GL(BS)')
    //cy.get('[value="Next"]').click()
    //cy.get('[value="Next"]').click()
    //cy.get('[value="Next"]').click()
    BSISThreeNext()

    //const bsAlertStub = cy.stub()
    //cy.on('window:alert', bsAlertStub)

    const bsConfirmStub = cy.stub()
    cy.on('window:confirm', bsConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //open GL(IS) page
    //cy.contains('Upload GL(IS)').click()
    clickLinkByName('Upload GL(IS)')
    //cy.get('[value="Next"]').click()
    //cy.get('[value="Next"]').click()
    //cy.get('[value="Next"]').click()
    BSISThreeNext()

    //const isAlertStub = cy.stub()
    //cy.on('window:alert', isAlertStub)

    const isConfirmStub = cy.stub()
    cy.on('window:confirm', isConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //Cash & Short Term node
    cy.get('#id199').click({ force:true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //Investments node
    cy.get('#id103').click({ force: true })
    cy.get('[value="next3"]').click({ force:true })
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //Loans node
    cy.get('#id104').click({ force: true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(5000)

    //select second file
    cy.get('span.fn').eq(1).click( {force:true} )
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //Other Assets node
    cy.get('#id105').click({ force: true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //Time Deposits node
    cy.get('#id298').click({ force: true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //Non Maturity node
    cy.get('#id297').click({ force: true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(5000)
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force: true} )
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //select three file
    cy.get('span.fn').eq(2).click({ force: true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //Borrowings node
    cy.get('#id207').click({ force: true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //select three file
    cy.get('span.fn').eq(2).click({ force:true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //Other Liabilities node
    cy.get('#id209').click({ force: true })
    //cy.get('[value="next2"]').click()
    //cy.get('[value="next3"]').click()
    doubleClickNext()
    cy.wait(2000)

    //Validate and Download PATHBOOK
    cy.get('input[value="Validate and Download PATHBOOK"]').click()
    cy.wait(2000)
    cy.get('input[value="Download PATHBOOK"]').click({ force:true })
    //cy.wait(10000)

    copyAndCompareExcel()

    /*
    //copy downloaded pathfile to generate_report folder and then compare the pathfile
    cy.task('copyFileToDirSync', { fromPath:`${downloadsFolder}/`, toPath:`${generatePath}/`}).then((obj) => {
      const benchmarkFilePath = `${benchmarkPath}/${obj.fileName}${obj.extName}`
      const generateFilePath = `${obj.generateFilePath}`
      const diffFilePath = `${diffPath}/${obj.fileName}_${obj.currentTime}_diff${obj.extName}`

      cy.task('compareExcelFile', { benchmarkPath: benchmarkFilePath, generatePath: generateFilePath, diffPath: `${diffFilePath}`})
    })
    */


  })


  it('qtestbank2 smart tool', () => {
    // select bank:QTestBank2
    selectBankByNameAndABA('QTestBank2','762')

    //select cycle:202206
    selectBankCycle('Dec 2022')

    //open smart tool page in current page(not open the new page)
    //cy.contains('Smart Pathbook Tool').invoke('removeAttr', '_blank').click()
    openSmartToolPageInCurrentPage()

    //click root node
    //cy.visit('https://thcdecisions.cn/tlink/external/smartpathfiletool')
    cy.get('#id0').click()

    //open GL(BS) page
    clickLinkByName('Upload GL(BS)')
    BSISThreeNext()

    //const bsAlertStub = cy.stub()
    //cy.on('window:alert', bsAlertStub)

    const bsConfirmStub = cy.stub()
    cy.on('window:confirm', bsConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //open GL(IS) page
    clickLinkByName('Upload GL(IS)')
    BSISThreeNext()

    //const isAlertStub = cy.stub()
    //cy.on('window:alert', isAlertStub)

    const isConfirmStub = cy.stub()
    cy.on('window:confirm', isConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //Cash & Short Term node
    cy.get('#id199').click({ force:true })
    cy.wait(2000)
    doubleClickNext()
    cy.wait(2000)

    //Investments node
    cy.get('#id103').click({ force: true })
    cy.get('[value="next3"]').click({ force:true })
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //Loans node
    cy.get('#id104').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //Other Assets node
    cy.get('#id105').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Time Deposits node
    cy.get('#id298').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Non Maturity node
    cy.get('#id297').click({ force: true })
    doubleClickNext()
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //Borrowings node
    cy.get('#id207').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //Other Liabilities node
    cy.get('#id209').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Validate and Download PATHBOOK
    cy.get('input[value="Validate and Download PATHBOOK"]').click()
    cy.wait(2000)
    cy.get('input[value="Download PATHBOOK"]').click({ force:true })
    //cy.wait(10000)

    copyAndCompareExcel()

  })


  it('qtestbank3 smart tool', () => {
    // select bank:QTestBank3
    selectBankByNameAndABA('QTestBank3', '763')

    //select cycle:202206
    selectBankCycle('Dec 2022')

    //open smart tool page in current page(not open the new page)
    //cy.contains('Smart Pathbook Tool').invoke('removeAttr', '_blank').click()
    openSmartToolPageInCurrentPage()
    
    //click root node
    //cy.visit('https://thcdecisions.cn/tlink/external/smartpathfiletool')
    cy.get('#id0').click()

    //open GL(BS) page
    clickLinkByName('Upload GL(BS)')
    BSISThreeNext()

    const bsAlertStub = cy.stub()
    cy.on('window:alert', bsAlertStub)

    const bsConfirmStub = cy.stub()
    cy.on('window:confirm', bsConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //open GL(IS) page
    clickLinkByName('Upload GL(IS)')
    BSISThreeNext()

    const isAlertStub = cy.stub()
    cy.on('window:alert', isAlertStub)

    const isConfirmStub = cy.stub()
    cy.on('window:confirm', isConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //Cash & Short Term node
    cy.get('#id199').click({ force:true })
    cy.wait(5000)
    doubleClickNext()
    cy.wait(2000)

    //Investments node
    cy.get('#id103').click({ force: true })
    cy.get('[value="next3"]').click({ force:true })
    cy.wait(2000)

    //Loans node
    cy.get('#id104').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Other Assets node
    cy.get('#id105').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Time Deposits node
    cy.get('#id298').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Non Maturity node
    cy.get('#id297').click({ force: true })
    doubleClickNext()
    cy.wait(2000)
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //Borrowings node
    cy.get('#id207').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Other Liabilities node
    cy.get('#id209').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Validate and Download PATHBOOK
    cy.get('input[value="Validate and Download PATHBOOK"]').click()
    cy.wait(2000)
    cy.get('input[value="Download PATHBOOK"]').click({ force:true })
    //cy.wait(10000)

    copyAndCompareExcel()

  })

  it('qtestbank4 smart tool', () => {
    // select bank:QTestBank3
    selectBankByNameAndABA('QTestBank4', '764')

    //select cycle:202206
    selectBankCycle('Dec 2022')

    //open smart tool page in current page(not open the new page)
    //cy.contains('Smart Pathbook Tool').invoke('removeAttr', '_blank').click()
    openSmartToolPageInCurrentPage()
    
    //click root node
    //cy.visit('https://thcdecisions.cn/tlink/external/smartpathfiletool')
    cy.get('#id0').click()

    //open GL(BS) page
    clickLinkByName('Upload GL(BS)')
    BSISThreeNext()

    const bsConfirmStub = cy.stub()
    cy.on('window:confirm', bsConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //open GL(IS) page
    clickLinkByName('Upload GL(IS)')
    BSISThreeNext()

    const isConfirmStub = cy.stub()
    cy.on('window:confirm', isConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //Cash & Short Term node
    cy.get('#id199').click({ force:true })
    cy.wait(5000)
    doubleClickNext()
    cy.wait(2000)

    //Investments node
    cy.get('#id103').click({ force: true })
    cy.get('[value="next3"]').click({ force:true })
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //select third file
    cy.get('span.fn').eq(2).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //Loans node
    cy.get('#id104').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //Other Assets node
    cy.get('#id105').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Time Deposits node
    cy.get('#id298').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //Non Maturity node
    cy.get('#id297').click({ force: true })
    doubleClickNext()
    cy.wait(2000)
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //Borrowings node
    cy.get('#id207').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force:true })
    doubleClickNext()
    cy.wait(2000)

    //Other Liabilities node
    cy.get('#id209').click({ force: true })
    doubleClickNext()
    cy.wait(2000)

    //Validate and Download PATHBOOK
    cy.get('input[value="Validate and Download PATHBOOK"]').click()
    cy.wait(2000)
    cy.get('input[value="Download PATHBOOK"]').click({ force:true })
    //cy.wait(10000)

    copyAndCompareExcel()

  })


  it('qtestbank5 smart tool', () => {
    /*
    cy.visit('/Account/Login')
    cy.get('#Login').type('v3_ljs')
    cy.get('#Password').type('1')
    cy.get('#rm_submit_btn').click()
    */

    // select bank:QTestBank5
    cy.get('.nirastateF').click()

    if (Cypress.env('isCnSite')) {
        cy.get('#abaIdDOM').type('765')
    } else {
        cy.get('#abaIdDOM').type('767')
    }

    //cy.get('#abaIdDOM').type('765')
    cy.wait(2000)
    cy.get('#searchDOM').click()
    cy.get('[title="QTestBank5"]').click()
    cy.wait(2000)

    //select cycle:202206
    cy.get('#app > section > div > div > span > i').click()
    cy.get('.el-icon--right').last().click() //get total 2 elements and the second is needed
    cy.contains('Dec 2022').click()
    cy.wait(2000)

    //go to Generate/View Reports page
    //cy.contains('Port Analytics & Reporting').click()
    //cy.contains('Generate/View Reports').click({ force:true })

    //open smart tool page in current page(not open the new page)
    //cy.contains('Smart Pathbook Tool').invoke('removeAttr', '_blank').click()
    cy.window().then(win => {
      cy.stub(win, 'open').callsFake((url, target) => {
        // call the original `win.open` method
        // but pass the `_self` argument
        return win.open.wrappedMethod.call(win, url, '_self')
      }).as('open')
    })
    cy.contains('Smart Pathbook Tool').click({ force:true })
    cy.get('@open').should('have.been.calledOnce')
    cy.wait(6000)

    //click root node
    //cy.visit('https://thcdecisions.cn/tlink/external/smartpathfiletool')
    cy.get('#id0').click()
    //open GL(BS) page
    cy.contains('Upload GL(BS)').click()
    cy.get('[value="Next"]').click()
    cy.get('[value="Next"]').click()
    cy.get('[value="Next"]').click()

    //const bsAlertStub = cy.stub()
    //cy.on('window:alert', bsAlertStub)

    const bsConfirmStub = cy.stub()
    cy.on('window:confirm', bsConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //open GL(IS) page
    cy.contains('Upload GL(IS)').click()
    cy.get('[value="Next"]').click()
    cy.get('[value="Next"]').click()
    cy.get('[value="Next"]').click()

    //const isAlertStub = cy.stub()
    //cy.on('window:alert', isAlertStub)

    //const isConfirmStub = cy.stub()
    //cy.on('window:confirm', isConfirmStub)

    cy.get('div.popup-win-close').first().click()
    cy.wait(2000)

    //Cash & Short Term node
    cy.get('#id199').click({ force:true })
    cy.wait(1000)
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(2000)

    //Investments node
    cy.get('#id103').click({ force: true })
    cy.get('[value="next3"]').click({ force:true })
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(5000)

    //Loans node
    cy.get('#id104').click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(3000)

    //select second file
    cy.get('span.fn').eq(1).click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(2000)

    //Other Assets node
    cy.get('#id105').click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(2000)

    //Time Deposits node
    cy.get('#id298').click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(5000)

    //Non Maturity node
    cy.get('#id297').click({ force: true })
    cy.wait(3000)
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click({ force: true })
    cy.wait(8000)
    cy.get('[value="next4"]').click()
    cy.wait(3000)

    //select second file
    cy.get('span.fn').eq(1).click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(1000)
    cy.get('[value="next4"]').click()
    cy.wait(2000)

    //Borrowings node
    cy.get('#id207').click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(2000)

    //select second file
    cy.get('span.fn').eq(1).click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(2000)

    //Other Liabilities node
    cy.get('#id209').click({ force: true })
    cy.get('[value="next2"]').click()
    cy.get('[value="next3"]').click()
    cy.wait(2000)

    //Validate and Download PATHBOOK
    cy.get('input[value="Validate and Download PATHBOOK"]').click()
    cy.wait(2000)
    cy.get('input[value="Download PATHBOOK"]').click({ force:true })
    //cy.wait(10000)

    copyAndCompareExcel()

    /*
    //copy downloaded pathfile to generate_report folder and then compare the pathfile
    cy.task('copyFileToDirSync', { fromPath:`${downloadsFolder}/`, toPath:`${generatePath}/`}).then((obj) => {
      const benchmarkFilePath = `${benchmarkPath}/${obj.fileName}${obj.extName}`
      const generateFilePath = `${obj.generateFilePath}`
      const diffFilePath = `${diffPath}/${obj.fileName}_${obj.currentTime}_diff${obj.extName}`

      cy.task('compareExcelFile', { benchmarkPath: benchmarkFilePath, generatePath: generateFilePath, diffPath: `${diffFilePath}`})
    })
    */
  })


})