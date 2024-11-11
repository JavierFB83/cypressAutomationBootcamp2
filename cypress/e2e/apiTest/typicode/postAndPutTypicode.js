describe('Testing POST and PUT on Typicode', () => {

  it('Send first POST', () => {
    cy.request({
      method: "POST",
      url: 'https://jsonplaceholder.typicode.com/posts/',
      body:{
        userID: 1,
        title: 'API testing with cypress',
        body: 'First POST'
      }
    })
  });

  it('check log with cy.log on first POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
      {
        userID: 1, 
        title: 'API testing with cypress', 
        body: 'First POST'
      }
    ).then((response) => {
      cy.log(JSON.stringify(response.body));
    })
  });

  it('check response on first POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
      {
        userID: 1, 
        title: 'API testing with cypress', 
        body: null
      }
    ).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(201);
      expect(response.body.title).to.be.a('string');
      expect(response.body).to.have.property('title', 'API testing with cypress');
      expect(response.body).to.have.property('body', null);
      expect(response.body).to.have.property('userID', 1);
      expect(response.body.userID).to.eq(1);
    });
  })

  it('Send "PUT" and check all the values modified on the response', () => {
    const putBody =  {
      userId:5,
      id: 5,
      title: 'news', 
      body: 'first put'
    }
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/5',  putBody).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.eq(putBody);
      });
   });

  it('Send first PATCH and check the response', () => {
  cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', 
    {
      userId:1,
      id: 5,
      title: 'news', 
      body: 'first post',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'news');
      expect(response.body.body).to.eq('first post');
      expect(response.body.userId).to.eq(1);
      expect(response.body).to.have.property('userId', 1);
      expect(response.body.id).to.eq(5);
    });
  });

  it('Send first DELETE method', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
   });

   it.only('Use all the method "POST" to create an object, "GET" to check is already created, "PATCH" to modify one property, "PUT" to overwrite all properties, "DELETE" to delete the object', () => {
    const postData = {
      "name": "Objeto creado por Javier Flores",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "Api testing with Cypress",
        "Hard disk size": "1 TB"
      }
    };
    cy.request('POST', 'https://api.restful-api.dev/objects', postData)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.include(postData);
        cy.wrap(response.body.id).as('objectID');
      });
    cy.get('@objectID').then((objectID) => {
      cy.log(objectID);
      cy.request('GET', `https://api.restful-api.dev/objects/${objectID}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include(postData);
      });
      cy.request('PATCH', `https://api.restful-api.dev/objects/${objectID}`, 
        {
        "name": "Cambiar nombre"
        }
      ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.include(
          {
            "name": "Cambiar nombre",
            "data": {
              "year": 2024,
              "price": 10,
              "CPU model": "Api testing with Cypress",
              "Hard disk size": "1 TB"
          }
      });
      cy.request('PUT', `https://api.restful-api.dev/objects/${objectID}`, 
        {
        "name": "Solo nombre"
        }
      ).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.include(
          {
            "name": "Solo nombre"
          }
        );
        });
      })
    cy.request('DELETE', `https://api.restful-api.dev/objects/${objectID}`)
    cy.request({url: `https://api.restful-api.dev/objects/${objectID}`, failOnStatusCode: false}).then((response) => {
      expect(response.status).to.eq(404);
      });
    });
   });

});