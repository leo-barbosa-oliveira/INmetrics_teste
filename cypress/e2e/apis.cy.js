//Verifique se a lista exibe somente produtos conforme sua busca.
//Validar o status code da resposta do serviço.
describe('Verificação de GET com Cypress', () => {
  it('Deve verificar que a resposta contém o ID selecionado', () => {
    const name = "headphones";
    
    cy.request('GET',`https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${name}`)
      .then((response) => {
        // Verifique se o status da resposta é 200
        expect(response.status).to.eq(200)

        // Verifique se algum objeto na resposta contém o ID desejado
        const objetoComID = response.body.find(item => item.categoryName.toUpperCase() === name.toUpperCase())
        expect(objetoComID).to.not.be.undefined

        console.log('Objeto com o ID selecionado:', objetoComID)
      })
  })
})
