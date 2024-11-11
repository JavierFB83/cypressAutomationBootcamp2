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

   it('Use all the method "POST" to create an object, "GET" to check is already created, "PATCH" to modify one property, "PUT" to overwrite all properties, "DELETE" to delete the object', () => {
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

   // Lo mismo pero mejor explicado
   it('All methods used in one test', () => {
    //Declaramos las variables a usar en los metodos POST, PUT y PATCH
    const postData = {
      "name": "Objeto creado por Javier Flores",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "Api testing with Cypress",
        "Hard disk size": "1 TB"
      }
    }
    const putData = {
      "name": "PUT update",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "PUT with Cypress",
        "Hard disk size": "1 TB"
      }
    }
    const patchData = {
      "name": "PATCH change",
      "data": {
        "CPU model": "Happy API testing with Cypress",
      }
    }
// Aqui hacemos un POST para crear un Objeto
    cy.request('POST', 'https://api.restful-api.dev/objects', postData)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.include(postData);
// Con cy.wrap guardamos el valor de la ID para usarlo más adelante
        cy.wrap(response.body.id).as('objectID');
      });
    cy.get('@objectID').then((objectID) => {
      cy.log(objectID);
      cy.request('GET', `https://api.restful-api.dev/objects/${objectID}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include(postData);
      });
// Aquí hacemos un PUT para comprobar que los datos se sobreescriben
    cy.request('PUT', `https://api.restful-api.dev/objects/${objectID}`, putData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(putData);
    });
    cy.wait(1000);
// Aquí hacemos un PATCH para comprobar que podemos modificar solo algunos datos, (pero en esta API actúa como un PUT)
    cy.request('PATCH', `https://api.restful-api.dev/objects/${objectID}`, patchData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(patchData);
    cy.request(`https://api.restful-api.dev/objects/${objectID}`)
    });
// Aquí hacemos un DELETE para borrar el objeto creado
    cy.request('DELETE', `https://api.restful-api.dev/objects/${objectID}`) .then((response) => {
      expect(response.body.message).to.eq(`Object with id = ${objectID} has been deleted.`);
    })
   });
  });


  // Guardar el valor de la ID en una variable para usarlos en otros tests

let id
//Declaramos la variable id vacía para luego ponerle elvalor de la ID y tener acceso en todos los tests 
    it('POST', () => {
        const bodyCreate = {
            name: "Prueba",
            data: null
        };
        cy.request('POST', 'https://api.restful-api.dev/objects', bodyCreate)
        .then((response) => {
            const res = response.body
            id = res.id
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyCreate);
            cy.log(res.createdAt);
            cy.log(res.id);
        })
    });

    it('PATCH', () => {
        const bodyUpdate = {
            data: {
                year: 2019,
            }
        }
        cy.request('PATCH',  `https://api.restful-api.dev/objects/${id}`, bodyUpdate)
        .then((response) => {
            const res = response.body
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyUpdate);
            expect(res.id).to.deep.eq(id);
            expect(res.updatedAt).to.be.a('string');
        })
    })

    it('GET new product created', () => {
        const expectedBody = {
            id: id,
            name: "Prueba",
            data: {
                year: 2019,
            }
        }
        cy.request('GET', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });

    it('DELETE new product created', () => {
        const expectedBody = {
            message: `Object with id = ${id} has been deleted.`
        }
        cy.request('DELETE', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });


});